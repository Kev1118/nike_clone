$files = @('composer.json', 'package.json')
foreach ($name in $files) {
    $path = Join-Path $PSScriptRoot $name
    $content = [System.IO.File]::ReadAllText($path)
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($path, $content, $utf8)
    Write-Host "Fixed: $name"
}
