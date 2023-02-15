. ".vscode\Global.ps1"

#Copy-Item -Path ".vscode\$LogonCommand" -Destination "$Win32App\" -Recurse -Force -Verbose -ErrorAction Ignore

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
        <Command>powershell -ExecutionPolicy Unrestricted -Command "start powershell { -NoExit -File "$WDADesktop\$Application\Deploy-Application.ps1 }"</Command>
    </LogonCommand>
</Configuration>
"@ | Out-File -FilePath "$Win32App\$Application.wsb"

Start-Process -FilePath "$Win32App\$Application.wsb" -Verbose -WindowStyle Maximized