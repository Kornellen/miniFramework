function RemovePath {
    param (
        [string] $path
    )

    if (Test-Path -Path $path) {
        Remove-Item -Recurse $path
    }
}

$dirs = @("dist", "logs", "*.tgz")

foreach ($dir in $dirs) {
    RemovePath($dir)
}

