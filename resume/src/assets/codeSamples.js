export const digitalRoot = `function digitalRoot(n) {
  return n < 10
    ? n
    : digitalRoot(
        String(n)
          .split('')
          .reduce((a, c) => a + +c, 0)
      );
};`;

export const runOnce = `function once(fn) {
  let isRunned = false;
  return function doOnce(...args) {
    if(!isRunned) {
      isRunned = true;
      return fn(...args);
    } 
  };
}`;

export const memoisation = `function memo(fn) {
  const data = new Map();
  return (arg) => {
    if(!data.has(arg)){
      data.set(arg, fn(arg));
    }
    return data.get(arg);
  };
}`;

export const simpleEvents = `function Event() {
  this.functions = [];
  this.subscribe = func => {
    if (func && typeof func === 'function') this.functions.push(func);
  };
  this.unsubscribe = func => {
    if (func && typeof func === 'function') this.functions = this.functions.filter(el => el !== func);
  };

  this.emit = (...args) => {
    this.functions.forEach(func => {
      func.call(undefined, ...args);
    });
  };
}`;

export const replicateNew = `function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const item = Constructor.apply(instance, args);
  if (item) {
    if (typeof item === 'object' || typeof item === 'function') return item;
  } 
  return instance;
}`;

export const notOptimizePromise = `function antiOptimizeAsync(task) {
  return new Promise(res => {
  const timeStart = new Date();
  const someWork = task();
  const timeCur = new Date();
    setTimeout(() => {
      return res(someWork);
    }, 11000 - (timeCur - timeStart));
  });
}`;

export const fileNameGenerator = `function generateName() {
  const random = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const name = () => String.fromCharCode(random(), random(), random(), random(), random(), random());
  let result = name();
  if (photoManager.nameExists(result)) while (photoManager.nameExists(result)) result = name();
  return result;
}`;

export const singletonPattern = `const Singleton = function (){
  if (Singleton.instance) return Singleton.instance;
  Singleton.instance = this;
};`;

export const secretKeeper = `function createSecretHolder(secret) {
	const obj = {
		getSecret: function () {
			return secret;
		},
		setSecret: function (newSecret) {
			secret = newSecret;
		}
	}
	return obj;
}`;

export const functionComposition = `const compose = (func1,func2) => (...args) => func1(func2(...args));`;

export const lotteryTicket = `const bingo = (ticket, win) => {
  let counter = 0;
  ticket.forEach(element => {
    for (const char of element[0]) {
      if (char.charCodeAt(0) === element[1]) counter++;
    }
  });
  return counter >= win ? 'Winner!' : 'Loser!';
};`;
