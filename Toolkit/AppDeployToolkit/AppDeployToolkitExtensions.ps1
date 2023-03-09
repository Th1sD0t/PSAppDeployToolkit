<#
.SYNOPSIS

PSAppDeployToolkit - Provides the ability to extend and customise the toolkit by adding your own functions that can be re-used.

.DESCRIPTION

This script is a template that allows you to extend the toolkit with your own custom functions.

This script is dot-sourced by the AppDeployToolkitMain.ps1 script which contains the logic and functions required to install or uninstall an application.

PSApppDeployToolkit is licensed under the GNU LGPLv3 License - (C) 2023 PSAppDeployToolkit Team (Sean Lillis, Dan Cunningham and Muhammad Mashwani).

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the
Free Software Foundation, either version 3 of the License, or any later version. This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
for more details. You should have received a copy of the GNU Lesser General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.

.EXAMPLE

powershell.exe -File .\AppDeployToolkitHelp.ps1

.INPUTS

None

You cannot pipe objects to this script.

.OUTPUTS

None

This script does not generate any output.

.NOTES

.LINK

https://psappdeploytoolkit.com
#>


[CmdletBinding()]
Param (
)

##*===============================================
##* VARIABLE DECLARATION
##*===============================================

# Variables: Script
[string]$appDeployToolkitExtName = 'PSAppDeployToolkitExt'
[string]$appDeployExtScriptFriendlyName = 'App Deploy Toolkit Extensions'
[version]$appDeployExtScriptVersion = [version]'3.9.2'
[string]$appDeployExtScriptDate = '02/02/2023'
[hashtable]$appDeployExtScriptParameters = $PSBoundParameters

##*===============================================
##* FUNCTION LISTINGS
##*===============================================

