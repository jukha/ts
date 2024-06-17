type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  eventEmitterMap = new Map();
  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.eventEmitterMap.has(eventName)) {
      this.eventEmitterMap.get(eventName).push(callback);
    } else {
      this.eventEmitterMap.set(eventName, [callback]);
    }
    return {
      unsubscribe: () => {
        const filteredArr = this.eventEmitterMap
          .get(eventName)
          .filter((f: Callback) => {
            if (f !== callback) return f;
          });
        this.eventEmitterMap.set(eventName, filteredArr);
        return undefined;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (this.eventEmitterMap.has(eventName)) {
      const resultsArr = this.eventEmitterMap
        .get(eventName)
        .map((f: Callback) => f(...args));

      return resultsArr;
    } else return [];
  }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
console.log(sub1.unsubscribe()); // undefined
console.log(emitter.emit("firstEvent", [5])); // [7]
