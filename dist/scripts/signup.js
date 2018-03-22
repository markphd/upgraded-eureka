console.clear();

const domainSearchInput = Rx.Observable.fromEvent(document.querySelector('#kasper--input-border'), 'input');
const heading = document.querySelector('#innercontent');
const result = document.querySelector('#kasper--result-list');
const suggest = document.querySelector('#kasper--suggest-list');

const allTld = [".com",".ca",".net",".org",".me",".nl",".one",".academy",".accountants",".actor",".ae",".ag",".agency",".archi",".asia",".associates",".at",".audio",".bar",".bargains",".bayern",".be",".beer",".best",".bid",".bike",".bio",".biz",".black",".blackfriday",".blue",".boutique",".brussels",".build",".builders",".buzz",".bz",".bzh",".cab",".camera",".camp",".capital",".cards",".career",".careers",".cash",".catering",".cc",".center",".ceo",".ch",".cheap",".christmas",".church",".claims",".cleaning",".click",".clothing",".club",".co",".co.uk",".codes",".coffee",".cologne",".com.mx",".com.pt",".community",".company",".computer",".condos",".construction",".consulting",".contractors",".cooking",".cool",".country",".credit",".creditcard",".cruises",".cymru",".cz",".dance",".dating",".de",".democrat",".dental",".diamonds",".diet",".digital",".direct",".directory",".discount",".dk",".domains",".education",".email",".engineering",".enterprises",".equipment",".estate",".eu",".events",".exchange",".expert",".exposed",".fail",".farm",".finance",".fish",".fishing",".fitness",".flights",".florist",".flowers",".foundation",".fr",".fund",".furniture",".futbol",".gallery",".gift",".glass",".graphics",".gratis",".gripe",".guide",".guitars",".guru",".help",".hiphop",".holdings",".holiday",".horse",".house",".immobilien",".in",".industries",".info",".ink",".institute",".insure",".international",".investments",".it",".jetzt",".kaufen",".kim",".kitchen",".kiwi",".koeln",".land",".lease",".li",".life",".lighting",".limo",".link",".loans",".lol",".london",".maison",".management",".marketing",".me.uk",".media",".menu",".mobi",".moda",".mom",".mx",".nagoya",".name",".ninja",".nu",".onl",".org.uk",".paris",".partners",".parts",".photo",".photography",".photos",".pics",".pictures",".pink",".pl",".place",".plumbing",".pm",".productions",".properties",".property",".pt",".pub",".qpon",".re",".recipes",".red",".reisen",".rentals",".repair",".report",".republican",".rest",".reviews",".rio",".rocks",".rodeo",".schule",".se",".services",".sexy",".shiksha",".shoes",".singles",".solar",".solutions",".supplies",".supply",".support",".surf",".surgery",".systems",".tattoo",".tax",".technology",".tf",".tienda",".tips",".today",".tokyo",".tools",".town",".toys",".trade",".training",".tv",".uk",".university",".uno",".vacations",".ventures",".viajes",".villas",".vision",".vlaanderen",".vodka",".voyage",".wales",".watch",".webcam",".wf",".wien",".wiki",".works",".ws",".wtf",".xyz",".yt",".zone","ALL",".com",".ca",".net",".org",".me",".nl",".one",".academy",".accountants",".actor",".ae",".ag",".agency",".archi",".asia",".associates",".at",".audio",".bar",".bargains",".bayern",".be",".beer",".best",".bid",".bike",".bio",".biz",".black",".blackfriday",".blue",".boutique",".brussels",".build",".builders",".buzz",".bz",".bzh",".cab",".camera",".camp",".capital",".cards",".career",".careers",".cash",".catering",".cc",".center",".ceo",".ch",".cheap",".christmas",".church",".claims",".cleaning",".click",".clothing",".club",".co",".co.uk",".codes",".coffee",".cologne",".com.mx",".com.pt",".community",".company",".computer",".condos",".construction",".consulting",".contractors",".cooking",".cool",".country",".credit",".creditcard",".cruises",".cymru",".cz",".dance",".dating",".de",".democrat",".dental",".diamonds",".diet",".digital",".direct",".directory",".discount",".dk",".domains",".education",".email",".engineering",".enterprises",".equipment",".estate",".eu",".events",".exchange",".expert",".exposed",".fail",".farm",".finance",".fish",".fishing",".fitness",".flights",".florist",".flowers",".foundation",".fr",".fund",".furniture",".futbol",".gallery",".gift",".glass",".graphics",".gratis",".gripe",".guide",".guitars",".guru",".help",".hiphop",".holdings",".holiday",".horse",".house",".immobilien",".in",".industries",".info",".ink",".institute",".insure",".international",".investments",".it",".jetzt",".kaufen",".kim",".kitchen",".kiwi",".koeln",".land",".lease",".li",".life",".lighting",".limo",".link",".loans",".lol",".london",".maison",".management",".marketing",".me.uk",".media",".menu",".mobi",".moda",".mom",".mx",".nagoya",".name",".ninja",".nu",".onl",".org.uk",".paris",".partners",".parts",".photo",".photography",".photos",".pics",".pictures",".pink",".pl",".place",".plumbing",".pm",".productions",".properties",".property",".pt",".pub",".qpon",".re",".recipes",".red",".reisen",".rentals",".repair",".report",".republican",".rest",".reviews",".rio",".rocks",".rodeo",".schule",".se",".services",".sexy",".shiksha",".shoes",".singles",".solar",".solutions",".supplies",".supply",".support",".surf",".surgery",".systems",".tattoo",".tax",".technology",".tf",".tienda",".tips",".today",".tokyo",".tools",".town",".toys",".trade",".training",".tv",".uk",".university",".uno",".vacations",".ventures",".viajes",".villas",".vision",".vlaanderen",".vodka",".voyage",".wales",".watch",".webcam",".wf",".wien",".wiki",".works",".ws",".wtf",".xyz",".yt",".zone"]
const availableTld = [".com",".ca",".net",".org",".me",".nl",".one"]
const newTld = [".archi",".asia",".associates",".at",".audio",".bar",".bargains"]

