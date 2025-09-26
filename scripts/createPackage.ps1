mkdir Debug

if (-not (Test-Path -Path logs)) {
    mkdir logs
}

"" | Out-File logs/package.log

$commands = @("powershell.exe scripts/buildProject.ps1", "npm pack --pack-destination ./Debug", "Remove-Item -Recurse -Force dist", "mv ./Debug/* ../ -Force", "Remove-Item Debug")

foreach ($cmd in $commands) {
    Write-Host("Executing: $cmd")
    $output = Invoke-Expression $cmd
    $output | Out-File -Append logs/package.log
}
