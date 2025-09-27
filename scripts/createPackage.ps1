if (-not (Test-Path -Path logs)) {
    mkdir logs
}

"" | Out-File logs/package.log

$commands = @("npm run build:project", "npm pack --pack-destination .")

foreach ($cmd in $commands) {
    Write-Host("Executing: $cmd")
    $output = Invoke-Expression $cmd
    $output | Out-File -Append logs/package.log
}
