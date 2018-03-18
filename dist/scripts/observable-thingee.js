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


const domainSearchInput = Rx.Observable.fromEvent(document.querySelector('#kasper--input-border'), 'input');
const heading = document.querySelector('#innercontent');

let userDomain;

domainSearchInput.filter(event => event.target.value.length > 6)
  .map(event => event.target.value)
  .subscribe(value => userDomain = value);

const domainSearchBtn = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
domainSearchBtn.map(event => event.preventDefault()).subscribe( () => console.log(userDomain));

