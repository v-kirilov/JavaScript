let alwaysResolvingPromise = Promise.resolve('Yes');

alwaysResolvingPromise
    .then(res => console.log(res));