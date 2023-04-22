. ".vscode\Global.ps1"
# Check if Converter executable is present
if(Test-Path -Path '.\ContentPrep\IntuneWinAppUtil.exe') {
    try {
        & '.\ContentPrep\IntuneWinAppUtil.exe' -c `".\Toolkit`" -s `".\Toolkit\Deploy-Application.exe`" -o `"$Cache\Intune`" -q
    }
    catch {
        Write-Error -Message "The Intune file could not be created."
    }
}