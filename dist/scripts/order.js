console.clear()

let customerRegFormNew = `
    <form name="customerRegistrantForm" method="post" action="https://www.one.com/en/order" class="noscript customerForm" id="customerRegistrantForm" novalidate="">
        <input name="csrft" value="3344e2c552995ef7d0574db555e5745f" type="hidden">

        <h2 class="mg-bottom-20">Customer information</h2>

        <input name="locale" value="en" type="hidden">
        <input name="domainName" value="my-mark" autocomplete="off" style="" type="hidden">

        <input name="domainSuffix" value=".me" type="hidden">

        <input name="size" value="smallnew" type="hidden">
        <input name="upgradePreviousSize" value="" type="hidden">
        <input name="webspaceUpgradeToPlus" value="" type="hidden">
        <input name="idn" value="false" type="hidden">
        <input name="campaign" value="false" type="hidden">
        <input name="existingCustomer" value="false" type="hidden">
        <input name="hideLogOut" value="false" type="hidden">

        <input name="edcKey" value="false" type="hidden">
        <input name="rebateCouponCode" value="" type="hidden">

        <div class="userContainer hide" style="display: none;">
            <div class="formFields">
                <p class="mg-bottom-10"></p>
                <p class="mg-bottom-30">
                    &nbsp;-&nbsp;
                    <a href="#" id="chooseUserOn" data-bind="click: order.user.logOut">change user</a>
                </p>
            </div>
        </div>

        <div class="chooseUserContainer">

            <p class="radio-paragraph">
                <input name="customerDataTicket" id="existingCustomerOff" value="false" data-bind="click: function() { order.user.logOut(); return true; }" checked="" type="radio">
                <label for="existingCustomerOff" class="radioLabel">
                    <span></span> New customer
                </label>
            </p>

            <p class="radio-paragraph mg-bottom-20">
                <input name="customerDataTicket" id="existingCustomerOn" value="true" type="radio">
                <label for="existingCustomerOn" class="radioLabel">
                    <span></span> Existing customer
                </label>
            </p>

            <div class="formFields">

                <p class="label-input customerTypeContainer" style="">
                    <label for="customerType">
                        Customer type:
                    </label>
                    <select name="customerType" id="customerType" class="border">
                        <option value="private" selected="selected">Private customer</option>

                        <option value="organisation_no_vat">Company customer</option>
                    </select>
                </p>

                <p class="label-input customerNameContainer" style="">
                    <label id="labelCustomerName" for="customerName">
                        Full name:
                    </label>
                    <input name="customerName" value="" id="customerName" class="border autofocus" type="text">
                </p>

                <p class="label-input customerCompanyContainer hide" style="display: none;">
                    <label id="customerCompanyLabel" for="customerCompany">
                        Company:
                    </label>
                    <input name="customerCompany" value="" id="customerCompany" class="border autofocus" type="text">
                </p>

                <p class="label-input mg-bottom-5">
                    <label for="customerEmail" class="labelUsername" style="display: none;">
                        Email (username):
                    </label>
                    <label for="customerEmail" class="labelEmail" style="">Email:</label>
                    <input autocomplete="on" autocapitalize="off" class="border" id="customerEmail" name="customerEmail" value="" type="email">
                </p>

                <input name="customerCountry" value="United Arab Emirates" id="customerCountry" type="hidden">
                <input name="sizeChosenByCustomer" value="true" id="sizeChosenByCustomer" type="hidden">
                <input id="cfp" name="cfp" value="f83ad76436ee87f3fa7864f4583aebc8" type="hidden">

                <div class="adminUserPasswordContainer" style="display: none;">

                    <p class="label-input mg-bottom-10">
                        <label for="adminUserPassword">Password:</label>
                        <input name="adminUserPassword" id="adminUserPassword" class="border" autocomplete="off" type="password">
                    </p>

                    <p>
                        <small class="text-italic">Enter your email address and your control panel password. The email address is the contact email address you entered for your web spaces.</small>
                    </p>
                </div>
            </div>

        </div>

        <div id="" class="mg-top-15">

            <input name="customerUser" class="btn blue" id="customer_form_customer" value="Next" style="" type="submit">

            <input name="customerLogin" class="btn blue" id="getLegalEntities" value="Next" style="display: none;" type="submit">

            <div class="forgotpassword mg-top-10" style="display: none;">

                <a href="/admin/forgotpassword.do?locale=en" target="_blank">Forgot your password?</a>
            </div>

        </div>

        <div class="domainSearchResultContainer" style="width: 855px; border-width: 0px; margin-left: 0px; margin-top: 0px; display: none;"></div>
    </form>
    
`

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

const subject = new Rx.Subject(orderBasket);

addExtraStream.subscribe( (event) => { 

        for(i in orderBasket) {
        // subject.next(orderBasket[i].addons.push(event.target.value))
        orderBasket[i].addons.push(event.target.value)
        }
    
    basketLoader()
})





// subject.subscribe( (value) => console.log(value) )
// orderStream.map( (value)=> console.log(value) )
const orderSteps = Rx.Observable.fromEvent(document.querySelector('.order--steps-next'), 'click');

var inc = orderSteps.map( () => state => Object.assign({}, state, {count: state.count + 1 }) )

var state = inc.scan((state, changeFn) => changeFn(state), {count: 0});

state.subscribe( (state) => {
    switch(state.count) {
        case 1:
            document.querySelector('.contentintro-content').innerHTML = 'CUSTOMER DETAILS COOL!';
            break;
        case 2:
            document.querySelector('.contentintro-content').innerHTML = customerRegFormNew;
            break;
        case 3:
            document.querySelector('.contentintro-content').innerHTML = 'CUSTOMER PAY';
            break; 
        case 4:
            document.querySelector('.contentintro-content').innerHTML = 'CUSTOMER INFO';
            break;
        default:
            alert('exit!')
    }
})

const orderStep1 = Rx.Observable.fromEvent(document.querySelector('.order--step-product'), 'click');

const orderStep2 = Rx.Observable.fromEvent(document.querySelector('.order--step-customer'), 'click');

const orderStep3 = Rx.Observable.fromEvent(document.querySelector('.order--step-checkout'), 'click');

const orderStep4 = Rx.Observable.fromEvent(document.querySelector('.order--step-completed'), 'click');

// orderStep1.subscribe( (event) => {
//  let el = event.target;
//  console.log(el)
//  if ( el.nodeName === 'SPAN') {
//      el.parentElement.classList.toggle('step-inactive')
//      el.parentElement.classList.toggle('step-active')
//  } else {
//      return null;
//  }
// })

orderSteps.subscribe( (event) => {
    console.log(event.target)
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

function basketLoader() {
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
            <label for="${order.domain}Privacy" class="addon--info-wrapper">
            <span></span>
            <span class="domain-label">Domain Privacy - 12 months</span>
            <em class="addon--privacy-info">Your personal information are not protected!</em>
            </label>
            <div class="order--addons-list"></div>
        </div>
        `
    ).join(' ')

    let addonList = document.querySelectorAll('.order--addons-list');

    addonList.forEach( list => {
        for (i in orderBasket) {
            orderBasket[i].addons.map((service) => {
                list.insertAdjacentHTML("afterend", service);
            })
        }
    })

}


basketLoader()



