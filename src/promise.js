function methodThatReturnsAPromise(nextID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date()
      console.log(`${nextID} Resolve! ${date.toTimeString()}`);

      resolve();
    }, 1000);
  });
}

[1,2,3].reduce( (accumulatorPromise, nextID) => {
  const date = new Date()
  console.log(`Loop! ${date.toTimeString()}`);

  return accumulatorPromise.then(() => {
    return methodThatReturnsAPromise(nextID);
  });
}, Promise.resolve());

// 14:08:40.007 VM500:14 Loop! 14:08:40 GMT+0800 (中国标准时间)
// 14:08:40.007 VM500:14 Loop! 14:08:40 GMT+0800 (中国标准时间)
// 14:08:40.007 VM500:14 Loop! 14:08:40 GMT+0800 (中国标准时间)
// 14:08:40.018 Promise {<pending>}
// 14:08:41.009 VM500:5 Resolve! 14:08:41 GMT+0800 (中国标准时间)
// 14:08:42.015 VM500:5 Resolve! 14:08:42 GMT+0800 (中国标准时间)
// 14:08:43.019 VM500:5 Resolve! 14:08:43 GMT+0800 (中国标准时间)