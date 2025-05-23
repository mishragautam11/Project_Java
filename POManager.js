const base = require('@playwright/test');
const { MessageFactory } = require('../messages/messageFactory');
const { JsonUtil } = require('../utils/jsonUtil');
const { SamplePage } = require('../pages/samplePage');

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
  MessageFactory : async ({ page }, use) => {
    await use(new MessageFactory());
  },
  JsonUtil : async ({ page }, use) => {
    await use(new JsonUtil());
  },
  SamplePage : async ({ page }, use) => {
    await use(new SamplePage(page));
  },
});
exports.expect = base.expect;