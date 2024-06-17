"use strict";
class EventEmitter {
    constructor() {
        this.eventEmitterMap = new Map();
    }
    subscribe(eventName, callback) {
        if (this.eventEmitterMap.has(eventName)) {
            this.eventEmitterMap.get(eventName).push(callback);
        }
        else {
            this.eventEmitterMap.set(eventName, [callback]);
        }
        return {
            unsubscribe: () => {
                const filteredArr = this.eventEmitterMap
                    .get(eventName)
                    .filter((f) => {
                    if (f !== callback)
                        return f;
                });
                this.eventEmitterMap.set(eventName, filteredArr);
                return undefined;
            },
        };
    }
    emit(eventName, args = []) {
        if (this.eventEmitterMap.has(eventName)) {
            const resultsArr = this.eventEmitterMap
                .get(eventName)
                .map((f) => f(...args));
            return resultsArr;
        }
        else
            return [];
    }
}
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
console.log(sub1.unsubscribe());
console.log(emitter.emit("firstEvent", [5]));
