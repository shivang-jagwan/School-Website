[CmdletBinding()]
param(
  [switch]$SkipInstall
)

$ErrorActionPreference = 'Stop'

function Write-Step([string]$Message) {
  Write-Host "`n==> $Message" -ForegroundColor Cyan
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
Push-Location $repoRoot
try {
  if (-not $SkipInstall) {
    Write-Step "Installing dependencies (web)"
    npm --prefix "apps\web" install | Out-Host
  }

  Write-Step "Starting Web in a separate PowerShell window"
  $webCmd = "cd `"$repoRoot`"; npm --prefix `"apps\web`" run dev"
  Start-Process -FilePath "powershell" -ArgumentList @("-NoExit", "-Command", $webCmd) | Out-Null

  Write-Host "`nURLs:" -ForegroundColor Green
  Write-Host "- Web:  http://localhost:3000"

  Write-Host "`nTips:" -ForegroundColor Green
  Write-Host "- To skip installs: .\scripts\dev.ps1 -SkipInstall"
} finally {
  Pop-Location
}
