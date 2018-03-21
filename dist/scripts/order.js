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

const orderStream = Rx.Observable.of(orderBasket)
const addExtraStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--extra-select'), 'click');

addExtraStream.subscribe( (event) => {
	for(i in orderBasket){
		orderBasket[i].addons.push(event.target.value)
	}
})


orderStream.map( (value)=> {
	console.log(value)
})