$ErrorActionPreference = 'Stop'
$projectDir = Split-Path -Parent $PSScriptRoot
$repoDir = Split-Path -Parent (Split-Path -Parent $projectDir)
$catalog = Get-Content -LiteralPath (Join-Path $projectDir 'skills-catalog.json') -Raw | ConvertFrom-Json
$details = Get-Content -LiteralPath (Join-Path $projectDir 'capability-details.json') -Raw | ConvertFrom-Json -AsHashtable
if ($catalog.Count -ne 25 -or $details.Count -ne 25) { throw 'Expected exactly 25 skills and detail records.' }
$merged = foreach ($skill in $catalog) {
    if (-not $details.ContainsKey($skill.name)) { throw ('Missing details: ' + $skill.name) }
    $item = [ordered]@{}
    foreach ($property in $skill.PSObject.Properties) { $item[$property.Name] = $property.Value }
    foreach ($key in $details[$skill.name].Keys) { $item[$key] = $details[$skill.name][$key] }
    if ($item.capabilities.Count -ne 3 -or $item.deliverables.Count -ne 2) { throw ('Incomplete capability record: ' + $skill.name) }
    $item
}
$data = 'window.AGENT_SKILLS_DATA = ' + (ConvertTo-Json -InputObject @($merged) -Depth 8) + ';'
Set-Content -LiteralPath (Join-Path $PSScriptRoot 'data.js') -Value $data -Encoding utf8

# Both reading formats use the same detailed data.
$md = [System.Collections.Generic.List[string]]::new()
$md.Add('# Agent Skills · 具体能力与交付物')
$md.Add('')
$md.Add('本页聚焦每项技能具体处理的工作、交付物和能力边界。所有能力依据固定版本 `2686b620fc1fed2e8f60c704839c766b8594c6b6` 的上游文档整理；问题示例为解读性举例，非实测结果。')
$md.Add('')
$md.Add('[打开交互网页](web/index.html) · [返回研究入口](README.md)')
$md.Add('')
$index = 0
foreach ($item in $merged) {
    $index++
    $md.Add('## ' + $index + '. ' + $item.title + ' · ' + $item.name)
    $md.Add('')
    $md.Add($item.summary)
    $md.Add('')
    $md.Add('**具体工作**')
    $md.Add('')
    foreach ($capability in $item.capabilities) { $md.Add('- ' + $capability) }
    $md.Add('')
    $md.Add('**交付物**：' + ($item.deliverables -join '；') + '。')
    $md.Add('')
    $md.Add('**处理依据**：' + $item.input)
    $md.Add('')
    $md.Add('**问题示例**：' + $item.case.before)
    $md.Add('')
    $md.Add('**该能力推动的结果**：' + $item.case.after)
    $md.Add('')
    $md.Add('**适用场景**：' + $item.scenario)
    $md.Add('')
    $md.Add('**能力分工**：' + $item.distinction)
    $md.Add('')
    $md.Add('**能力边界**：' + $item.limit)
    $md.Add('')
    $md.Add('[固定版本来源](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/' + $item.name + '/SKILL.md)')
    $md.Add('')
}
Set-Content -LiteralPath (Join-Path $projectDir 'CAPABILITIES.md') -Value (($md -join [Environment]::NewLine).TrimEnd()) -Encoding utf8

$siteDir = Join-Path $repoDir 'site/002-agent-skills'
New-Item -ItemType Directory -Path $siteDir -Force | Out-Null
foreach ($file in @('index.html','styles.css','app.js','data.js','capability-summary.svg','capability-summary.png')) {
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot $file) -Destination (Join-Path $siteDir $file) -Force
}
foreach ($file in @('full-map.html','full-map.css','full-map.js','full-map-layout.js','agent-skills-full-map.svg','agent-skills-full-map.png')) {
    $source = Join-Path $PSScriptRoot $file
    if (Test-Path -LiteralPath $source) { Copy-Item -LiteralPath $source -Destination (Join-Path $siteDir $file) -Force }
}
Write-Output ('Built ' + $merged.Count + ' capabilities; Markdown and static site are synchronized.')
