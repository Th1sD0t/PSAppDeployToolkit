[string]$Desktop = [System.Environment]::GetFolderPath('DesktopDirectory')
[string]$WDADesktop = 'C:\Users\WDAGUtilityAccount\Desktop'
[string]$Win32App = "$($env:ProgramData)\Win32App"
[string]$Application = "$(& git branch --show-current)"
[string]$Cache = "$($Win32App)\$($Application)"

Remove-Item -Path "$Cache" -Recurse -Force -ErrorAction Ignore
Copy-Item -Path 'Toolkit' -Destination "$Cache" -Recurse -Force -Verbose -ErrorAction Ignore
Start-Process -FilePath 'explorer.exe' -ArgumentList "$Cache"