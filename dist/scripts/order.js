const orderBasket = [
	{
		domain: "markphd.com",
		package: "starter",
		addons: [],
		price: 0
	},
	{
		domain: "markphd.com",
		package: "starter",
		addons: [],
		price: 0
	},
	{
		domain: "markphd.com",
		package: "starter",
		addons: [],
		price: 0
	}
]
const scrollStream = Rx.Observable.fromEvent(window, 'scroll');


scrollStream.debounceTime(10).subscribe( (value) => {
	console.log(value.pageY, "value Y")
	let stickyNav = document.querySelector('#nav--order-steps');
	if(value.pageY >= 150){
		stickyNav.classList.add('fixed')
		console.log(stickyNav)
	} else {
		stickyNav.classList.remove('fixed')
	}
})

const orderStream = Rx.Observable.of(orderBasket)
const addExtraStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--extra-select'), 'click');
// const addExtraStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--extra-select'), 'click');

const subject = new Rx.BehaviorSubject(orderBasket);

addExtraStream.subscribe( (event) => {
	for(i in orderBasket){
		orderBasket[i].addons.push(event.target.value)
	}
	console.log(subject.getValue())
})


orderStream.map( (value)=> {
	console.log(value)
})

const orderStep1 = Rx.Observable.fromEvent(document.querySelector('.order--step-product'), 'click');

const orderStep2 = Rx.Observable.fromEvent(document.querySelector('.order--step-customer'), 'click');

const orderStep3 = Rx.Observable.fromEvent(document.querySelector('.order--step-checkout'), 'click');

const orderStep4 = Rx.Observable.fromEvent(document.querySelector('.order--step-completed'), 'click');

orderStep1.subscribe( (event) => {
	let el = event.target;
	console.log(el)
	if ( el.nodeName === 'SPAN') {
		el.parentElement.classList.toggle('step-inactive')
		el.parentElement.classList.toggle('step-active')
	} else {
		return null;
	}
})

orderStep2.subscribe( (event) => {
	let el = event.target;
	console.log(el)
	if ( el.nodeName === 'SPAN') {
		el.parentElement.classList.toggle('step-inactive')
		el.parentElement.classList.toggle('step-active')
	} else {
		return null;
	}
})

orderStep3.subscribe( (event) => {
	let el = event.target;
	console.log(el)
	if ( el.nodeName === 'SPAN') {
		el.parentElement.classList.toggle('step-inactive')
		el.parentElement.classList.toggle('step-active')
	} else {
		return null;
	}
})

orderStep4.subscribe( (event) => {
	let el = event.target;
	console.log(el)
	if ( el.nodeName === 'SPAN') {
		el.parentElement.classList.toggle('step-inactive')
		el.parentElement.classList.toggle('step-active')
	} else {
		return null;
	}
})