let userDomain;
let userMatch = /.*(?=\.)/;

const changeType = `
<div class="change_type">
    <button class="domain_type_btn domainsearch-btn--suggestions active_search_btn" data-cattype="2" data-bind="click: domainSearch.setCatType, css: {active_search_btn: domainSearch.isSelecetedCatType(2)}">
		Suggestions
	</button>
    <button class="domain_type_btn domainsearch-btn--category" data-cattype="3" data-bind="click: domainSearch.setCatType, css: {active_search_btn: domainSearch.isSelecetedCatType(3)}">
		Categorised
	</button>
    <button class="domain_type_btn domainsearch-btn--country" data-cattype="4" data-bind="click: domainSearch.setCatType, css: {active_search_btn: domainSearch.isSelecetedCatType(4)}">
		Country
	</button>
    <button class="domain_type_btn domainsearch-btn--fulllist" data-cattype="5" data-bind="click: domainSearch.setCatType, css: {active_search_btn: domainSearch.isSelecetedCatType(5)}">
		Full list
	</button>
</div>`

const domainOccupied = `
<div class="domain--search-status"><span class="status"></span>
<h2 class="domain--search-status__header">one.com is occupied</h2>
<p class="domain--search-status__text">If you own this domain, we can transfer it for you so you can attach a One.com web space to it.</p>
<div class="domain--search-status__buttons">
    <input class="btn blue" id="domain_move_back" name="back" value="This is my domain" type="submit">
</div>
</div>
<h2>But these domains are available</h2><span>Annual fee in EUR</span>
`

domainSearchInput.filter(event => event.target.value.length > 6)
  .map(event => event.target.value)
  .subscribe(value => userDomain = value);

const domainSearchBtn = Rx.Observable.fromEvent(document.querySelector('button'), 'click');

