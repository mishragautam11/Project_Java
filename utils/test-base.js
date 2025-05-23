// const base = require('@playwright/test');
import { test  , expect } from '../testFixtures/browserFixture';
const base = require('../testFixtures/browserFixture');

exports.customtest = base.test.extend(
    {
        testDataForOrder : {
            shoppingTypeHD:"HD",
            shoppingTypeCC:"CC"
        }
    }


)