function Import-RegFile {
    <#
    .SYNOPSIS
        Read the .reg file and exports the keys to a PsObject with the following properties: Key, Name, Value, Type
    .DESCRIPTION
        Read the .reg file and exports the keys to a PsObject with the following properties: Key, Name, Value, Type
    .PARAMETER Path
        Path of the .reg file to import
    .EXAMPLE
        Import-RegFile -File "C:\registry.reg"
    .NOTES
        Script idea taken from: https://social.technet.microsoft.com/Forums/scriptcenter/en-US/a623f698-4364-40bf-84a1-1fbae3852c1d/powershell-how-to-parse-a-registry-text-file?forum=ITCG
        Modified to be more robust
    #>
    [CmdLetBinding()]
    Param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )
    Begin {
        ## Get the name of this function and write header
        [string]${CmdletName} = $PSCmdlet.MyInvocation.MyCommand.Name
        Write-FunctionHeaderOrFooter -CmdletName ${CmdletName} -CmdletBoundParameters $PSBoundParameters -Header
        #Set the special character used in .reg file to define end of string
        $endOfString = [char]0x0000
    }
    Process {
        Try {
            $fi = Get-Item $Path
            $file = $fi.OpenText()
            Write-Log -Message "File succesfully loaded: $Path" -Source ${CmdletName}
            While (!($file.EndOfStream)) {
                $line = $file.ReadLine()
                if ($line.Length -gt 0) {
                    if ($line -match '^\[(.*)\]$' ) {
                        if ($emptyFolder) {
                            $hash = @{Key = $key; Name = "(Default)"; Value = $null; Type = "String" }
                            Write-Log -Message "Empty registry key found: Key=$key" -Source ${CmdletName}
                            New-Object PSObject -Property $hash
                        }
                        $key = $matches[1]
                        $emptyFolder = $true
                    }
                    if ($line -match '=') {
                        $emptyFolder = $false
                        while (($line.Trim().Substring($line.Length - 1, 1) -eq "\") -or ($line.Split("=", 2)[1].Substring(0, 1) -eq """" -and $line.Trim().Substring($line.Length - 1, 1) -ne """")) {
                            if ($line.Trim().Substring($line.Length - 1, 1) -eq "\") {
                                #Not finished hex value
                                $line = $line.Replace("\", "").Trim() + $file.ReadLine().Trim()
                            }
                            else {
                                #String not finished, return carriage causes a new line in the file
                                $line = $line.Trim() + "`r`n" + $file.ReadLine().Trim()
                            }
                        }
                        $a = $line.Split("=", 2)
                        $name = $a[0].Replace('"', '')
                        if ($name -eq "@") { $name = "(Default)" }
                        if ($a[1].Substring(0, 1) -eq """") {
                            $value = $a[1].Substring(1, $a[1].Length - 2).Replace("\\", "\").Replace("\""", """")
                            $type = 'String'
                        }
                        else {
                            $b = $a[1].Split(':', 2)
                            if ($b[0] -eq "dword") {
                                $type = "Dword"
                                $value = [convert]::toint32($b[1], 16)
                            }
                            elseif ($b[0] -eq "hex") {
                                $type = "Binary"
                                $value = [byte[]]($b[1].Split(',') | ForEach-Object { "0x$_" })
                            }
                            elseif ($b[0] -eq "hex(b)") {
                                $type = "QWord"
                                $value = [BitConverter]::ToInt64([byte[]]($b[1].Split(',') | ForEach-Object { "0x$_" }), 0)
                            }
                            elseif ($b[0] -eq "hex(2)") {
                                $type = "ExpandString"
                                $value = [System.Text.Encoding]::Unicode.GetString([byte[]]($b[1].Split(',') | ForEach-Object { "0x$_" })).Trim($endOfString)
                            }
                            elseif ($b[0] -eq "hex(7)") {
                                $type = "MultiString"
                                $value = [System.Text.Encoding]::Unicode.GetString([byte[]]($b[1].Split(',') | ForEach-Object { "0x$_" })).Trim($endOfString).Split($endOfString)
                            }
                            else {
                                $type = "Unknown"
                            }
                        }
                        $hash = @{Key = $key; Name = $name; Value = $value; Type = $type }
                        Write-Log -Message "Registry key found with the following properties: Key=$key, Name=$name, Value=$value, Type=$type" -Source ${CmdletName}
                        New-Object PSObject -Property $hash
                    }
                }
            }
        }
        catch {
            Write-Log -Message "Failed to parse the reg file ($Path). `n$(Resolve-Error)" -Severity 3 -Source ${CmdletName}
        }
    }
    End {
        Write-FunctionHeaderOrFooter -CmdletName ${CmdletName} -Footer
    }
}
function Invoke-CompressFiles {
    param(
        [String]$SourceFilePath,
        [String]$TargetDirectory = "$($dirFiles)",
        [Switch]$Purge
    )
    [String]$defaultArchiveName = "archive.zip"
    [String]$filePurgeParameter = ""
    [Bool]$applicationFilesPresent = $false
    [Bool]$sourceFilePathExists = $false

    $files = Invoke-FileCheck -ObjectPaths "$($dirSupportFiles)\7z.exe", "$($dirSupportFiles)\7z.dll"
    if($files.Result -eq 0){
        $applicationFilesPresent = $true
    } else {
        $applicationFilesPresent = $false
        Write-Log -Message "A required file is missing. Please check the log for details." -Severity 3
        return 70000
    }

    $files = Invoke-FileCheck -ObjectPaths "$SourceFilePath"
    if($files.Result -eq 0){
        $sourceFilePathExists = $true
    } else {
        $sourceFilePathExists = $false
        Write-Log -Message "A required file or folder is missing. Please check the log for details." -Severity 3
        return 70001
    }

    if ($applicationFilesPresent -and $sourceFilePathExists) {
        if($Purge.IsPresent){
            $filePurgeParameter = "-sdel"
        }
        try {
            return Execute-Process -Path "$($dirSupportFiles)\7z.exe" -Parameters "a `"$($TargetDirectory)\$($defaultArchiveName)`" `"$SourceFilePath`" $filePurgeParameter" -PassThru
        }
        catch {
            Write-Log -Message "An error occured while creating the archive '$($TargetDirectory)\$($defaultArchiveName)'." -Severity 3
            return 70002
        }
    }
}
function Invoke-DecompressFiles {
    param(
        [String]$ArchiveFilePath = "$($dirFiles)\archive.zip",
        [String]$TargetDirectory = "$($env:windir)\temp\ExtractedSourceFiles\$((Get-Item -Path "$PSScriptRoot").Parent.Name)",
        [Switch]$OverwriteExistingFiles
    )
    [Bool]$applicationFilesPresent = $false
    [Bool]$sourceFilePathExists = $false
    [String]$overwriteParameter = "-aos"

    $files = Invoke-FileCheck -ObjectPaths "$($dirSupportFiles)\7z.exe", "$($dirSupportFiles)\7z.dll"
    if($files.Result -eq 0){
        $applicationFilesPresent = $true
    } else {
        $applicationFilesPresent = $false
        Write-Log -Message "A required file or folder is missing. Please check the log for details." -Severity 3
        return 70000
    }

    $files = Invoke-FileCheck -ObjectPaths "$ArchiveFilePath"
    if($files.Result -eq 0){
        $sourceFilePathExists = $true
    } else {
        $sourceFilePathExists = $false
        Write-Log -Message "The archive does not exist. Aborting." -Severity 3
        return 70001
    }

    if ($applicationFilesPresent -and $sourceFilePathExists) {
        if($OverwriteExistingFiles.IsPresent){
            $overwriteParameter = "-aoa"
        }
        try {
            Show-InstallationProgress -StatusMessage "Decompressing Source Files. Please wait..."
            Execute-Process -Path "$($dirSupportFiles)\7z.exe" -Parameters "x `"$ArchiveFilePath`" -o`"$($TargetDirectory)`" $overwriteParameter -y"
            Show-InstallationProgress -StatusMessage "Installation in progress. Please wait..."
        }
        catch {
            Write-Log -Message "An error occured while creating the archive '$($TargetDirectory)\$($defaultArchiveName)'." -Severity 3
            Close-InstallationProgress
            throw [System.IO.FileNotFoundException]::new("Failed to extract source files")
        }
    }
    return $TargetDirectory
}

function Invoke-FileCheck {
    param(
        [String[]]$ObjectPaths
    )
    $result = [PSCustomObject]@{
        Existing = @()
        Missing = @()
        Result = 0
    }
    foreach($object in $ObjectPaths){
        if(Test-Path -Path $object){
            $result.Existing += @($object)
            Write-Log -Message "Object '$object' was found." -Severity 1
        } else {
            $result.Missing += @($object)
            Write-Log -Message "Object '$object' is missing." -Severity 2
        }
    }
    if($result.Missing.Count -gt 0){
        $result.Result = -1
    }
    return $result
}
##*===============================================
##* END FUNCTION LISTINGS
##*===============================================

##*===============================================
##* SCRIPT BODY
##*===============================================

If ($scriptParentPath) {
    Write-Log -Message "Script [$($MyInvocation.MyCommand.Definition)] dot-source invoked by [$(((Get-Variable -Name MyInvocation).Value).ScriptName)]" -Source $appDeployToolkitExtName
}
Else {
    Write-Log -Message "Script [$($MyInvocation.MyCommand.Definition)] invoked directly" -Source $appDeployToolkitExtName
}

##*===============================================
##* END SCRIPT BODY
##*===============================================
