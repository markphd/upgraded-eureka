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
const result = document.querySelector('#kasper--result-list');

const allTld = [".com",".ca",".net",".org",".me",".nl",".one",".academy",".accountants",".actor",".ae",".ag",".agency",".archi",".asia",".associates",".at",".audio",".bar",".bargains",".bayern",".be",".beer",".best",".bid",".bike",".bio",".biz",".black",".blackfriday",".blue",".boutique",".brussels",".build",".builders",".buzz",".bz",".bzh",".cab",".camera",".camp",".capital",".cards",".career",".careers",".cash",".catering",".cc",".center",".ceo",".ch",".cheap",".christmas",".church",".claims",".cleaning",".click",".clothing",".club",".co",".co.uk",".codes",".coffee",".cologne",".com.mx",".com.pt",".community",".company",".computer",".condos",".construction",".consulting",".contractors",".cooking",".cool",".country",".credit",".creditcard",".cruises",".cymru",".cz",".dance",".dating",".de",".democrat",".dental",".diamonds",".diet",".digital",".direct",".directory",".discount",".dk",".domains",".education",".email",".engineering",".enterprises",".equipment",".estate",".eu",".events",".exchange",".expert",".exposed",".fail",".farm",".finance",".fish",".fishing",".fitness",".flights",".florist",".flowers",".foundation",".fr",".fund",".furniture",".futbol",".gallery",".gift",".glass",".graphics",".gratis",".gripe",".guide",".guitars",".guru",".help",".hiphop",".holdings",".holiday",".horse",".house",".immobilien",".in",".industries",".info",".ink",".institute",".insure",".international",".investments",".it",".jetzt",".kaufen",".kim",".kitchen",".kiwi",".koeln",".land",".lease",".li",".life",".lighting",".limo",".link",".loans",".lol",".london",".maison",".management",".marketing",".me.uk",".media",".menu",".mobi",".moda",".mom",".mx",".nagoya",".name",".ninja",".nu",".onl",".org.uk",".paris",".partners",".parts",".photo",".photography",".photos",".pics",".pictures",".pink",".pl",".place",".plumbing",".pm",".productions",".properties",".property",".pt",".pub",".qpon",".re",".recipes",".red",".reisen",".rentals",".repair",".report",".republican",".rest",".reviews",".rio",".rocks",".rodeo",".schule",".se",".services",".sexy",".shiksha",".shoes",".singles",".solar",".solutions",".supplies",".supply",".support",".surf",".surgery",".systems",".tattoo",".tax",".technology",".tf",".tienda",".tips",".today",".tokyo",".tools",".town",".toys",".trade",".training",".tv",".uk",".university",".uno",".vacations",".ventures",".viajes",".villas",".vision",".vlaanderen",".vodka",".voyage",".wales",".watch",".webcam",".wf",".wien",".wiki",".works",".ws",".wtf",".xyz",".yt",".zone","ALL",".com",".ca",".net",".org",".me",".nl",".one",".academy",".accountants",".actor",".ae",".ag",".agency",".archi",".asia",".associates",".at",".audio",".bar",".bargains",".bayern",".be",".beer",".best",".bid",".bike",".bio",".biz",".black",".blackfriday",".blue",".boutique",".brussels",".build",".builders",".buzz",".bz",".bzh",".cab",".camera",".camp",".capital",".cards",".career",".careers",".cash",".catering",".cc",".center",".ceo",".ch",".cheap",".christmas",".church",".claims",".cleaning",".click",".clothing",".club",".co",".co.uk",".codes",".coffee",".cologne",".com.mx",".com.pt",".community",".company",".computer",".condos",".construction",".consulting",".contractors",".cooking",".cool",".country",".credit",".creditcard",".cruises",".cymru",".cz",".dance",".dating",".de",".democrat",".dental",".diamonds",".diet",".digital",".direct",".directory",".discount",".dk",".domains",".education",".email",".engineering",".enterprises",".equipment",".estate",".eu",".events",".exchange",".expert",".exposed",".fail",".farm",".finance",".fish",".fishing",".fitness",".flights",".florist",".flowers",".foundation",".fr",".fund",".furniture",".futbol",".gallery",".gift",".glass",".graphics",".gratis",".gripe",".guide",".guitars",".guru",".help",".hiphop",".holdings",".holiday",".horse",".house",".immobilien",".in",".industries",".info",".ink",".institute",".insure",".international",".investments",".it",".jetzt",".kaufen",".kim",".kitchen",".kiwi",".koeln",".land",".lease",".li",".life",".lighting",".limo",".link",".loans",".lol",".london",".maison",".management",".marketing",".me.uk",".media",".menu",".mobi",".moda",".mom",".mx",".nagoya",".name",".ninja",".nu",".onl",".org.uk",".paris",".partners",".parts",".photo",".photography",".photos",".pics",".pictures",".pink",".pl",".place",".plumbing",".pm",".productions",".properties",".property",".pt",".pub",".qpon",".re",".recipes",".red",".reisen",".rentals",".repair",".report",".republican",".rest",".reviews",".rio",".rocks",".rodeo",".schule",".se",".services",".sexy",".shiksha",".shoes",".singles",".solar",".solutions",".supplies",".supply",".support",".surf",".surgery",".systems",".tattoo",".tax",".technology",".tf",".tienda",".tips",".today",".tokyo",".tools",".town",".toys",".trade",".training",".tv",".uk",".university",".uno",".vacations",".ventures",".viajes",".villas",".vision",".vlaanderen",".vodka",".voyage",".wales",".watch",".webcam",".wf",".wien",".wiki",".works",".ws",".wtf",".xyz",".yt",".zone"]

let userDomain;
let userMatch = /.*(?=\.)/;

const domainOccupied = `
<div class="result--unavailable-domain">
<h1>Boo!</h1>
</div>
`

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
</div>
`

domainSearchInput.filter(event => event.target.value.length > 6)
  .map(event => event.target.value)
  .subscribe(value => userDomain = value);

const domainSearchBtn = Rx.Observable.fromEvent(document.querySelector('button'), 'click');

domainSearchBtn
  .map(event => event.preventDefault())
  .subscribe( () => {
  	if (userDomain == 'one.com') {
  	  result.innerHTML = changeType
  	} else {
  	  result.innerHTML = allTld.map( tld => `
  	  	<div class="price-list__row">
  	  	  <div class="price-list__tld">${userMatch.exec(userDomain)[0]}${tld}</div>
  	  	  <div class="price-list__price-info"><span class="price-list--promo">1st year free <em>20.00</em></span></div>
  	  	</div>`).join(' ')
  	}
  });