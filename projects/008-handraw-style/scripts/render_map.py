"""Render the fixed-size, self-contained visual summary from its HTML source."""

from pathlib import Path
from playwright.sync_api import sync_playwright

project = Path(__file__).resolve().parents[1]
source = project.parents[1] / "site" / "008-handraw-style" / "capability-map-source.html"
output = project / "assets" / "capability-map.png"
output.parent.mkdir(exist_ok=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 2400, "height": 1400}, device_scale_factor=1)
    page.goto(source.as_uri(), wait_until="load")
    images = page.locator("#poster img")
    assert images.count() == 14, f"Expected 14 references and actual samples, got {images.count()}"
    for image in images.all():
        assert image.evaluate("node => node.complete && node.naturalWidth > 0"), image.get_attribute("src")
    poster = page.locator("#poster")
    assert poster.evaluate("node => node.scrollWidth <= node.clientWidth"), "Map content overflows horizontally"
    poster.screenshot(path=str(output), animations="disabled")
    width, height = poster.evaluate("node => [node.clientWidth, node.clientHeight]")
    print(f"Rendered {output}: {width} × {height}, {images.count()} images loaded")
    browser.close()
