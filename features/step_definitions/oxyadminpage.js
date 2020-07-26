const {Selector} = require('testcafe');
//report = require('../report-generator')

//Changing dom  to X-path locator
const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});  



//page object for Create New Customer

    const Username = Selector(elementByXPath('//input[@formcontrolname="username"]'))
    const Password = Selector(elementByXPath('//input[@formcontrolname="password"]'))
    const Signinbutton = Selector(elementByXPath('//button[@class="btn btn-md btn-primary"]'))
    const Clicksearchcustomer = Selector(elementByXPath('//button[@class="btn btn-primary"]'))
    const Selectcustomer = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/search-component/row/column/app-select-customer/container/row/column/app-internal-view/form/row[2]/column[1]/app-form-field/row/column[2]/ng-select/div'))
    const Addnewcustomer= Selector(elementByXPath('//h6[@class="m-0 ng-star-inserted"]'))
    const Commonoption = Selector(elementByXPath('//div[@class="ng-option ng-option-marked ng-star-inserted"]'))
    const commondropdown = Selector(elementByXPath('//div[@class="ng-option ng-star-inserted"]'))
    const Addnewtitle = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[1]/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const Addfirstname = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[1]/column[2]/app-form-field/row/column[2]/input'))
    const Addlastname = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[1]/column[3]/app-form-field/row/column[2]/input'))
    const Addcustomarket = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[1]/column[4]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const Addcurrency = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[1]/column[5]/app-form-field/row/column[2]/ng-select/div/div/div[3]/input'))
    const Addphonenumber = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[2]/column[1]/app-form-field/row/column[2]/input'))
    const Addmobileno = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[2]/column[2]/app-form-field/row/column[2]/input'))
    const Addemail = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/row[2]/column[3]/app-form-field/row/column[2]/input'))
    const Addcountry = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/row/column/app-form-field/row/column[2]/ng-select/div'))
    const Addaddress1line = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/div/row[1]/column[1]/app-form-field/row/column[2]/input'))
    const Addaddress2line = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/div/row[1]/column[2]/app-form-field/row/column[2]/input'))
    const Addaddress3line = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/div/row[1]/column[3]/app-form-field/row/column[2]/input'))
    const Addpostalcode = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/div/row[2]/column[1]/app-form-field/row/column[2]/input'))
    const Addcity = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/div/row[2]/column[2]/app-form-field/row/column[2]/input'))
    const Addstate = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/div/row[2]/column[3]/app-form-field/row/column[2]/ng-select/div'))
    const Addcountrymailaddress= Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/row/column/app-form-field/row/column[2]/ng-select/div'))
    const Viewsamplesearchaddress = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/row/column[2]/app-form-field/row/column[2]/app-auto-complete/input'))
    const Addmailaddress1line = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/div/row[1]/column[1]/app-form-field/row/column[2]/input'))
    const Addmailaddress2line = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/div/row[1]/column[2]/app-form-field/row/column[2]/input'))
    const Addmailaddress3line = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/div/row[1]/column[3]/app-form-field/row/column[2]/input'))
    const Addmailpostalcode = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/div/row[2]/column[1]/app-form-field/row/column[2]/input'))
    const Addmailcity = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/div/row[2]/column[2]/app-form-field/row/column[2]/input'))
    const Addmailstate = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/div/row[2]/column[3]/app-form-field/row'))
    const Saveaddeess = Selector(elementByXPath('//button[@class="btn btn-primary order-2 ml-2"]'))
    const Searchaddress1home = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[1]/form/row/column[2]/app-form-field/row/column[2]/app-auto-complete/input'))
    const Searchaddressmail = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/add-customer/form/div[2]/div/div/direct-customer/container/form/app-address[2]/form/row/column[2]/app-form-field/row/column[2]/app-auto-complete/input'))
    const Mailhomeaddresscheckbox = Selector(elementByXPath('//div[@class="ml-3"]'))
    const Confirmaddress = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/search-component/row/column/app-select-customer/container/row/column/app-internal-view/form/row[1]/column/span[2]/button[3]'))
    const Confirmaddresslable = Selector(elementByXPath('//h6[@class="m-0 d-inline"]'))
    const Searchcustomer = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/search-component/row/column/app-select-customer/container/row/column/app-internal-view/form/row[2]/column[2]/search-customer/form/app-form-field/row/column[2]/app-auto-complete/input'))
    const Selectcutsomerdrp = Selector(elementByXPath('//*[@id="ngb-typeahead-1-1"]/div[1]/span[1]'))
    const Confirmcustomer = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/search-component/row/column/app-select-customer/container/row/column/app-internal-view/form/row[1]/column/span[2]/button[3]'))
    const Searchtrip = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[6]/app-form-field/row/column[2]/app-auto-complete/input'))
    const Selecttrip = Selector(elementByXPath('//span[@class="strong"]'))
    const Selecttrip1 = Selector(elementByXPath('//span[.="EUMC15 - 15 Day Magnificent Europe Amsterdam to Budapest 2021"]'))
    const Datepicker = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[2]/app-form-field/row/column[3]/div/i'))
    const Changenextmonth = Selector(elementByXPath('//*[@id="ngb-popover-2"]/div[2]/div[2]/ngb-datepicker[1]/div[1]/ngb-datepicker-navigation/div[2]/button/span'))
    const Startdatedatepicker = Selector(elementByXPath('//ngb-datepicker[1]//div[2]/span[contains(.,"3")]'))
    const Enddatedatepicker = Selector(elementByXPath('//ngb-datepicker[1]//div[3]/span[contains(.,"30")]'))
    const Noofdays = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[5]/app-form-field/row/column[2]/app-number-picker/input'))
    const ClickonPromo = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[7]/app-form-field/row/column[2]/app-multi-select/div'))
    const Selectpromo = Selector(elementByXPath('//*[@id="all"]/label'))
    const Searchtripdates = Selector(elementByXPath('//button[@class="btn btn-primary btn-lg search-button"]'))
    const Selectpertculartrip = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-results/app-tour-results/row/column[2]/div/div[1]/app-tour-panel/div/row/column[3]/app-carousel/div[1]'))
    const Clickonbooking = Selector(elementByXPath('//button[@class="btn btn-primary btn-block btn-md px-3 ng-star-inserted"]'))
    const continuebooking = Selector(elementByXPath('//button[@class="btn btn-primary btn-round order-2 ml-2"]'))
    const Nextpagebutton = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/div[3]/container/row/column[1]/div[2]/button[2]'))
    const selecttravellerknow = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-customer-verification/app-booking-step/row/column/div/app-hdyhau/form/row/column[1]/app-form-field/row/column[2]/ng-select/div'))
    const suboptiontravellerknow = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-customer-verification/app-booking-step/row/column/div/app-hdyhau/form/row/column[2]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const tripnotes = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-package/app-tour-notes/app-booking-step/row/column/div/row/column[1]/app-product-notes/p'))
    const promosaving = Selector(elementByXPath('//*[@id="chkboxGroup_1"]/row/column[2]/row/column[2]'))
    const promobonus = Selector(elementByXPath('//*[@id="chkboxGroup_2"]/row/column[2]/row/column[2]'))
    const promonext = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-package/app-pre-post-tour-acc/app-booking-step/row/column/div/row/column[1]/div[1]/span'))
    const Transfercrew = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-package/app-package-transfers/app-booking-step/row/column/div/row/column[1]/div/app-option-group/form/app-panel/div/row[2]/column/div/row[2]/column[2]/app-group-option/app-group-options-template-1/row/column[1]/span'))
    const flightrequired = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-package/app-package-flight/app-booking-step/row/column/div/row/column[3]/div[1]/row/column[2]'))
    const flightdocumnet = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-package/app-package-documents/app-booking-step/row/column/div/row/column/app-option-group/form/app-panel/div/row[2]/column/row[2]/column[2]'))
    const bookingsummary = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[2]/div/div/row/column/span/h2')) 
    const addtraveller = Selector(elementByXPath('//button[@class="btn btn-sm btn-outline-primary ml-3"]'))
    const bookingpagenext = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[2]/div/div/app-booking-summary/div/button'))
    const existcustomer = Selector(elementByXPath('//*[@id="passengerTab1-panel"]/div/div/app-passengers-search/form/row/column[8]/button'))
    const selectexistingcustomer = Selector(elementByXPath('//*[@id="passengerTab1-panel"]/div/div/app-passengers-result/row/column[1]/app-passengers-tile/row/column[1]/div/row/column/button'))
    const bookingnext = Selector(elementByXPath('/html[1]/body[1]/app-root[1]/res-component[1]/main[1]/div[1]/scroll-container[1]/container[1]/div[1]/div[1]/app-booking-container[1]/div[3]/container[1]/row[1]/column[1]/div[2]/button[1]'))
    const personaldetails = Selector(elementByXPath('//*[@id="passengerTab2-panel"]/div/div/app-passenger-internal-details/form/row/column/span/h6'))
    const opendetails = Selector(elementByXPath('//*[@id="passengerTab3-panel"]/div/div/app-passenger-internal-details/form/row/column[1]/row/column[1]/div'))
    const confirmcustomer = Selector(elementByXPath('//button[@class="btn btn-primary ml-2 ng-star-inserted"]'))
    const healthconditionno = Selector(elementByXPath('//*[@id="paxDetails-panel"]/div/app-passengers/app-passengers-internal/form/row[3]/column/app-hfm/form/row/column[1]/div/span[2]/b'))
    const readandconfirm = Selector(elementByXPath('//*[@id="paxDetails-panel"]/div/app-passengers/app-passengers-internal/form/row[3]/column/row[2]'))
    const saveconfirmaddress = Selector(elementByXPath('//*[@id="customerDetailsTab-panel"]/div/div/row/column/button'))
    const nextconfirmaddress = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[2]/div/div/app-booking-summary/div/button[2]'))
    const bookinghearus = Selector(elementByXPath('//*[@id="customerVerification-panel"]/div/div/app-hdyhau/form/row/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[2]/input'))
    const bookingsubcat = Selector(elementByXPath('//*[@id="customerVerification-panel"]/div/div/app-hdyhau/form/row/column[2]/app-form-field/row/column[2]/ng-select/div/div/div[2]/input'))
    const confirmbookinguser = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-booking-duplicate-modal/div/div[3]/button[1]'))
    const confirmcondition = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-booking-confirm-save/div/div[2]/row/column[6]/row/column[1]'))
    const saveandbook = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-booking-confirm-save/div/div[3]/button[1]'))
    const confirmcustomerdetails = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[2]/div/div/row/column/span/h2'))
    const confirmbookingpage = Selector(elementByXPath('/html/body/table[4]/tbody/tr[1]/td[2]/a'))
    const saveandconfirm = Selector(elementByXPath('//*[@id="customerVerification-panel"]/div/div/row/column/button[2]'))
    const addflight = Selector(elementByXPath('//*[@id="flightDetails-panel"]/div/app-flight-details/row/column[1]/button'))
    const saveflightdetails = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight-details-modal/div/div[3]/button[1]'))
    const customerconfirmodyssey = Selector(elementByXPath('/html/body/form/table[3]/tbody/tr[4]/td[1]'))
    const accetptestcon= Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-booking-confirm-save/div/div[2]/row/column[5]/p'))
    const nextpagearrow = Selector(elementByXPath('//button[@class="btn btn-dark"]'))
    const selectloyalty = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-loyalty/app-booking-step/row/column/div/row/column/app-panel[1]/div/row[2]/column/div/row/column/app-loyalty-club-benefits/form/row/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[3]'))
    const selectloyatygold = Selector(elementByXPath('//span[.="Gold - 2 Trips"]'))
    const nextbutton = Selector(elementByXPath('//button[@class="btn btn-dark"]'))
    const documentrequire = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-booking-package/app-package-documents/app-booking-step/row/column/div/row/column[1]/app-option-group/form/app-panel/div/row[2]/column/div/row[2]/column[2]/app-group-option/app-group-options-template-1/row/column[1]/span'))
    const nextpage2button = Selector(elementByXPath('//button[@class="btn btn-dark"]'))
    const pretourtransfer = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/row/column/span/h2'))
    const selectinvoice = Selector(elementByXPath('//*[@id="showInvoice"]'))
    const documentselect = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/div[3]/container/row/column[1]/div[2]/button'))
    const expandbooking = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[2]/div/app-booking-action-panel/div[1]/i'))
    const selectfutureyeartrip = Selector(elementByXPath('//span[.="VEM13 - 13 Day Vietnam & Cambodia Highlights 20/21"]'))
    //********Multi Select Home Page Brand */
    const Clickbrand = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[5]/app-form-field/row/column[2]/app-multi-select/div'))
    const selectallbrand = Selector(elementByXPath('//app-checkbox[@id="all"]'))
    const selectallbrandAPT = Selector(elementByXPath('//div[.="APT"]'))
    const selectallbrandTM = Selector(elementByXPath('//div[.="Travelmarvel"]'))
    const selectallbrandBT = Selector(elementByXPath('//div[.="Botanica World Discoveries"]'))
    const selectallbrandCC = Selector(elementByXPath('//div[5]//label[@class="checkbox d-flex justify-content-start align-items-center"]'))
    const selectallbrandKWA = Selector(elementByXPath('//div[.="Kimberley Wilderness Adventures"]'))
    const selectallbrandRCT = Selector(elementByXPath('//div[.="RACV Cruises & Tours"]'))

    //**********Enter diffrent trip code/Name Destination */
    const trip1= Selector(elementByXPath('//*[@id="ngb-typeahead-3-0"]/row/column/span'))
    const trip2 = Selector(elementByXPath('//span[.="UT19BEVV - 19 Day Rockies Explorer & Alaska Cruise From Vancouver 2020"]'))
    const notrip = Selector(elementByXPath('//div[@class="auto-complete-message text-danger ng-star-inserted"]'))
    //*********** Select diffrent customer type******************* */
    const selectcustomerhome= Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const directcust= Selector(elementByXPath('//span[.="Direct Customer"]'))
    const internalcust= Selector(elementByXPath('//span[.="Internal Staff"]'))
    const tradecust= Selector(elementByXPath('//span[.="Trade Partner"]'))
    const selectcustmer = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[3]'))
    //************Affilitate Member details*****************************/
    const affilitate= Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[4]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const clearaffilitate= Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[4]/app-form-field/row/column[3]/div[1]'))
    const anzstaff= Selector(elementByXPath('//div[.="ANZ Staff Club"]'))
    //const countrywoman= Selector(elementByXPath('//div[.="Country Women s Association of Victoria"]'))
    const mastercard= Selector(elementByXPath('//div[.="MasterCard Concierge (Ten Lifestyle Mgmt)"]'))
    const qantassuper= Selector(elementByXPath('//div[.="Qantas Super"]'))
    const royalagri= Selector(elementByXPath('//div[.="Royal Agricultural Society (VIC/NSW)"]'))
    const rslservice= Selector(elementByXPath('//div[.="RSL & Services Clubs Assoc. Queensland INC"]'))
    const rslvictoria= Selector(elementByXPath('//div[.="RSL Victoria"]'))
    const southern= Selector(elementByXPath('//div[.="Southern Cross Care NSW & ACT"]'))
    const travelzoo= Selector(elementByXPath('//div[.="Travelzoo"]'))

    //*********************Customer Market********************************************** */
    const customermarket = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[2]/app-form-field/row/column[3]/div/i'))
    const typecustomermarkettype = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[2]/app-form-field/row/column[2]/ng-select/div/div/div[2]/input'))
    const autotypecustomermarket = Selector(elementByXPath('input[autocomplete="ae3c8b682c10"]'))

   //***********************Date Picker *************************************************** */ 
   const datepickermonth = Selector(elementByXPath('//ngb-datepicker[1]//select[1]'))
   const datepickeryear = Selector(elementByXPath('//ngb-datepicker[1]//select[2]'))
   const specificdatepicker = Selector(elementByXPath('//*[@id="ngb-popover-33"]/div[2]/div/app-season-overview/div[2]/row[1]/column/div/button[2]/span'))
   const specificdatepickermonth = Selector(elementByXPath('//ngb-datepicker[2]//select[1]'))
   const specificdatepickeryear = Selector(elementByXPath('//ngb-datepicker[2]//select[2]'))
   const startrange = Selector(elementByXPath('//*[@id="ngb-popover-3"]/div[2]/div[2]/ngb-datepicker[1]/div[2]/div[1]/ngb-datepicker-month-view/div[2]/div[3]/span'))
   const endrange = Selector(elementByXPath('//*[@id="ngb-popover-3"]/div[2]/div[2]/ngb-datepicker[1]/div[2]/div[2]/ngb-datepicker-month-view/div[6]/div[6]/span'))
   const specificadate = Selector(elementByXPath('//*[@id="ngb-popover-3"]/div[2]/div[2]/ngb-datepicker[2]/div[2]/div[2]/ngb-datepicker-month-view/div[7]/div[1]/div'))
    
   //*********************************Number picker ******************************************************* */
    const travellersincrement = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[4]/app-form-field/row/column[3]/div/i'))
    const travellersdecrement = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[4]/app-form-field/row/column[1]/div/i'))
    const roomincrement = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[5]/app-form-field/row/column[3]/div/i'))
    const roomdecrement = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[5]/app-form-field/row/column[1]/div/i'))
    const travelerenternegetivevalue = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[4]/app-form-field/row/column[2]/app-number-picker/input'))
    const roomenternegetivevalue = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[2]/column[5]/app-form-field/row/column[2]/app-number-picker/input'))
    //****************************************Tour Code/Name/Destination****************************** */
    const tourdropdown = Selector(elementByXPath('//button[@id="dropdownTourFilter"]'))
    const namedropdown = Selector(elementByXPath('//button[.="Name"]'))
    const destinationdropdown= Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[6]/app-form-field/row/column[1]/div/div/div/button[3]'))
    const destinationoptiondropdown = Selector(elementByXPath('//*[@id="tours-panel"]/div/form/row[1]/column[6]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const namesearch = Selector(elementByXPath('//span[.="EUBS08 - 8 Day Gems of Southeast Europe (Cruise Only) 2020"]'))
    const selectbydestination = Selector(elementByXPath('//*[@id="a373e915cdbd"]'))
    //************************************Booking Page element************** */
    const selectdepbutton = Selector(elementByXPath('//button[@class="btn btn-outline-light dropdown-toggle"]'))
    const selectalldeparuredate = Selector(elementByXPath('//*[@id="ngb-popover-4"]/div[2]/div/app-season-overview/div/row[2]/column[2]/app-checkbox/label'))
    const applybutton = Selector(elementByXPath('//*[@id="ngb-popover-4"]/div[2]/div/app-season-overview/div/row[2]/column[4]/button[2]'))
    const fastbooking = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/div[3]/container/row/column[2]/app-fast-book/button'))
    const skipnormalbooking = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-fast-book-modal/div/div[3]/button[1]'))
    const reviewitinery = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/row/column/span/h2'))
    const nextbook = Selector(elementByXPath('//button[@class="btn btn-dark"]'))
    const confirmessentialinfo = Selector(elementByXPath('//*[@id="passengerTab2"]/div[1]'))
    const confirmessentitalnext = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-add-passenger-modal/div/row/column/div[2]/div/button[2]'))
    const confirmessetialtitle = Selector(elementByXPath('//*[@id="passengerTab2-panel"]/div/div/app-passenger-details/form/row/column/app-personal-essential-details/form/row/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const confirmessentialinfofirstname = Selector(elementByXPath('//*[@id="passengerTab2-panel"]/div/div/app-passenger-details/form/row/column/app-personal-essential-details/form/row/column[2]/app-form-field/row/column[2]/input'))
    const confirmessentialinfolastname = Selector(elementByXPath('//*[@id="passengerTab2-panel"]/div/div/app-passenger-details/form/row/column/app-personal-essential-details/form/row/column[4]/app-form-field/row/column[2]/input'))
    const additionalinfo = Selector(elementByXPath('//*[@id="passengerTab3"]'))
    const additionalcontacttab = Selector(elementByXPath('//*[@id="app-panel-3"]/div/row[1]/column[1]/row/column'))
    const additionalcheckboxuncheck = Selector(elementByXPath('//*[@id="app-panel-3"]/div/row[2]/column/div/row/column/app-contact-details/form/row[2]/column/row'))
    const additionalemail = Selector(elementByXPath('//*[@id="app-panel-3"]/div/row[2]/column/div/row/column/app-contact-details/form/row[3]/column[3]/app-form-field/row/column[2]/input'))
    const confirmtraveler = Selector(elementByXPath('//button[@class="btn btn-primary ml-2 ng-star-inserted"]'))
    const essentialdobfield = Selector(elementByXPath('//*[@id="passengerTab2-panel"]/div/div/app-passenger-details/form/row/column/app-personal-essential-details/form/row/column[5]/app-form-field/row/column[2]/app-date-picker/input'))
    const healthradio = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-passengers/app-booking-step/row/column/div/app-passengers-internal/form/row[3]/column/app-hfm/form/row/column[1]/div/span[2]/b'))
    const healthconditionaccept = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/row/column[3]/div/div/app-passengers/app-booking-step/row/column/div/app-passengers-internal/form/row[3]/column/row[2]'))
    const confirmandsave = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/div[3]/container/row/column[2]/button'))
    const flightclick = Selector(elementByXPath('//button[@class="btn btn-sm btn-outline-danger ml-2 ng-star-inserted"]'))
    const termscondition = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-booking-confirm-save/div/div[2]'))
    const selectall = Selector(elementByXPath('//*[@id="ngb-popover-4"]/div[2]/div/app-season-overview/row/column/div/button[1]'))
    const applayall = Selector(elementByXPath('//*[@id="ngb-popover-4"]/div[2]/div/app-season-overview/row/column/div/button[2]'))
    const addtraveller1 = Selector(elementByXPath('//app-passengers-internal[@class="p-2 d-block ng-star-inserted"]//column[2]//span[@class="small font-weight-bold ng-star-inserted"]'))
    const healthradio1 = Selector(elementByXPath('//app-hfm[2]//span[@class="mb-0 d-flex align-items-center ml-3"]/i[@class="far fa-circle fa-lg ml-1 text-primary ng-star-inserted"]'))
    
    //**********************************Flight adding in trip********************** */
    const addalltraveller = Selector(elementByXPath('//button[@class="btn btn-sm btn-link"]'))
    const addflightbooknow = Selector(elementByXPath('//small[.="Book Now"]'))
    const searchflighttab = Selector(elementByXPath('//h2[.="Search Flights"]'))
    const addflyingcity = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[1]/app-flight-search/row/column/row[2]/column/app-flight-search-form-component/form/row[3]/column[2]/app-flight-search-form/form/row[2]/column[1]/app-form-field/row/column[2]/app-auto-complete/input'))
    const flyingdep = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[1]/app-flight-search/row/column/row[2]/column/app-flight-search-form-component/form/row[4]/column[2]/app-flight-search-form/form/row[2]/column[3]/app-form-field/row/column[2]/app-date-picker/input'))
    const flyingfrom = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[1]/app-flight-search/row/column/row[2]/column/app-flight-search-form-component/form/row[3]/column[2]/app-flight-search-form/form/row[2]/column[3]/app-form-field/row/column[2]/app-date-picker/input'))
    const selectflyingcity = Selector(elementByXPath('//*[@id="ngb-typeahead-3-0"]/row/column/span[2]'))
    const searchflightbtn = Selector(elementByXPath('//button[@class="btn btn-primary mt-3"]'))
    const selectflight = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[2]/app-flight-search-results/row/column/row[3]/column[4]/app-flight-result-fare[1]/div/row/column[1]/row/column[2]/button'))
    const selectpassportdetailscheckbox = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[3]/app-flight-review/row/column/row[2]/column[1]/row[3]/column[2]/div'))
    const bookfare = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[3]/app-flight-review/row/column/row[1]/column[3]/div/button[2]'))
    const confirmandfinish = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[4]/app-flight-add-services/row/column/row[1]/column[2]/div/button'))
    //***************BOOKING SEARCH ELEMENT */
    const bookingsearchedit = Selector(elementByXPath('//input[@class="form-control ng-untouched ng-pristine ng-invalid"]'))
    const bookingsearchicon = Selector(elementByXPath('//i[@class="fas fa-search"]'))
    const clickflight = Selector(elementByXPath('//button[@class="btn btn-sm btn-outline-primary edit-flights ng-star-inserted"]'))
    const bookingexpand = Selector(elementByXPath('//app-panel[1]//div[@class="d-flex justify-content-between align-items-center ng-star-inserted"]'))
    const expandmissinfinfo = Selector(elementByXPath('//column[.="Booking AlertsMissing Info"]'))
    const addnotebutton = Selector(elementByXPath('//button[contains(.,"Notes")]'))
    const addnotebuttonodeysslink = Selector(elementByXPath('//table[3]//tr[1]//a[.="Add Note"]'))
    const addnotebuttonodeyss = Selector(elementByXPath('//button[@class="btn btn-default order-1"]'))
    const enternoteodeyss = Selector(elementByXPath('/html/body/table[3]/tbody/tr[2]/th[5]'))
    const saveodeyssnote = Selector(elementByXPath('//input[@value="Save"]'))
    const savechanges = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/div[3]/container/row/column[1]/div[2]/button[2]'))
    const confirmnoteschanges = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/ng-component/div[3]/button[1]'))
    const confirmchangesmessage = Selector(elementByXPath('//button[@class="btn btn-primary mt-0 mr-3"]'))

    //********************************Adding option to booking********************* */
    const optionbooking = Selector(elementByXPath('//div[8]//div[@class="edit-button p-2 ng-star-inserted"]'))
    const optiononeclick = Selector(elementByXPath('//app-package-options[@class="ng-star-inserted"]//column[@class="p-0"]//column[contains(.,"KOWA Adventure Pack with Backpack Selected - Reservations - OptionAUD 0.00 per p")]'))
    const optiontwoclick = Selector(elementByXPath('//app-package-options[@class="ng-star-inserted"]//column[@class="flex-grow-1"]//column[contains(.,"Full Day Horizontal Falls Tour with Cape Leveque - Pickup Cable Beach Club 5.30A")]'))
    const optionsave = Selector(elementByXPath('//button[@class="btn btn-primary order-2 ml-2"]'))
    const showallinvoicedetails = Selector(elementByXPath('//button[@id="showInvoice"]'))
    const showingall = Selector(elementByXPath('//button[.="Showing all"]'))
    const canceloptionbutton = Selector(elementByXPath('//button[@class="btn btn-default order-1"]'))
    const removelineitem = Selector(elementByXPath('//button[@class="btn btn-outline-danger btn-sm mr-2"]'))
    const closelineitem = Selector(elementByXPath('//button[@class="btn btn-default order-1"]'))
    const modifylineitem = Selector(elementByXPath('//button[@class="btn btn-outline-primary btn-sm mr-2"]'))
    const spanmisc = Selector(elementByXPath('//span[.="Misc"]'))
    const discardchanges = Selector(elementByXPath('/html/body/app-root/res-component/main/div/scroll-container/container/div[1]/div/app-booking-container/div[3]/container/row/column[1]/div[2]/button[1]'))
    const discardchangesyes = Selector(elementByXPath('//button[@class="btn btn order-2 ml-2 btn-danger"]'))
    
    //**********************************add Flight Post booking******************************************** */
    const flightbutton = Selector(elementByXPath('//button[@class="btn btn-sm btn-outline-primary edit-flights ng-star-inserted"]'))
    const flightrequest = Selector(elementByXPath('//button[.="Flight Request"]'))
    const flightrequestflyingfrom = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/row[2]/column[1]/flight-request-itin-container/flight-request-itinerary/form/row[2]/column[1]/app-form-field/row/column[2]/app-auto-complete/input'))
    const flightrequestflyingfromselect = Selector(elementByXPath('//i[@class="mr-1 fal fa-university fa-lg ng-star-inserted"]'))
    const flightrequestclass = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/row[2]/column[1]/flight-request-itin-container/flight-request-itinerary/form/row[2]/column[2]/app-form-field/row/column[2]/ng-select/div/div/div[2]/input'))
    const flightrequestairline = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/row[2]/column[1]/flight-request-itin-container/flight-request-itinerary/form/row[2]/column[3]/app-form-field/row/column[2]/ng-select/div'))
    const flightrequestcity = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/row[2]/column[1]/flight-request-itin-container/form/row/column[1]/app-form-field/row/column[2]/textarea'))
    const specialrequest = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/row[2]/column[1]/flight-request-itin-container/form/row/column[2]/app-form-field/row/column[2]/textarea'))
    const saveflightrequest = Selector(elementByXPath('//button[@class="btn btn-primary button mx-2"]'))
    const ownflightbutton = Selector(elementByXPath('//small[.="Own Flights"]'))
    const ownflightairline = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[2]'))
    const ownflightnumber = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[2]/app-form-field/row/column[2]/input'))
    const ownflightflyingfrom = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[3]/app-form-field/row/column[2]/app-auto-complete/input'))
    const ownflightflyingto = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[4]/app-form-field/row/column[2]/app-auto-complete/input'))
    const ownflightdeparturedate = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[5]/app-form-field/row/column[2]/app-date-picker/input'))
    const ownflightdepthour = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[6]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[1]/input'))
    const ownflightdeptime = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[6]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[3]/input'))
    const ownflightarrivaldate = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[7]/app-form-field/row/column[2]/app-date-picker/input'))
    const ownflightarrivalhour = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[8]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[1]/input'))
    const ownflightarrivaltime = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/app-flight-pnr/form/row[2]/column[8]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[3]/input'))
    const ownflightclasstravel = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/form/row/column[1]/app-form-field/row/column[2]/ng-select/div'))
    const ownflightairlinelocator = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-ownair-template/form/row/column[2]/app-form-field/row/column[2]/input'))
    const supplierflightbtn = Selector(elementByXPath('//small[contains(.,"Supplier Flights")]'))
    const supplier = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[1]/column[1]/app-form-field/row/column[2]/app-auto-complete/input'))
    const selectqantas = Selector(elementByXPath('//div[.="Qantas Airways"]'))
    const cost = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[1]/column[2]/app-form-field/row/column[2]/input'))
    const price = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[1]/column[3]/app-form-field/row/column[2]/input'))
    const commission = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[1]/column[4]/app-form-field/row/column[2]/input'))
    const noncomminssion = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[1]/column[5]/app-form-field/row/column[2]/input'))
    const supplierairline = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[1]/app-form-field/row/column[2]/ng-select/div'))
    const supplierflightno = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[2]/app-form-field/row/column[2]/input'))
    const supplierflyingfrom = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[3]/app-form-field/row/column[2]/app-auto-complete/input'))
    const supplierflyingto = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[4]/app-form-field/row/column[2]/app-auto-complete/input'))
    const supplierdepdate = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[5]/app-form-field/row/column[2]/app-date-picker/input'))
    const supplierdephour = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[6]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[1]/input'))
    const supplierdepmin = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[6]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[3]/input'))
    const supplierarrivaldate = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[7]/app-form-field/row/column[2]/app-date-picker/input'))
    const supplierarrivalhour = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[8]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[1]/input'))
    const suppliermin = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/app-flight-pnr/form/row[2]/column[8]/app-form-field/row/column[2]/ngb-timepicker/fieldset/div/div[3]/input'))
    const supplierclassoftravel = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[3]/column[1]/app-form-field/row/column[2]/ng-select/div/div/div[2]/input'))
    const supplierairlinerecorder = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-flight/row/column/div/row[2]/column[1]/flight-pnr-supplier-template/form/row[3]/column[2]/app-form-field/row/column[2]/input'))
    const cancelflightbooking = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[3]/app-flight-review/app-air-progress/row/column[1]/button'))
    const cancelflightbutton1= Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[2]/app-flight-search-results/app-air-progress/row/column[1]/button'))
    const selectfightclassoutbound = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[1]/app-flight-search/row/column/row[2]/column/app-flight-search-form-component/form/row[3]/column[2]/app-flight-search-form/form/row[2]/column[5]/app-form-field/row/column[2]/ng-select/div/div/div[2]/input'))
    const selectfightclassinbound = Selector(elementByXPath('/html/body/ngb-modal-window/div/div/flight-booking-itinerary/container/div/div[1]/app-flight-search/row/column/row[2]/column/app-flight-search-form-component/form/row[4]/column[2]/app-flight-search-form/form/row[2]/column[5]/app-form-field/row/column[2]/ng-select/div'))
    const duplicatemodal= Selector(elementByXPath('/html/body/ngb-modal-window/div/div/app-booking-duplicate-modal/div/div[1]/h5'))
    ///Functions for home page

 exports.oxyadminpages = {
    
    Username: function() {

        return Username.with({ boundTestRun: testController });
    },
    Password: function() {

        return Password.with({ boundTestRun: testController });
    },
    Signinbutton: function() {

        return Signinbutton.with({ boundTestRun: testController });
    },

    ///////Create A new Customer Element
    Clicksearchcustomer: function() {

        return Clicksearchcustomer.with({ boundTestRun: testController });
    },
    Addnewcustomer: function(){
        return Addnewcustomer.with({boundTestRun:testController})
    },
    Selectcustomer: function(){
        return Selectcustomer.with({boundTestRun:testController})
    },
    Commonoption: function(){
        return Commonoption.with({boundTestRun:testController})
    },
    Addnewtitle: function(){
        return Addnewtitle.with({boundTestRun:testController})

    },
    Addfirstname: function(){
        return Addfirstname.with({boundTestRun:testController})
    },

    Addlastname: function(){
        return Addlastname.with({boundTestRun:testController})
    },    
    Addcustomarket: function(){
        return Addcustomarket.with({boundTestRun:testController})
    },

    Addcurrency: function(){

        return Addcurrency.with({boundTestRun:testController})
    },
    Addphonenumber: function(){
        return Addphonenumber.with({boundTestRun:testController})
    },
        
    Addmobileno: function(){
        return Addmobileno.with({boundTestRun:testController})
    },
    Addemail: function(){
        return Addemail.with({boundTestRun:testController})
    },
    Addcountry: function(){
        return Addcountry.with({boundTestRun:testController})
    },
    Addaddress1line: function(){
        return Addaddress1line.with({boundTestRun:testController})
    },
    Addaddress2line: function(){
        return Addaddress2line.with({boundTestRun:testController})
    },
    Addaddress3line: function(){
        return Addaddress3line.with({boundTestRun:testController})
    },
    Addpostalcode: function(){
        return  Addpostalcode.with({boundTestRun:testController})
    },
    Addcity: function(){
        return Addcity.with({boundTestRun:testController})
    },
    Addstate: function(){
        return Addstate.with({boundTestRun:testController})
    },
    Addcountrymailaddress: function(){
        return Addcountrymailaddress.with({boundTestRun:testController})
    },
    Viewsamplesearchaddress: function(){
        return Viewsamplesearchaddress.with({boundTestRun:testController})
    },
    Addmailaddress1line: function(){
        return Addmailaddress1line.with({boundTestRun:testController})
    },
    Addmailaddress2line: function(){
        return Addmailaddress2line.with({boundTestRun:testController})
    },
    Addmailaddress3line: function(){
        return Addmailaddress3line.with({boundTestRun:testController})
    },
    Addmailpostalcode: function(){
        return Addmailpostalcode.with({boundTestRun:testController})
    },
    Addmailcity: function(){
        return Addmailcity.with({boundTestRun:testController})
    },
    Addmailstate: function(){
        return Addmailstate.with({boundTestRun:testController})
    },
    Saveaddeess: function(){
        return Saveaddeess.with({boundTestRun:testController})
    },
    commondropdown: function(){
        return commondropdown.with({boundTestRun:testController})
    },
    Searchaddress1home: function(){
        return Searchaddress1home.with({boundTestRun:testController})
    },
    Searchaddressmail: function(){
        return Searchaddressmail.with({boundTestRun:testController})
    },
    Mailhomeaddresscheckbox: function(){
        return Mailhomeaddresscheckbox.with({boundTestRun:testController})
    },
    Confirmaddress: function(){
        return Confirmaddress.with({boundTestRun:testController})
    },
    Confirmaddresslabl: function(){
       return Confirmaddresslabl.with({boundTestRun:testController})
    },
    Searchcustomer: function(){
        return Searchcustomer.with({boundTestRun:testController})
    },
    Selectcutsomerdrp: function(){
        return Selectcutsomerdrp.with({boundTestRun:testController})
    },
    Confirmcustomer: function(){
        return Confirmcustomer.with({boundTestRun:testController})
    },
    Searchtrip: function(){
        return Searchtrip.with({boundTestRun:testController})
    },
    Selecttrip: function(){
        return Selecttrip.with({boundTestRun:testController})
    },
    Datepicker:function(){
        return Datepicker.with({boundTestRun:testController})
    },
    Changenextmonth: function(){
        return Changenextmonth.with({boundTestRun:testController})
    },
    Startdatedatepicker: function(){
        return Startdatedatepicker.with({boundTestRun:testController})
    },
    Enddatedatepicker: function(){
        return Enddatedatepicker.with({boundTestRun:testController})
    },
    Noofdays: function(){
        return Noofdays.with({boundTestRun:testController})
    },
    
    ClickonPromo: function(){
        return ClickonPromo.with({boundTestRun:testController})
    },
    
    Selectpromo: function(){
        return Selectpromo.with({boundTestRun:testController})
    },
    
    Searchtripdates: function(){
        return Searchtripdates.with({boundTestRun:testController})
    },
    Selectpertculartrip: function(){
        return Selectpertculartrip.with({boundTestRun:testController})
    },
    Clickonbooking: function(){
        return Clickonbooking.with({boundTestRun:testController})
    },
    continuebooking: function(){
        return continuebooking.with({boundTestRun:testController})
    },
    Nextpagebutton: function(){
        return Nextpagebutton.with({boundTestRun:testController})
    },
    selecttravellerknow: function(){
        return selecttravellerknow.with({boundTestRun:testController})
    },
    suboptiontravellerknow: function(){
        return suboptiontravellerknow.with({boundTestRun:testController})
    },
    tripnotes: function(){
        return tripnotes.with({boundTestRun:testController})
    },
    promosaving: function(){
        return promosaving.with({boundTestRun:testController})
    },
    promobonus: function(){
        return promobonus.with({boundTestRun:testController})
    },
    promonext: function(){
        return promonext.with({boundTestRun:testController})
    },
    Transfercrew: function(){
        return Transfercrew.with({boundTestRun:testController})
    },
    flightrequired: function(){
        return flightrequired.with({boundTestRun:testController})
    },
    flightdocumnet: function(){
        return flightdocumnet.with({boundTestRun:testController})
    },
    bookingsummary: function(){
        return bookingsummary.with({boundTestRun:testController})
    },
    addtraveller: function(){
        return addtraveller.with({boundTestRun:testController})
    },
    bookingpagenext: function(){
        return bookingpagenext.with({boundTestRun:testController})
    },
    existcustomer: function(){
        return existcustomer.with({boundTestRun:testController})
    },
    selectexistingcustomer: function(){
        return selectexistingcustomer.with({boundTestRun:testController})
    },
    bookingnext: function(){
        return bookingnext.with({boundTestRun:testController})
    },
    opendetails: function(){
        return opendetails.with({boundTestRun:testController})
    },
    confirmcustomer: function(){
        return confirmcustomer.with({boundTestRun:testController})
    },
    healthconditionno: function(){
        return healthconditionno.with({boundTestRun:testController})
    },
    readandconfirm: function(){
        return readandconfirm.with({boundTestRun:testController})
    },
    bookinghearus:function(){
        return bookinghearus.with({boundTestRun:testController})
    },
    bookingsubcat: function(){
        return bookingsubcat.with({boundTestRun:testController})
    },
    confirmbookinguser: function(){
        return confirmbookinguser.with({boundTestRun:testController})
    },
    confirmcondition: function(){
        return confirmcondition.with({boundTestRun:testController})
    },
    saveandbook: function(){
        return saveandbook.with({boundTestRun:testController})
    },
    confirmbookingpage: function(){
        return confirmbookingpage.with({boundTestRun:testController})

    },
    personaldetails: function(){
        return personaldetails.with({boundTestRun:testController})
    },
    nextconfirmaddress: function(){
        return nextconfirmaddress.with({boundTestRun:testController})
    },
    confirmcustomerdetails: function(){
        return confirmcustomerdetails.with({boundTestRun:testController})
    },
    saveconfirmaddress: function(){
        return saveconfirmaddress.with({boundTestRun:testController})
    },
    saveandconfirm: function(){
        return saveandconfirm.with({boundTestRun:testController})
    },
    addflight: function(){
        return addflight.with({boundTestRun:testController})
    },
    saveflightdetails: function(){
        return saveflightdetails.with({boundTestRun:testController})
    },
    customerconfirmodyssey: function(){
        return customerconfirmodyssey.with({boundTestRun:testController})
    },
    accetptestcon: function(){
        return accetptestcon.with({boundTestRun:testController})
    },


    //*******Field Validation********//

    Clickbrand: function(){
        return Clickbrand.with({boundTestRun:testController})
    },
    selectallbrand: function(){
        return selectallbrand.with({boundTestRun:testController})
    },
    
    selectallbrandAPT: function(){
        return selectallbrandAPT.with({boundTestRun:testController})
    },
    
    selectallbrandTM: function(){
        return selectallbrandTM.with({boundTestRun:testController})
    },
    
    selectallbrandBT: function(){
        return selectallbrandBT.with({boundTestRun:testController})
    },
    
    selectallbrandCC: function(){
        return selectallbrandCC.with({boundTestRun:testController})
    },
    
    selectallbrandKWA: function(){
        return selectallbrandKWA.with({boundTestRun:testController})
    },
    
    selectallbrandRCT: function(){
        return selectallbrandRCT.with({boundTestRun:testController})
    },
    
    trip1: function(){
        return trip1.with({boundTestRun:testController})
    },
    
    trip2: function(){
        return trip2.with({boundTestRun:testController})
    },
    selectcustomerhome: function(){
        return selectcustomerhome.with({boundTestRun:testController})
    },
    
    directcust: function(){
        return directcust.with({boundTestRun:testController})
    },
    tradecust: function(){
        return tradecust.with({boundTestRun:testController})
    },
    
    internalcust: function(){
        return internalcust.with({boundTestRun:testController})
    },
    
    affilitate: function(){
        return affilitate.with({boundTestRun:testController})
    },
    
    clearaffilitate: function(){
        return clearaffilitate.with({boundTestRun:testController})
    },
    
    anzstaff: function(){
        return anzstaff.with({boundTestRun:testController})
    },
    
    countrywoman: function(){
        return countrywoman.with({boundTestRun:testController})
    },
    
    mastercard: function(){
        return mastercard.with({boundTestRun:testController})
    },
    
    qantassuper: function(){
        return qantassuper.with({boundTestRun:testController})
    },
    
    royalagri: function(){
        return royalagri.with({boundTestRun:testController})
    },
    
    rslservice: function(){
        return rslservice.with({boundTestRun:testController})
    },
    
    rslvictoria: function(){
        return rslvictoria.with({boundTestRun:testController})
    },
    
    southern: function(){
        return southern.with({boundTestRun:testController})
    },
    
    travelzoo: function(){
        return travelzoo.with({boundTestRun:testController})
    },
    
    customermarket: function(){
        return customermarket.with({boundTestRun:testController})
    },
    
    typecustomermarkettype: function(){
        return typecustomermarkettype.with({boundTestRun:testController})
    },
    autotypecustomermarket: function(){
        return autotypecustomermarket.with({boundTestRun:testController})
    },
     southern: function(){
        return southern.with({boundTestRun:testController})
    },
    
    travelzoo: function(){
        return travelzoo.with({boundTestRun:testController})
    },
    
    customermarket: function(){
        return customermarket.with({boundTestRun:testController})
    },
    
    typecustomermarkettype: function(){
        return typecustomermarkettype.with({boundTestRun:testController})
    },
    autotypecustomermarket: function(){
        return autotypecustomermarket.with({boundTestRun:testController})
    },
    datepickermonth: function(){
        return datepickermonth.with({boundTestRun:testController})
    },
    
    datepickeryear: function(){
        return datepickeryear.with({boundTestRun:testController})
    },
    
    specificdatepicker: function(){
        return specificdatepicker.with({boundTestRun:testController})
    },
    
    specificdatepickermonth: function(){
        return specificdatepickermonth.with({boundTestRun:testController})
    },
    specificdatepickeryear: function(){
        return specificdatepickeryear.with({boundTestRun:testController})
    },
    startrange: function(){
        return startrange.with({boundTestRun:testController})
    },
    endrange: function(){
        return endrange.with({boundTestRun:testController})
    },
    specificadate: function(){
        return specificadate.with({boundTestRun:testController})
    },
    travellersincrement: function(){
        return travellersincrement.with({boundTestRun:testController})
    },
    travellersdecrement: function(){
        return travellersdecrement.with({boundTestRun:testController})
    },
    roomincrement: function(){
        return roomincrement.with({boundTestRun:testController})
    },
    roomdecrement: function(){
        return roomdecrement.with({boundTestRun:testController})
    },
    travelerenternegetivevalue: function(){
        return travelerenternegetivevalue.with({boundTestRun:testController})
    },
    roomenternegetivevalue: function(){
        return roomenternegetivevalue.with({boundTestRun:testController})
    },

    tourdropdown: function(){
        return tourdropdown.with({boundTestRun:testController})
    },
    namedropdown: function(){
        return namedropdown.with({boundTestRun:testController})
    },
    destinationdropdown: function(){
        return destinationdropdown.with({boundTestRun:testController})
    },
    destinationoptiondropdown: function(){
        return destinationoptiondropdown.with({boundTestRun:testController})
    },

    namesearch: function(){
        return namesearch.with({boundTestRun:testController})
    },
    selectdepbutton: function(){
        return selectdepbutton.with({boundTestRun:testController})
    },
    selectalldeparuredate: function(){
        return selectalldeparuredate.with({boundTestRun:testController})
    },
    applybutton: function(){
        return applybutton.with({boundTestRun:testController})
    },
    fastbooking: function(){
        return fastbooking.with({boundTestRun:testController})
    },
    skipnormalbooking: function(){
        return skipnormalbooking.with({boundTestRun:testController})
    },
    reviewitinery: function(){
        return reviewitinery.with({boundTestRun:testController})
    },
    nextbook: function(){
        return nextbook.with({boundTestRun:testController})
    },
    confirmessentialinfo: function(){
        return confirmessentialinfo.with({boundTestRun:testController})
    },
    confirmessentitalnext: function(){
        return confirmessentitalnext.with({boundTestRun:testController})
    },
    confirmessetialtitle: function(){
        return confirmessetialtitle.with({boundTestRun:testController})
    },
    confirmessentialinfofirstname: function(){
        return confirmessentialinfofirstname.with({boundTestRun:testController})
    },
    confirmessentialinfolastname: function(){
        return confirmessentialinfolastname.with({boundTestRun:testController})
    },
    additionalinfo: function(){
        return additionalinfo.with({boundTestRun:testController})
    },
    additionalcontacttab: function(){
        return additionalcontacttab.with({boundTestRun:testController})
    },
    additionalcheckboxuncheck: function(){
        return additionalcheckboxuncheck.with({boundTestRun:testController})
    },
    additionalemail: function(){
        return additionalemail.with({boundTestRun:testController})
    },
    confirmtraveler: function(){
        return confirmtraveler.with({boundTestRun:testController})
    },
    notrip: function(){
        return notrip.with({boundTestRun:testController})
    },
    selectbydestination: function(){
        return selectbydestination.with({boundTestRun:testController})
    },
    essentialdobfield: function(){
        return essentialdobfield.with({boundTestRun:testController})
    },
    selectbydestination: function(){
        return selectbydestination.with({boundTestRun:testController})
    },
    essentialdobfield: function(){
        return essentialdobfield.with({boundTestRun:testController})
    },
    healthradio: function(){
        return healthradio.with({boundTestRun:testController})
    },
    healthconditionaccept: function(){
        return healthconditionaccept.with({boundTestRun:testController})
    },
    confirmandsave: function(){
        return confirmandsave.with({boundTestRun:testController})
    },
    flightclick: function(){
        return flightclick.with({boundTestRun:testController})
    },
    termscondition: function(){
        return termscondition.with({boundTestRun:testController})
    },
    selectall: function(){
        return selectall.with({boundTestRun:testController})
    },
    applayall: function(){
        return applayall.with({boundTestRun:testController})
    },
    bookingsearchedit: function(){
        return bookingsearchedit.with({boundTestRun:testController})
    },
    bookingsearchicon: function(){
        return bookingsearchicon.with({boundTestRun:testController})
    },
    clickflight: function(){
        return clickflight.with({boundTestRun:testController})
    },
    bookingexpand: function(){
        return bookingexpand.with({boundTestRun:testController})
    },
    expandmissinfinfo: function(){
        return expandmissinfinfo.with({boundTestRun:testController})
    },
    addnotebutton: function(){
        return addnotebutton.with({boundTestRun:testController})
    },
    addnotebuttonodeyss: function(){
        return addnotebuttonodeyss.with({boundTestRun:testController})
    },
    enternoteodeyss: function(){
        return enternoteodeyss.with({boundTestRun:testController})
    },
    saveodeyssnote: function(){
        return saveodeyssnote.with({boundTestRun:testController})
    },
    savechanges: function(){
        return savechanges.with({boundTestRun:testController})
    },
    confirmnoteschanges: function(){
        return confirmnoteschanges.with({boundTestRun:testController})
    },
    confirmchangesmessage: function(){
        return confirmchangesmessage.with({boundTestRun:testController})
    },
    addnotebuttonodeysslink: function(){
        return addnotebuttonodeysslink.with({boundTestRun:testController})
    },
    optionbooking: function(){
        return optionbooking.with({boundTestRun:testController})
    },
    optiononeclick : function(){
        return optiononeclick.with({boundTestRun:testController})
    },
    optiontwoclick : function(){
        return optiontwoclick.with({boundTestRun:testController})
    },
    optionsave : function(){
        return optionsave.with({boundTestRun:testController})
    },
    showallinvoicedetails: function(){
        return showallinvoicedetails.with({boundTestRun:testController})
    },
    showingall: function(){
        return showingall.with({boundTestRun:testController})
    },
    canceloptionbutton: function(){
        return canceloptionbutton.with({boundTestRun:testController})
    },
    removelineitem: function(){
        return removelineitem.with({boundTestRun:testController})
    },
    closelineitem: function(){
        return closelineitem.with({boundTestRun:testController})
    },
    modifylineitem: function(){
        return modifylineitem.with({boundTestRun:testController})
    },
    spanmisc: function(){
        return spanmisc.with({boundTestRun:testController})
    },
    discardchanges: function(){
        return discardchanges.with({boundTestRun:testController})
    },
    discardchangesyes: function(){
        return discardchangesyes.with({boundTestRun:testController})
    },
    nextpagearrow: function(){
        return nextpagearrow.with({boundTestRun:testController})
    },
    selectloyalty: function(){
        return selectloyalty.with({boundTestRun:testController})
    },
    selectloyatygold: function(){
        return selectloyatygold.with({boundTestRun:testController})
    },
    nextbutton: function(){
        return nextbutton.with({boundTestRun:testController})
    },
    addtraveller1: function(){
        return addtraveller1.with({boundTestRun:testController})
    },
    healthradio1: function(){
        return healthradio1.with({boundTestRun:testController})
    },
    addalltraveller: function(){
        return addalltraveller.with({boundTestRun:testController})
    },
    addflightbooknow: function(){
        return addflightbooknow.with({boundTestRun:testController})
    },
    flyingfrom: function(){
        return flyingfrom.with({boundTestRun:testController})
    },
    flyingdep: function(){
        return flyingdep.with({boundTestRun:testController})
    },
    addflyingcity: function(){
        return addflyingcity.with({boundTestRun:testController})
    },
    selectflyingcity: function(){
        return selectflyingcity.with({boundTestRun:testController})
    },
    searchflightbtn: function(){
        return searchflightbtn.with({boundTestRun:testController})
    },
    searchflighttab: function(){
        return searchflighttab.with({boundTestRun:testController})
    },
    selectflight: function(){
        return selectflight.with({boundTestRun:testController})
    },
    selectpassportdetailscheckbox: function(){
        return selectpassportdetailscheckbox.with({boundTestRun:testController})
    },
    bookfare: function(){
        return bookfare.with({boundTestRun:testController})
    },
    confirmandfinish: function(){
        return confirmandfinish.with({boundTestRun:testController})
    },
    flightbutton: function(){
        return flightbutton.with({boundTestRun:testController})
    },
    flightrequest: function(){
        return flightrequest.with({boundTestRun:testController})
    },
    flightrequestflyingfrom: function(){
        return flightrequestflyingfrom.with({boundTestRun:testController})
    },
    flightrequestflyingfromselect: function(){
        return flightrequestflyingfromselect.with({boundTestRun:testController})
    },
    flightrequestclass: function(){
        return flightrequestclass.with({boundTestRun:testController})
    },
    flightrequestairline: function(){
        return flightrequestairline.with({boundTestRun:testController})
    },
    flightrequestcity: function(){
        return flightrequestcity.with({boundTestRun:testController})
    },
    specialrequest: function(){
        return specialrequest.with({boundTestRun:testController})
    },
    saveflightrequest: function(){
        return saveflightrequest.with({boundTestRun:testController})
    },
    ownflightbutton: function() {

        return ownflightbutton.with({ boundTestRun: testController });
    },
    ownflightairline: function(){
        return ownflightairline.with({boundTestRun:testController})
    },
    ownflightnumber: function(){
        return ownflightnumber.with({boundTestRun:testController})
    },
    ownflightflyingfrom: function(){
        return ownflightflyingfrom.with({boundTestRun:testController})
    },
    ownflightflyingto: function(){
        return ownflightflyingto.with({boundTestRun:testController})

    },
    ownflightdeparturedate: function(){
        return ownflightdeparturedate.with({boundTestRun:testController})
    },

    ownflightdepthour: function(){
        return ownflightdepthour.with({boundTestRun:testController})
    },    
    ownflightdeptime: function(){
        return ownflightdeptime.with({boundTestRun:testController})
    },

    ownflightarrivaldate: function(){

        return ownflightarrivaldate.with({boundTestRun:testController})
    },
    ownflightarrivalhour: function(){
        return ownflightarrivalhour.with({boundTestRun:testController})
    },
        
    ownflightarrivaltime: function(){
        return ownflightarrivaltime.with({boundTestRun:testController})
    },
    ownflightclasstravel: function(){
        return ownflightclasstravel.with({boundTestRun:testController})
    },
    ownflightairlinelocator: function(){
        return ownflightairlinelocator.with({boundTestRun:testController})
    },
    supplierflightbtn: function(){
        return supplierflightbtn.with({boundTestRun:testController})
    },
    supplier: function(){
        return supplier.with({boundTestRun:testController})
    },
    selectqantas: function(){
        return selectqantas.with({boundTestRun:testController})
    },
    cost: function(){
        return cost.with({boundTestRun:testController})
    },
    price: function(){
        return price.with({boundTestRun:testController})
    },
    commission: function(){
        return commission.with({boundTestRun:testController})
    },
    noncomminssion: function() {

        return noncomminssion.with({ boundTestRun: testController });
    },
    supplierairline: function(){
        return supplierairline.with({boundTestRun:testController})
    },
    supplierflightno: function(){
        return supplierflightno.with({boundTestRun:testController})
    },
    supplierflyingfrom: function(){
        return supplierflyingfrom.with({boundTestRun:testController})
    },
    supplierflyingto: function(){
        return supplierflyingto.with({boundTestRun:testController})

    },
    supplierdepdate: function(){
        return supplierdepdate.with({boundTestRun:testController})
    },

    supplierdephour: function(){
        return supplierdephour.with({boundTestRun:testController})
    },    
    supplierdepmin: function(){
        return supplierdepmin.with({boundTestRun:testController})
    },

    supplierarrivaldate: function(){

        return supplierarrivaldate.with({boundTestRun:testController})
    },
    supplierarrivalhour: function(){
        return supplierarrivalhour.with({boundTestRun:testController})
    },
        
    suppliermin: function(){
        return suppliermin.with({boundTestRun:testController})
    },
    supplierclassoftravel: function(){
        return supplierclassoftravel.with({boundTestRun:testController})
    },
    supplierairlinerecorder: function(){
        return supplierairlinerecorder.with({boundTestRun:testController})
    },
    cancelflightbooking: function(){
        return cancelflightbooking.with({boundTestRun:testController})
    },
    nextpage2button: function(){
        return nextpage2button.with({boundTestRun:testController})
    },
    cancelflightbutton1: function(){
        return cancelflightbutton1.with({boundTestRun:testController})
    },
    selectfightclassoutbound: function(){
        return selectfightclassoutbound.with({boundTestRun:testController})
    },
    selectfightclassinbound: function(){
        return selectfightclassinbound.with({boundTestRun:testController})
    },
    documentrequire: function(){
        return documentrequire.with({boundTestRun:testController})
    },
    pretourtransfer: function(){
        return pretourtransfer.with({boundTestRun:testController})
    },
    selectinvoice: function(){
        return selectinvoice.with({boundTestRun:testController})
    },
    documentselect: function(){
        return documentselect.with({boundTestRun:testController})
    },
    duplicatemodal: function(){
        return duplicatemodal.with({boundTestRun:testController})
    },
    selectcustmer: function(){
        return selectcustmer.with({boundTestRun:testController})
    },
    expandbooking: function(){
        return expandbooking.with({boundTestRun:testController})
    },
    selectfutureyeartrip: function(){
        return selectfutureyeartrip.with({boundTestRun:testController})
    },
    Selecttrip1: function(){
        return Selecttrip1.with({boundTestRun:testController})
    },




};
