var TestCase = require('njsunit').TestCase

class ExampleTestCase extends TestCase {
    constructor() {
        super()
    }
    testStringIndexOf() {
        this.assert('abc'.indexOf('b') === 1)
    }
}

module.exports = ExampleTestCase