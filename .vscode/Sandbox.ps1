. ".vscode\Global.ps1"

Copy-Item -Path ".vscode\$LogonCommand" -Destination "$Win32App\" -Recurse -Force -Verbose -ErrorAction Ignore

@"
<Configuration>
    <Networking>Enabled</Networking>
    <MappedFolders>
        <MappedFolder>
            <HostFolder>$Win32App</HostFolder>
            <SandboxFolder>$WDADesktop</SandboxFolder>
            <ReadOnly>True</ReadOnly>
        </MappedFolder>
    </MappedFolders>
    <LogonCommand>
        <Command>powershell.exe -ExecutionPolicy Unrestricted -Command "Start-Process -FilePath `"powershell.exe`" -ArgumentList `"-NoLogo -File `"$WDADesktop`"`"
    </LogonCommand>
</Configuration>
"@ | Out-File -FilePath "$Win32App\$Application.wsb"

Start-Process -FilePath "explorer.exe" -ArgumentList "$Win32App\Application.wsb" -Verbose -WindowStyle Maximized