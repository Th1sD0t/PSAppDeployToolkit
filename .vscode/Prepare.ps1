. ".vscode\Global.ps1"
$intuneWinAppUtilFilePath = '.\ContentPrep\IntuneWinAppUtil.exe'
$7zFilePath = "$($env:ProgramFiles)\7-Zip\7z.exe"

if(Test-Path -Path "$($intuneWinAppUtilFilePath)") {
    try {
        & '.\ContentPrep\IntuneWinAppUtil.exe' -c `".\Toolkit`" -s `".\Toolkit\Deploy-Application.exe`" -o `"$Cache\Intune`" -q
    }
    catch {
        Write-Error -Message "The Intune file could not be created."
    }
}
if(Test-Path -Path "$($7zFilePath)"){
 try{
    & "$($7zFilePath)" a -mx9 `"$($Cache)\$($Application).7z`" `".\Toolkit\*`"
 } catch {

 }
}