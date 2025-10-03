
if (Test-Path -Path .\node_modules) {
    Remove-Item -Recurse .\node_modules -Force
}

if (Test-Path -Path .\package-lock.json) {
    Remove-Item .\package-lock.json -Force
}