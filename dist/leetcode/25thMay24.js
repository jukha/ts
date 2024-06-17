"use strict";
function compose(functions) {
    return function (x) {
        return functions.reduceRight((y, f) => f(y), x);
    };
}
const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4);
