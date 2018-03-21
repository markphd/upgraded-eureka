console.clear()

// BASKET - Initial Order List 

const orderBasket = [
	{
		domain: "forup.dk",
		package: "Starter",
		addons: [],
		price: 0
	},
	{
		domain: "forup.one",
		package: "Professional Plus",
		addons: [],
		price: 0
	},
	{
		domain: "forup.org",
		package: "Business",
		addons: [],
		price: 0
	}
]

// ORDER STEPS - Navigation sticky

const scrollStream = Rx.Observable.fromEvent(window, 'scroll');

scrollStream.debounceTime(10).subscribe( (value) => {
	// console.log(value.pageY, "value Y")
	let stickyNav = document.querySelector('#nav--order-steps');
	if(value.pageY >= 150){
		stickyNav.classList.add('fixed')
		// console.log(stickyNav)
	} else {
		stickyNav.classList.remove('fixed')
	}
})

// BASKET - Add/Remove Order in Basket

const orderStream = Rx.Observable.of(orderBasket) // Stream of order activities

// Add order & extra add-ons
const addExtraStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--extra-select'), 'click');
const addDomainStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--domain-select'), 'click');

const subject = new Rx.Subject();

addExtraStream.subscribe( (event) => {
	() => { for(i in orderBasket){
		subject.next(orderBasket[i].addons.push(event.target.value))
	}}
	console.log(subject.getValue())
})



// subject.subscribe( (value) => console.log(value) )
// orderStream.map( (value)=> console.log(value) )


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



// BASKET - Info domain list
let productList = document.querySelector('#order--domain-list');

productList.innerHTML = orderBasket.map( (order) => `
	<div class="buycustomer__addon__domain">
	    <input id="${order.domain}" checked="checked" type="checkbox">
	    <label for="${order.domain}"><span></span><span class="domain-label">${order.domain}</span>
	        <span class="right">
	            <span class="price-label">
	                <div class="current-package product-hosting-bg active">
	                    <span>${order.package}</span>
	                    <span class="package--selector">▾</span>
	                </div>
	            </span>
	        </span>
	    </label>

	    <span class="order--details-feat">Hosting Starter (25 GB) - 12 months   <em>240.00</em></span>
	    <span class="order--details-feat">Domain fee - first 12 months (.cc)  <em>150.00</em></span>
	    <span class="order--details-feat">Setup fee   <em>115.00</em></span>

	    <input id="${order.domain}Privacy" name="${order.domain}Privacy" type="checkbox">

	    <label for="${order.domain}Privacy">
	    <span></span>
	    <span class="domain-label">Domain Privacy - 12 months</span>
	    </label>
	</div>
	`
).join(' ')