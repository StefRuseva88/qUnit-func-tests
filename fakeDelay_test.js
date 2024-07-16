const {fake_delay} = require("./async_test_functions.js");

QUnit.test("Delay Function Tests", async function(assert) {
    const start = Date.now();
    await fake_delay(1000);
    const end = Date.now();
    const difference = end - start;
    assert.ok(difference >= 1000, "Delay is at least 1000 milliseconds");
});

