// import { Machine } from "../js/xstate/xstate.js";

// const myNumber$ = Rx.Observable.from([1, 2, 3, 4, 5]);
// const myData$ = Rx.Observable.ajax({ 
//     url:`https://domainr.com/one.com`, 
//     crossDomain: true, 
//     createXHR: function () {
//       return new XMLHttpRequest();
//     }
// })

// myData$
//     .catch(err => console.log('Observable.ajax error', err))
//     .subscribe(res => console.log('Observable.ajax', res))

Rx.Observable.from(fetch(`https://www.reddit.com/r/reactjs.json`))
  .subscribe(res => console.log('window.fetch', res))