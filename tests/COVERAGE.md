# Coverage (testing)

### 1. Preps for testing

    1.1 Copy-pasted package.json with package.json
    1.2 npm ci (see for message below)
> npm WARN deprecated core-js@2.6.12: core-js@<3.4 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.

### npm WARN deprecated core-js@2.6.12 [SOLVED] :

    1.3 npm update core-js@latest

---

### Testing with Playwright

Line 8 (unless edited) within example.spec.js [FAILING] with message "page.screenshot: Protocol error (Page.captureScreenshot): Cannot take screenshot with 0 width."

> See for attached_broken.png in /test (manually screenshoted as was unable to catch a broken DevTools image)