domainSearchBtn
  .map(event => {
  	event.preventDefault()
  })
  .subscribe( (event) => {
  	
  	if (userDomain == 'one.com') {
  	  result.innerHTML = domainOccupied + 
  	  availableTld.map( tld => `
  	  <div class="available-list__row">
  	    <span class="status"></span>
  	    <div class="available-list__tld">${userMatch.exec(userDomain)[0]}${tld}</div>
  	    <input class="available-domain--select" type="submit" value="Select"></input>
  	    <div class="available-list__available-info"><span class="available-list--promo">1st year free <em>20.00</em></span></div>
  	    <br>
  	    <hr class="divider">
  	  </div>`).join(' ') +
  	  changeType + newTld.map( tld => `
				  	  <div class="suggested-list__row">
				  	    <span class="status"></span>
				  	    <div class="suggested-list__tld">${userMatch.exec(userDomain)[0]}${tld}</div>
				  	    <input class="suggested-domain--select" type="submit" value="Select"></input>
				  	    <div class="suggested-list__suggested-info"><span class="suggested-list--promo">1st year free <em>20.00</em></span></div>
				  	  </div>`).join(' ')
  	  
      //SELECT BUTTONS
  	  const selectTld = Rx.Observable.fromEvent(document.querySelectorAll('.available-domain--select'), 'click');
	    const selectTldSearch = Rx.Observable.fromEvent(document.querySelectorAll('.available-domain--select'), 'click');

  	  selectTldSearch.first().subscribe( () => {
  	  	const orderStep1 = `<input name="changeSize" id="btnToCheckout" class="btn purple domain_checkout_btn" value="Continue" style="height: 56px; width: 161px;" type="submit">`
  	  	const searchNav = document.getElementsByClassName('order-domain-search')[0]
  	  	const searchNavBorder = document.getElementsByClassName('domain--search-divider')[0]
  	  	
  	  	searchNav.style.width = '959px';
  	  	searchNav.style.display = 'inline-block';
  	  	searchNav.style.marginBottom = '-20px';
  	  	searchNavBorder.style.border = 'none';
  	  	searchNav.insertAdjacentHTML("afterend", orderStep1);
  	  })

  	  selectTld.subscribe(event => {
        let prev = event.target.parentElement.innerHTML;

  	  	const orderSelected = `<span class="checked"></span><input class="domain--tld-select" value="Remove" type="submit">`
  	  	event.target.insertAdjacentHTML("afterend", orderSelected);
  	  	event.target.attributes[1].value = "Selected"
  	  	event.target.style.backgroundColor = "transparent"
  	  	event.target.style.border = 'none'
  	  	event.target.style.color = '#4e4e4e'
  	  	event.preventDefault()

        //REMOVE BUTTONS
        const removeTld = Rx.Observable.fromEvent(document.querySelectorAll('input[value="Remove"]'), 'click');
        
        removeTld.subscribe( (e) => {
          e.target.parentElement.innerHTML = prev;
          console.log(prev)
        })
  	  })

  	} else {
  	  result.innerHTML = 
  	    `<h2>These domains are available</h2><span>Annual fee in EUR</span>` +
  	  	availableTld.map( tld => `
  	  	  	  <div class="available-list__row">
  	  	  	    <span class="status"></span>
  	  	  	    <div class="available-list__tld">${userMatch.exec(userDomain)[0]}${tld}</div>
  	  	  	    <input class="available-domain--select" type="submit" value="Select"></input>
  	  	  	    <div class="available-list__available-info"><span class="available-list--promo">1st year free <em>20.00</em></span></div>
  	  	  	    <br>
  	  	  	    <hr class="divider">
  	  	  	  </div>`).join(' ') + changeType + newTld.map( tld => `
				  	  <div class="suggested-list__row">
				  	    <span class="status"></span>
				  	    <div class="suggested-list__tld">${userMatch.exec(userDomain)[0]}${tld}</div>
				  	    <input class="suggested-domain--select" type="submit" value="Select"></input>
				  	    <div class="suggested-list__suggested-info"><span class="suggested-list--promo">1st year free <em>20.00</em></span></div>
				  	  </div>`).join(' ')

  	  	      //SELECT BUTTONS
  	  	  	  const selectTld = Rx.Observable.fromEvent(document.querySelectorAll('.available-domain--select'), 'click');
  	  		  const selectTldSearch = Rx.Observable.fromEvent(document.querySelectorAll('.available-domain--select'), 'click');

  	  	  	  selectTldSearch.first().subscribe( () => {
  	  	  	  	const orderStep1 = `<input name="changeSize" id="btnToCheckout" class="btn purple domain_checkout_btn" value="Continue" style="height: 56px; width: 161px;" type="submit">`
  	  	  	  	const searchNav = document.getElementsByClassName('order-domain-search')[0]
  	  	  	  	const searchNavBorder = document.getElementsByClassName('domain--search-divider')[0]
  	  	  	  	
  	  	  	  	searchNav.style.width = '959px';
  	  	  	  	searchNav.style.display = 'inline-block';
  	  	  	  	searchNav.style.marginBottom = '-20px';
  	  	  	  	searchNavBorder.style.border = 'none';
  	  	  	  	searchNav.insertAdjacentHTML("afterend", orderStep1);
  	  	  	  })

  	  	  	  selectTld.subscribe(event => {
  	  	        let prev = event.target.parentElement.innerHTML;

  	  	  	  	const orderSelected = `<span class="checked"></span><input class="domain--tld-select" value="Remove" type="submit">`
  	  	  	  	event.target.insertAdjacentHTML("afterend", orderSelected);
  	  	  	  	event.target.attributes[1].value = "Selected"
  	  	  	  	event.target.style.backgroundColor = "transparent"
  	  	  	  	event.target.style.border = 'none'
  	  	  	  	event.target.style.color = '#4e4e4e'
  	  	  	  	event.preventDefault()

  	  	        //REMOVE BUTTONS
  	  	        const removeTld = Rx.Observable.fromEvent(document.querySelectorAll('input[value="Remove"]'), 'click');
  	  	        
  	  	        removeTld.subscribe( (e) => {
  	  	          e.target.parentElement.innerHTML = prev;
  	  	          console.log(prev)
  	  	        })
  	  	  	  })
  	}

  });










