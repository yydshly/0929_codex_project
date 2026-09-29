"""Local visual and interaction check; requires Playwright browser binaries."""

from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
site = root.parents[1] / "site" / "008-handraw-style"
url = (site / "index.html").as_uri()
gallery_url = (site / "gallery.html").as_uri()
trials_url = (site / "trials.html").as_uri()
workflow_url = (site / "workflow.html").as_uri()
scenarios_url = (site / "scenarios.html").as_uri()
assets = root / "assets"
assets.mkdir(exist_ok=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    for width, height, name in [(1440, 900, "desktop"), (390, 844, "mobile")]:
        page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(url, wait_until="load")
        page.screenshot(path=str(assets / f"showcase-{name}-first-screen.png"))
        assert page.locator(".style-card").count() == 6
        assert page.locator(".pattern-card").count() == 4
        assert page.locator(".scenario-grid article").count() == 6
        assert page.locator(".summary-list > div").count() == 5
        assert page.locator(".hero-map img").evaluate("node => node.complete && node.naturalWidth == 2400")
        assert "先作为参考库保存" in page.locator("#assessment").inner_text()
        page.locator("#assessment").screenshot(path=str(assets / f"assessment-{name}.png"))
        map_image = page.locator("#map img")
        map_image.scroll_into_view_if_needed()
        assert map_image.evaluate("node => node.complete && node.naturalWidth == 2400")
        assert page.locator('#map a[href="capability-map.png"]').count() == 2
        page.locator("#map").screenshot(path=str(assets / f"map-in-page-{name}.png"))
        assert page.locator(".trial-card").count() == 9
        page.locator(".style-card img").first.scroll_into_view_if_needed()
        page.wait_for_function("document.querySelector('.style-card img').naturalWidth > 0")
        assert page.locator("#style-select option").count() == 280
        assert page.locator("#layout-select option").count() == 125
        assert page.locator("#color-select option").count() == 36
        assert not errors, errors
        page.locator(".style-card").first.click()
        assert page.locator(".style-card").first.get_attribute("aria-expanded") == "true"
        page.locator("#layout-select").select_option("IG-003")
        assert page.locator("#mode-select").is_disabled()
        assert "多行左文右图" in page.locator("#prompt-output").inner_text()
        assert "小红书信息图" in page.locator("#prompt-output").inner_text()
        assert "IG-003.webp" in page.locator("#selected-layout-reference").get_attribute("href")
        page.locator("#layout-select").select_option("none")
        assert page.locator("#mode-select").is_enabled()
        page.screenshot(path=str(assets / f"showcase-{name}.png"), full_page=True)
        overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth")
        assert not overflow, f"horizontal overflow at {width}px"
        print(f"{name}: six styles, four layouts, six scenarios, prompt interaction, no page errors or overflow")
        page.close()
        gallery = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        gallery_errors = []
        gallery.on("pageerror", lambda error: gallery_errors.append(str(error)))
        gallery.goto(gallery_url, wait_until="load")
        assert gallery.locator(".item").count() == 280
        gallery.screenshot(path=str(assets / f"gallery-{name}-first-screen.png"))
        gallery.locator("#search").fill("268")
        assert gallery.locator(".item").count() == 1
        gallery.locator(".item").first.click()
        assert gallery.locator("#detail").evaluate("node => node.open")
        gallery.wait_for_function("document.querySelector('#detail-image').naturalWidth > 0")
        gallery.locator(".close").click()
        gallery.locator('[data-type="layouts"]').click()
        assert gallery.locator(".item").count() == 124
        gallery.locator('[data-type="colors"]').click()
        assert gallery.locator(".item").count() == 36
        assert not gallery_errors, gallery_errors
        assert not gallery.evaluate("document.documentElement.scrollWidth > window.innerWidth"), f"gallery overflow at {width}px"
        print(f"{name} gallery: 280 styles, 124 layouts, 36 colors, search and detail modal verified")
        gallery.close()
        trials = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        trials.goto(trials_url, wait_until="load")
        assert trials.locator(".card").count() == 9
        assert trials.locator(".card img").count() == 9
        trials.screenshot(path=str(assets / f"trials-{name}-first-screen.png"))
        trials.locator(".source-strip").scroll_into_view_if_needed()
        trials.wait_for_function("document.querySelector('.source-strip img').naturalWidth > 0")
        trials.screenshot(path=str(assets / f"trials-{name}-photo-source.png"))
        trials.locator(".card img").last.scroll_into_view_if_needed()
        trials.wait_for_function("document.querySelector('.card:last-child img').naturalWidth > 0")
        assert not trials.evaluate("document.documentElement.scrollWidth > window.innerWidth"), f"trials overflow at {width}px"
        print(f"{name} trials: nine generated images and reference links verified")
        trials.close()
        workflow = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        workflow.goto(workflow_url, wait_until="load")
        assert workflow.locator(".card").count() == 4
        assert workflow.locator('a[href^="prompts/"]').count() == 4
        assert "#029" in workflow.locator("main").inner_text()
        assert not workflow.evaluate("document.documentElement.scrollWidth > window.innerWidth"), f"workflow overflow at {width}px"
        workflow.screenshot(path=str(assets / f"workflow-{name}-first-screen.png"))
        print(f"{name} workflow: four CLI outputs and model resolver table verified")
        workflow.close()
        scenarios = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        scenario_errors = []
        scenarios.on("pageerror", lambda error: scenario_errors.append(str(error)))
        scenarios.goto(scenarios_url, wait_until="load")
        scenarios.screenshot(path=str(assets / f"scenarios-{name}-first-screen.png"))
        assert scenarios.locator(".group").count() == 6
        assert "先收录，按需调用" in scenarios.locator(".decision").inner_text()
        scenarios.locator(".decision").screenshot(path=str(assets / f"scenario-decision-{name}.png"))
        assert scenarios.locator(".card").count() == 12
        assert scenarios.locator(".card img").count() == 12
        for image in scenarios.locator(".card img").all():
            image.scroll_into_view_if_needed()
            assert image.evaluate("node => node.complete && node.naturalWidth > 0"), image.get_attribute("src")
        scenarios.locator('[data-filter="brand"]').click()
        assert scenarios.locator(".group:visible").count() == 1
        assert scenarios.locator(".card:visible").count() == 2
        assert "2 张样例" in scenarios.locator("#count").inner_text()
        scenarios.locator('[data-filter="all"]').click()
        assert scenarios.locator(".card:visible").count() == 12
        assert not scenario_errors, scenario_errors
        assert not scenarios.evaluate("document.documentElement.scrollWidth > window.innerWidth"), f"scenario overflow at {width}px"
        scenarios.screenshot(path=str(assets / f"scenarios-{name}.png"), full_page=True)
        print(f"{name} scenarios: 12 images, six categories, filter and no overflow verified")
        scenarios.close()
    browser.close()
