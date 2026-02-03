[CmdletBinding()]
param(
  [switch]$RemoveVolumes
)

$ErrorActionPreference = 'Stop'

Write-Host "Close the PowerShell window started by .\scripts\dev.ps1 to stop the dev server." -ForegroundColor Green
if ($RemoveVolumes) {
  Write-Host "(No volumes to remove; Docker is not used in the static-only setup.)" -ForegroundColor Yellow
}
