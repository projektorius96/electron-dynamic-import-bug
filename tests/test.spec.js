const { _electron: electron } = require('playwright')
const { test, expect } = require('@playwright/test');

test('test_1', async () => {
    const electronApp = await electron.launch({ args: ['main.js'] })

    const window = await electronApp.firstWindow()
    await window.screenshot({ path: 'devTools.png'}) // [FAILING] refer to COVERAGE.md at Testing with Playwright
    
    // await electronApp.close()
});