if (Test-Path -Path dist) {
    Remove-Item -Recurse -Force dist
}

tsc

Copy-Item -Recurse ./src/types ./dist/
