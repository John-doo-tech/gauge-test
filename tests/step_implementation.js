/* globals gauge*/
"use strict";

var _tableMapper = require('./tableMapper')
const path = require('path');
const env = require('../env/config.env.js').testENV
const {
    openBrowser,
    closeBrowser,
    goto,
    screenshot,
    click,
    text,
    currentURL,
    $,
    scrollTo,
    evaluate
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

const sleekPage = {
    "Home": `${env.host}/sg/`,
    "Pricing": `${env.host}/sg/all-services/`
}

beforeScenario(async () => {
    await openBrowser({
        headless: headless,
        args: [
            // "--start-fullscreen"
            "--start-maximized"
            // "--window-size=1420,1080"
        ]
    })
});

afterScenario(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step('Given I went to the Sleek SG <page> page', async (page) => {
    await goto(sleekPage[page]);
});
step('Given I am on the Sleek SG <page> page', async (page) => {
    await goto(sleekPage[page]);
});

step("When I click on the <text> link", async function (text) {
    await click(text);
});
step("When I click the <buttonText> button for <categoryText>", async function (buttonText, categoryText) {
    await click($('//div[@class="elementor-widget-container"]/a[@href="/sg/corporate-secretary-singapore/"]'));
    await scrollTo(text('All plans include:'));
    assert.ok((await $('//p[contains(text(),"S$240/year")]')).exists());
});

step("Then I should be navigated to the Sleek SG <page> page", async function (page) {
    assert.ok(await currentURL(), sleekPage[page]);
});
step("And I Adjust shareholder/price Then verify that the shareholder/price <table>", async function (table) {
    // await new Promise(resolve => setTimeout(resolve, 10000));
    let table_mapping = await _tableMapper.getTableMapping(table);
    for(let i in table_mapping){
        await click($(table_mapping[i].xpath));
        assert.ok((await text(table_mapping[i].noShareholders,{ exactMatch: true }).exists()));
        assert.ok((await text(table_mapping[i].pricePerYear,{ exactMatch: true }).exists()));
    }
});



step("Clear all tasks", async function () {
    await evaluate(() => localStorage.clear());
});
