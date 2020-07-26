const { Given, When, Then } = require('cucumber');

const oxyadminglobalpage = require('./oxyadminpage');
//import { ClientFunction } from 'testcafe';
const dataSet =require('./data.json')





//**************************** */Home page validation */******************************//
dataSet.forEach(data=>{
 const{url,adminusername,adminpassword,normalusername,normalpassword,invalidtrip,invalidtrip1,validtrip,typecustomermarket1,typecustomermarket2,
 typecustomermarket3,typecustomermarket4,selectcustomermarket1,selectcustomermarket2,selectcustomermarket3,
 selectcustomermarket4,travelernegetivevalue,roomnegetivevalue,searchtripwithname,searchtripwithdestaination,
 essentialdetailtitle,essentialdetailfirstname,essentialdetailslastname,additionalinvalidvalue1,additionalinvalidvalue2,
 additionalvalidemail,essentialinvaliddob,essentialvaliddob,bookingnumber,tripcodeforpreair,
 essentialdetailfirstname1,essentialdetailslastname1,essentialvaliddob1,flyingcity,flyingdateoutbound,
 flyingdepdateinbound,flightrequestflyingfrom,flightrequestclass,flightrequestairline,flightrequestcity,
 specialrequest,ownflightairline,ownflightnumber,ownflightflyingfrom,ownflightflyingto,ownflightdeparturedate,
 ownflightdepthour,ownflightdeptime,ownflightarrivaldate,ownflightarrivalhour,ownflightarrivaltime,ownflightclasstravel,
 ownflightairlinelocator,supplier,cost,price,commission,noncomminssion,supplierairline,supplierflightno,supplierflyingfrom,supplierflyingto,supplierdepdate,supplierdephour,supplierdepmin,supplierarrivaldate,
 supplierarrivalhour,suppliermin,supplierclassoftravel,supplierairlinerecorder,tripcodeforpostair,tripcode,cctripcode}=data;

 Given('I navigate to Oxy admin test page', async function () {

    await testController.navigateTo(url)
    console.log('I navigate to Oxy admin test page')
 });

 When('I enter user name' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Username(),adminusername)
    console.log('I enter user name')
 });
 When('I enter password' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Password(),adminpassword)
    console.log('I enter last name')
 });


 When('I enter user name-normal user' , async function () {
 
    
      await testController.typeText(oxyadminglobalpage.oxyadminpages.Username(),normalusername)
      console.log('I enter user name')
   });
 When('I enter password-normal user' , async function () {
   
      
      await testController.typeText(oxyadminglobalpage.oxyadminpages.Password(),normalpassword)
      console.log('I enter last name')
   });
   Then('I click on sign in button' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Signinbutton())
    console.log('I click on sign in button')
 });

 Then('I click on add or serach new customer' , async function () {
 
    //await testController.click(oxyadminglobalpage.oxyadminpages.normalclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.Clicksearchcustomer())
    //await testController.setNativeDialogHandler(() => true)
    console.log('I click on add or serach new customer')
 });
 Then('I will Select Customer' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Selectcustomer())
    await testController.click(oxyadminglobalpage.oxyadminpages.Commonoption().withText('Direct Customer'))
    
    console.log('I will Select Customer')
 });
 Then('I will click on add new customer' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addnewcustomer())
   
    
    console.log('I will click on add new customer')
 });
 Then('I will Select Title' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addnewtitle())
    await testController.click(oxyadminglobalpage.oxyadminpages.Commonoption().withText('Mr'))
    
    console.log('I will Select Title')
 });

 Then('I enter firstname' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addfirstname(),'Shanthkumar')
    console.log('I enter last name')
 });
 Then('I enter Last name' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addlastname(),'Ls')
    console.log('I enter last name')
 });
 Then('I will Select customer market' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addcustomarket())
    await testController.click(oxyadminglobalpage.oxyadminpages.Commonoption().withText('Asia'))
    
    console.log('I will Select customer market')
 });
 Then('I will Select currency' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addcurrency())
    await testController.click(oxyadminglobalpage.oxyadminpages.Commonoption().withText('Australian Dollar'))
    
    console.log('I will Select currency')
 });
 Then('I enter phone number' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addphonenumber(),'0401114444')
    console.log('I enter phone number')
 });
 Then('I enter mobile number' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addmobileno(),'999555555555')
    console.log('I enter mobile number')
 });
 Then('I enter Email id' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addemail(),'Test@gmail.com')
    console.log('I enter Email id')
 });
 Then('I will Select Country in home address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addcountry())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('AUSTRALIA'))
    
    console.log('I will Select Country in home address')
 });
 Then('I enter home address in field 1' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addaddress1line(),'Test@gmail.com')
    console.log('I enter home address in field 1')
 });
 Then('I enter home address in field 2' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addaddress2line(),'Test@gmail.com')
    console.log('I enter home address in field 2')
 });
 Then('I enter home address in field 3' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addaddress3line(),'Test@gmail.com')
    console.log('I enter home address in field 3')
 });
 Then('I enter Postal code' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addpostalcode(),'55555555')
    console.log('I enter Postal code')
 });
 Then('I enter city in home address' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addcity(),'Test@gmail.com')
    console.log('I enter city in home address')
 });
 Then('I will Select State in home address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addstate())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('QUEENSLAND'))
    
    console.log('I will Select State in home address')
 });

 Then('I will Select Country in Mail address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addcountrymailaddress())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('AUSTRALIA'))
    
    console.log('I will Select Country in Mail address')
 });
 Then('I enter Mail address in field 1' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addmailaddress1line(),'Test@gmail.com')
    console.log('I enter home address in field 1')
 });
 Then('I enter Mail address in field 2' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addmailaddress2line(),'Test@gmail.com')
    console.log('I enter home address in field 2')
 });
 Then('I enter Mail address in field 3' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addmailaddress3line(),'Test@gmail.com')
    console.log('I enter home address in field 3')
 });
 Then('I enter Postal code in Mail' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addmailpostalcode(),'55555555')
    console.log('I enter Postal code')
 });
 Then('I enter city in mail address' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Addmailcity(),'Test@gmail.com')
    console.log('I enter city in home address')
 });
 Then('I will Select State in Mail address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Addmailstate())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('QUEENSLAND'))
    
    console.log('I will Select State in Mail address')
 });
 Then('I click on Save address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Saveaddeess())
    console.log('I enter city in home address')
 });
 Then('I click on confirm address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Confirmaddress())
    console.log('I click on confirm address')
 });
 Then('I click checkbox same as Home address' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Confirmaddress())
    console.log('I click checkbox same as Home address')
 });
///////////////****************************Booking Process****************/////////////
 Then('I enter 3 digit in search fileds' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchcustomer(),'joh')
    console.log('I enter 3 digit in search fileds')
 });
 Then('I select valid customer' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Selectcutsomerdrp())
    console.log('I select valid customer')
 });
 Then('I will confirm customer' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Confirmcustomer())
    console.log('I will confirm customer')
 });
 Then('I enter trip code for pre air booking' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),tripcodeforpreair)
    console.log('I enter trip code')
 });
 Then('I enter trip code for post air booking' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),tripcodeforpostair)
    console.log('I enter trip code')
 });
 Then('I enter trip code' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),tripcode)
    console.log('I enter trip code')
 });

 Then('I enter trip code for captain choice and fill all the details and book' , async function () {
 
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),cctripcode)
    await testController.click(oxyadminglobalpage.oxyadminpages.Selecttrip())
    await testController.click(oxyadminglobalpage.oxyadminpages.Datepicker())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectall())
    await testController.click(oxyadminglobalpage.oxyadminpages.applayall())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())
    await testController.click(oxyadminglobalpage.oxyadminpages.Clickonbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.continuebooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.pretourtransfer())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.pretourtransfer())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.pretourtransfer())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.documentselect())
    await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
    await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller1())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname1)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname1)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob1)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio1())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthconditionaccept())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.flightclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selecttravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet'))
    await testController.click(oxyadminglobalpage.oxyadminpages.suboptiontravellerknow())
    await testController.pressKey('down+enter')
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmandsave())
    
    /////********enable when we book multple trip with same name*******/
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookinguser())
    await testController.click(oxyadminglobalpage.oxyadminpages.termscondition())
    
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.saveandbook())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingexpand())
    await testController.click(oxyadminglobalpage.oxyadminpages.expandmissinfinfo())
    console.log('I enter trip code for captain choice and fill all the details and book')
 });

 Then('I select the trip' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Selecttrip())
    console.log('I select the trip')
 });
 Then('I select the trip1' , async function () {
 
   await testController.click(oxyadminglobalpage.oxyadminpages.Selecttrip1())
   console.log('I select the trip')
});
 Then('I select the future trip' , async function () {
 
   await testController.click(oxyadminglobalpage.oxyadminpages.selectfutureyeartrip())
   console.log('I select future the trip')
});
 Then('I click on date picker' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Datepicker())
    console.log('I click on date picker')
 });
 Then('I click on next month' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Changenextmonth())
    
    console.log('I click on next month')
 });
 Then('I click on start date from date picker' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Startdatedatepicker())
    console.log('I click on start date from date picker')
 });
 Then('I click on end date from date picker' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Enddatedatepicker())
    console.log('I click on end date from date picker')
 });
 Then('I enter no of days for the trip' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Noofdays(),'1')
    console.log('I enter no of days for the trip')
 });
 Then('I click on promo and select promo' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.ClickonPromo())
    await testController.click(oxyadminglobalpage.oxyadminpages.Selectpromo())
    console.log('I click on promo and select promo')
 });
 Then('I click on search availble trip' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())
    console.log('I click on search availble trip')
 });
 Then('I select trip from availble for selected dates' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Selectpertculartrip())
    console.log('I select trip from availble for selected dates')
 });
 Then('I click on booking and confirm' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Clickonbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.continuebooking())
    console.log('I click on booking with single customer')
 });
 Then('I select promo from summary' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.selecttravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet'))
    await testController.click(oxyadminglobalpage.oxyadminpages.suboptiontravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet Search (Google, Yahoo, Bing etc)'))
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.tripnotes())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.promosaving())
    await testController.click(oxyadminglobalpage.oxyadminpages.promobonus())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.promonext())
    

    console.log('I select promo from summary')
 });
 Then('I select Transfer crew' , async function () {

    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.Transfercrew())
    
    console.log('I select Transfer crew')
 });
 Then('I select flight required' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequired())
    
    console.log('I select trip from availble for selected dates')
 });
 Then('I select flight documnet' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton()) 
    await testController.click(oxyadminglobalpage.oxyadminpages.flightdocumnet())
   
    
    console.log('I select flight documnet')
 });
 Then('I validate booking summary' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton()) 
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingsummary())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingpagenext())
    
    console.log('I validate booking summary')
 });
 Then('I click on add new traveller' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller())
    console.log('I click on add new traveller')
 });
 Then('I search for a customer' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.existcustomer())
    
    console.log('I search for a customer')
 });
 Then('I will select existing customer' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.selectexistingcustomer())
    console.log('I will select existing customer')
 });
 Then('I click on next button and see passenger details' , async function () {
    
    await testController.click(oxyadminglobalpage.oxyadminpages.personaldetails())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.opendetails())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingnext())
    
    console.log('I click on next button and see passenger details')
 });
 Then('I will confirm the customer' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcustomer())
    console.log('I will confirm the customer')
 });
 Then('I will confirm the health and terms condition' , async function () {
 
    
    await testController.click(oxyadminglobalpage.oxyadminpages.healthconditionno())
    await testController.click(oxyadminglobalpage.oxyadminpages.readandconfirm())
    await testController.click(oxyadminglobalpage.oxyadminpages.nextconfirmaddress())

    console.log('I will confirm the health and terms condition')
 });
 Then('I will validate about hear us' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.saveconfirmaddress())
    await testController.click(oxyadminglobalpage.oxyadminpages.nextconfirmaddress())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcustomerdetails())
    await testController.click(oxyadminglobalpage.oxyadminpages.nextconfirmaddress())
    console.log('I will validate about hear us')
 });


 Then('I will confirm booking' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.addflight())
    await testController.click(oxyadminglobalpage.oxyadminpages.saveflightdetails())
    await testController.click(oxyadminglobalpage.oxyadminpages.nextconfirmaddress())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookinguser())
    //await testController.click(oxyadminglobalpage.oxyadminpages.accetptestcon())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.saveandbook())
    console.log('I will confirm booking')
 });
 Then('I am able to see booking confirmation page in odeyys' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookingpage())
    await testController.click(oxyadminglobalpage.oxyadminpages.customerconfirmodyssey())
    console.log('I am able to see booking confirmation page in odeyys')
 });

//********************Multi select in Home Page *********************************//

 Then('I am able to click on Brand' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Clickbrand())
    
    console.log('I am able to click on Brand')
 });
 Then('I am able to Unselect all' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrand())
    await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())

    
    console.log('I am able to select all')
 });
 Then('I am able to select and Unselect brand' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.Clickbrand())    
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandAPT())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandBT())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandTM())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandCC())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandKWA())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandRCT())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrand())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandBT())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandTM())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandCC())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandKWA())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectallbrandRCT())
    await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())
    
    console.log('I am able to select and Unselect brand')
 });

    /************** Validate valid/invalid/autocomplete trip***************/ 


 Then('I enter diffrent trip code' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),invalidtrip)
    await testController.click(oxyadminglobalpage.oxyadminpages.notrip())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),invalidtrip1)
    await testController.click(oxyadminglobalpage.oxyadminpages.notrip())
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),validtrip)
    await testController.click(oxyadminglobalpage.oxyadminpages.Selecttrip())
    console.log('I enter diffrent trip code')
 });

    /****** Validate diffrent customer type******************************/
 Then('I select diffrent customer type' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.selectcustomerhome())
    await testController.click(oxyadminglobalpage.oxyadminpages.directcust()) 
    await testController.click(oxyadminglobalpage.oxyadminpages.selectcustmer())
    await testController.click(oxyadminglobalpage.oxyadminpages.tradecust())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectcustmer())
    await testController.click(oxyadminglobalpage.oxyadminpages.internalcust())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectcustmer())
    await testController.click(oxyadminglobalpage.oxyadminpages.directcust()) 
    await testController.click(oxyadminglobalpage.oxyadminpages.selectcustmer())
    await testController.click(oxyadminglobalpage.oxyadminpages.tradecust())     
   
    console.log('I select diffrent customer type')
 });

    /************************Validate affilitate member and clear************/

 Then('I select affilitate and clear' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.anzstaff())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.mastercard())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.qantassuper())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.royalagri())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.rslservice())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.rslvictoria())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.southern())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.affilitate())
    await testController.click(oxyadminglobalpage.oxyadminpages.travelzoo())
    await testController.click(oxyadminglobalpage.oxyadminpages.clearaffilitate())
       
  
   console.log('I select diffrent customer type')
 });

    /*************Select and type and select customer market*********/
 Then('I am able to select and type customer type' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.customermarket())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.typecustomermarkettype(),typecustomermarket1)
    await testController.pressKey('tab')
    await testController.click(oxyadminglobalpage.oxyadminpages.customermarket())
    //await testController.typeText(oxyadminglobalpage.oxyadminpages.autotypecustomermarket(),'')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.typecustomermarkettype(),typecustomermarket2)
    await testController.pressKey('tab')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.typecustomermarkettype(),typecustomermarket3)
    await testController.pressKey('tab')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.typecustomermarkettype(),typecustomermarket4)
    await testController.pressKey('tab')
    await testController.click(oxyadminglobalpage.oxyadminpages.customermarket())
    await testController.click(oxyadminglobalpage.oxyadminpages.Commonoption().withText(selectcustomermarket1))
    await testController.click(oxyadminglobalpage.oxyadminpages.customermarket())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(selectcustomermarket2))
    await testController.click(oxyadminglobalpage.oxyadminpages.customermarket())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(selectcustomermarket3))
    await testController.click(oxyadminglobalpage.oxyadminpages.customermarket())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(selectcustomermarket4))
   
    console.log('I select diffrent customer type')
 });

    /********************Select diffrent date and month and specific date **********/
 Then('I am able to select diffrent month and year from date range' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.datepickeryear())
    await testController.pressKey('down+enter')
    await testController.click(oxyadminglobalpage.oxyadminpages.startrange())
    await testController.click(oxyadminglobalpage.oxyadminpages.endrange())
    
    await testController.click(oxyadminglobalpage.oxyadminpages.Datepicker())
    await testController.click(oxyadminglobalpage.oxyadminpages.datepickeryear())
    await testController.pressKey('down+enter')
    await testController.click(oxyadminglobalpage.oxyadminpages.datepickeryear())
    await testController.pressKey('down+enter')
    await testController.click(oxyadminglobalpage.oxyadminpages.datepickeryear())
    await testController.pressKey('down+enter')
    console.log('I am able to select diffrent month and year from date range')

 });
    Then('I am able to select Specific date' , async function () {
       await testController.click(oxyadminglobalpage.oxyadminpages.specificdatepicker())
       await testController.click(oxyadminglobalpage.oxyadminpages.specificdatepickeryear())
       await testController.pressKey('down+enter')
       await testController.click(oxyadminglobalpage.oxyadminpages.specificadate())
       console.log('I am able to select Specific date')
 });
    /************Validate traveler and room fields */
 Then('I am able to add traveller and rooms' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersdecrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersdecrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersdecrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomdecrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomdecrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomdecrement())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.travelerenternegetivevalue(),travelernegetivevalue)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.roomenternegetivevalue(),roomnegetivevalue)
    console.log('I am able to add traveller and rooms')


    
 
 });
    ///Validate search trip based on code/name/destination**********/
 Then('I am able to search based on name or code or destination' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.tourdropdown())
    await testController.click(oxyadminglobalpage.oxyadminpages.namedropdown())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),searchtripwithname)
    await testController.click(oxyadminglobalpage.oxyadminpages.namesearch())
    await testController.click(oxyadminglobalpage.oxyadminpages.tourdropdown())
    await testController.click(oxyadminglobalpage.oxyadminpages.destinationdropdown())
    await testController.click(oxyadminglobalpage.oxyadminpages.destinationoptiondropdown())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(searchtripwithdestaination))

   
    
    console.log('I am able to search based on name/code/destination')


 });
  /**********Validate confirm essential details and additional details*********/
     
 Then('I am able to confirm essential details' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.Datepicker())
    //await testController.click(oxyadminglobalpage.oxyadminpages.specificadate())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectall())
    await testController.click(oxyadminglobalpage.oxyadminpages.applayall())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())
    await testController.click(oxyadminglobalpage.oxyadminpages.Selectpertculartrip())
    await testController.click(oxyadminglobalpage.oxyadminpages.Clickonbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.continuebooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.fastbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.skipnormalbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.additionalinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.additionalcontacttab())
    await testController.click(oxyadminglobalpage.oxyadminpages.additionalcheckboxuncheck())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.additionalemail(),additionalinvalidvalue1)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.additionalemail(),additionalinvalidvalue2)
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.additionalemail(),additionalvalidemail)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
    console.log('I am able to add traveller and rooms')
  });
 Then('I am able to book using fast track', async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio1())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthconditionaccept())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectloyalty())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectloyatygold())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.flightclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selecttravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet'))
    await testController.click(oxyadminglobalpage.oxyadminpages.suboptiontravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet Search (Google, Yahoo, Bing etc)'))
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmandsave())

    //*****************when book duplicate records enable */
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookinguser())
    await testController.click(oxyadminglobalpage.oxyadminpages.termscondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.saveandbook())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingexpand())
    await testController.click(oxyadminglobalpage.oxyadminpages.expandmissinfinfo())
    
    console.log('I am able to book using fast track')
 });
 Then('Adding notes to existing booking', async function () {
    await testController.typeText(oxyadminglobalpage.oxyadminpages.bookingsearchedit(),bookingnumber)
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingsearchicon())
    await testController.click(oxyadminglobalpage.oxyadminpages.clickflight())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingexpand())
    await testController.click(oxyadminglobalpage.oxyadminpages.expandmissinfinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.addnotebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.addnotebuttonodeyss())
    await testController.click(oxyadminglobalpage.oxyadminpages.savechanges())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmnoteschanges())
    
    console.log('Adding notes to existing booking')
 });
 Then('Adding option to booking', async function () {
    await testController.typeText(oxyadminglobalpage.oxyadminpages.bookingsearchedit(),bookingnumber)
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingsearchicon())
    await testController.click(oxyadminglobalpage.oxyadminpages.optionbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.optiononeclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.optiontwoclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.optionsave())
    await testController.click(oxyadminglobalpage.oxyadminpages.showallinvoicedetails())
    await testController.click(oxyadminglobalpage.oxyadminpages.showingall())
    await testController.click(oxyadminglobalpage.oxyadminpages.optionbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.canceloptionbutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.removelineitem())
    await testController.click(oxyadminglobalpage.oxyadminpages.closelineitem())
    await testController.click(oxyadminglobalpage.oxyadminpages.modifylineitem())
    await testController.click(oxyadminglobalpage.oxyadminpages.closelineitem())
    await testController.click(oxyadminglobalpage.oxyadminpages.spanmisc())
    await testController.click(oxyadminglobalpage.oxyadminpages.closelineitem())
    await testController.click(oxyadminglobalpage.oxyadminpages.discardchanges())
    await testController.click(oxyadminglobalpage.oxyadminpages.discardchangesyes())
    await testController.click(oxyadminglobalpage.oxyadminpages.showallinvoicedetails())
    await testController.click(oxyadminglobalpage.oxyadminpages.showingall())
   
    console.log('Aadding option to booking')
 });

 Then('I am able to view booking in odeyss', async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthconditionaccept())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectloyalty())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectloyatygold())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.flightclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selecttravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet'))
    await testController.click(oxyadminglobalpage.oxyadminpages.suboptiontravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet Search (Google, Yahoo, Bing etc)'))
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmandsave())

    /////********enable when we book multple trip with same name*******/
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookinguser())
    await testController.click(oxyadminglobalpage.oxyadminpages.termscondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.saveandbook())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookingpage())
    await testController.click(oxyadminglobalpage.oxyadminpages.customerconfirmodyssey())
    console.log('I am able to view booning in odeyss')
 });
 Then('I add all the customer deatils' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.Datepicker())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectall())
    await testController.click(oxyadminglobalpage.oxyadminpages.applayall())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
    await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())
    await testController.click(oxyadminglobalpage.oxyadminpages.Selectpertculartrip())
    await testController.click(oxyadminglobalpage.oxyadminpages.Clickonbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.continuebooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.fastbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.skipnormalbooking())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
    await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller1())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname1)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname1)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
    await testController.pressKey('ctrl+a delete')
    await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob1)
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
    console.log('I add all the customer deatils')
    
 });
 Then('I am able to add loyalty and health condition' , async function () {
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthradio1())
    await testController.click(oxyadminglobalpage.oxyadminpages.healthconditionaccept())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectloyalty())
    await testController.click(oxyadminglobalpage.oxyadminpages.selectloyatygold())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    console.log('I am able to add loyalty and health condition')
 });
   
 Then('I am able to add flight while booking' , async function () { 
    await testController.click(oxyadminglobalpage.oxyadminpages.flightclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.addalltraveller())
    await testController.click(oxyadminglobalpage.oxyadminpages.addflightbooknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.searchflighttab())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.addflyingcity(),flyingcity)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectflyingcity())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.flyingfrom(),flyingdateoutbound)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectfightclassoutbound())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Economy'))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.flyingdep(),flyingdepdateinbound)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectfightclassinbound())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Economy'))
    await testController.click(oxyadminglobalpage.oxyadminpages.searchflightbtn())
    //await testController.click(oxyadminglobalpage.oxyadminpages.selectflight())
    //await testController.click(oxyadminglobalpage.oxyadminpages.cancelflightbooking())

    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.cancelflightbutton1())

    /******* enable below line of code when flight booking is up and running test env**********/
    /*
    await testController.click(oxyadminglobalpage.oxyadminpages.selectpassportdetailscheckbox())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookfare())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmandfinish())*/

   });  
 Then('I am able to continue flight booking' , async function () {  
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.selecttravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet'))
    await testController.click(oxyadminglobalpage.oxyadminpages.suboptiontravellerknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet Search (Google, Yahoo, Bing etc)'))
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmandsave())

    /////********enable line 960 when we book multple trip with same name*******/
    //await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookinguser())
    await testController.click(oxyadminglobalpage.oxyadminpages.termscondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmcondition())
    await testController.click(oxyadminglobalpage.oxyadminpages.saveandbook())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookingexpand())
    await testController.click(oxyadminglobalpage.oxyadminpages.expandmissinfinfo())
    console.log('I am able to continue flight booking')
 });
 
 Then('I am able to add  flight request post booking flight request' , async function () {
      ///**************Flight Request********/
    
    
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequest())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.flightrequestflyingfrom(),flightrequestflyingfrom)
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestflyingfromselect())
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestclass())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(flightrequestclass))
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestairline())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(flightrequestairline))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.flightrequestcity(),flightrequestcity)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.specialrequest(),specialrequest)
    await testController.click(oxyadminglobalpage.oxyadminpages.saveflightrequest())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.savechanges())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmnoteschanges())

  });

 Then('I am able to add  flight request post booking own flight request' , async function () {
 
    await testController.click(oxyadminglobalpage.oxyadminpages.ownflightbutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.ownflightairline())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(ownflightairline))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightnumber(),ownflightnumber)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightflyingfrom(),ownflightflyingfrom)
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestflyingfromselect())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightflyingto(),ownflightflyingto)
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestflyingfromselect())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightdeparturedate(),ownflightdeparturedate)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightdepthour(),ownflightdepthour)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightdeptime(),ownflightdeptime)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightarrivaldate(),ownflightarrivaldate)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightarrivalhour(),ownflightarrivalhour)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightarrivaltime(),ownflightarrivaltime)
    await testController.click(oxyadminglobalpage.oxyadminpages.ownflightclasstravel())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(ownflightclasstravel))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.ownflightairlinelocator(),ownflightairlinelocator)
    await testController.click(oxyadminglobalpage.oxyadminpages.saveflightrequest())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.savechanges())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmnoteschanges())
 });
 Then('I am able to add supplier flight request post booking' , async function () { 

    await testController.click(oxyadminglobalpage.oxyadminpages.supplierflightbtn())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplier(),supplier)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectqantas())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.cost(),cost)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.price(),price)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.commission(),commission)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.noncomminssion(),noncomminssion)
    await testController.click(oxyadminglobalpage.oxyadminpages.supplierairline())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(supplierairline))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierflightno(),supplierflightno)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierflyingfrom(),supplierflyingfrom)
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestflyingfromselect())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierflyingto(),supplierflyingto)
    await testController.click(oxyadminglobalpage.oxyadminpages.flightrequestflyingfromselect())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierdepdate(),supplierdepdate)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierdephour(),supplierdephour)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierdepmin(),supplierdepmin)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierarrivaldate(),supplierarrivaldate)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierarrivalhour(),supplierarrivalhour)
    await testController.typeText(oxyadminglobalpage.oxyadminpages.suppliermin(),suppliermin)
    await testController.click(oxyadminglobalpage.oxyadminpages.supplierclassoftravel())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(supplierclassoftravel))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.supplierairlinerecorder(),supplierairlinerecorder)
    await testController.click(oxyadminglobalpage.oxyadminpages.saveflightrequest())
    await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.savechanges())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmnoteschanges())
    
    console.log('I am able to add flight request post booking')
 });

 Then('I am able to add flight post booking' , async function () { 
    await testController.click(oxyadminglobalpage.oxyadminpages.flightbutton())
    await testController.click(oxyadminglobalpage.oxyadminpages.flightclick())
    await testController.click(oxyadminglobalpage.oxyadminpages.addalltraveller())
    await testController.click(oxyadminglobalpage.oxyadminpages.addflightbooknow())
    await testController.click(oxyadminglobalpage.oxyadminpages.searchflighttab())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.addflyingcity(),flyingcity)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectflyingcity())
    await testController.typeText(oxyadminglobalpage.oxyadminpages.flyingfrom(),flyingdateoutbound)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectfightclassoutbound())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Economy'))
    await testController.typeText(oxyadminglobalpage.oxyadminpages.flyingdep(),flyingdepdateinbound)
    await testController.click(oxyadminglobalpage.oxyadminpages.selectfightclassinbound())
    await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Economy'))
    await testController.click(oxyadminglobalpage.oxyadminpages.searchflightbtn())
    //await testController.click(oxyadminglobalpage.oxyadminpages.selectflight())
    //await testController.click(oxyadminglobalpage.oxyadminpages.cancelflightbooking())
    await testController.wait(10000)
    await testController.click(oxyadminglobalpage.oxyadminpages.cancelflightbutton1())

    /******* enable below line of code when flight booking is up and running test env**********/
    /*
    await testController.click(oxyadminglobalpage.oxyadminpages.selectpassportdetailscheckbox())
    await testController.click(oxyadminglobalpage.oxyadminpages.bookfare())
    await testController.click(oxyadminglobalpage.oxyadminpages.confirmandfinish())*/

  });
  Then('I enter trip code for captain choice and fill all the details and book-IPAD' , async function () {
 
   await testController.typeText(oxyadminglobalpage.oxyadminpages.Searchtrip(),cctripcode)
   await testController.click(oxyadminglobalpage.oxyadminpages.Selecttrip())
   await testController.click(oxyadminglobalpage.oxyadminpages.Datepicker())
   await testController.click(oxyadminglobalpage.oxyadminpages.selectall())
   await testController.click(oxyadminglobalpage.oxyadminpages.applayall())
   await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
   await testController.click(oxyadminglobalpage.oxyadminpages.travellersincrement())
   await testController.click(oxyadminglobalpage.oxyadminpages.roomincrement())
   await testController.click(oxyadminglobalpage.oxyadminpages.Searchtripdates())
   await testController.click(oxyadminglobalpage.oxyadminpages.Clickonbooking())
   await testController.click(oxyadminglobalpage.oxyadminpages.continuebooking())
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.pretourtransfer())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.pretourtransfer())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.pretourtransfer())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.documentselect())
   await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
   await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
   await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname)
   await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname)
   await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
   await testController.pressKey('ctrl+a delete')
   await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob)
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
   await testController.click(oxyadminglobalpage.oxyadminpages.addtraveller1())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentialinfo())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessetialtitle())
   await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText(essentialdetailtitle))
   await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfofirstname(),essentialdetailfirstname1)
   await testController.typeText(oxyadminglobalpage.oxyadminpages.confirmessentialinfolastname(),essentialdetailslastname1)
   await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialinvaliddob)
   await testController.pressKey('ctrl+a delete')
   await testController.typeText(oxyadminglobalpage.oxyadminpages.essentialdobfield(),essentialvaliddob1)
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmessentitalnext())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmtraveler())
   await testController.click(oxyadminglobalpage.oxyadminpages.healthradio())
   await testController.click(oxyadminglobalpage.oxyadminpages.healthradio1())
   await testController.click(oxyadminglobalpage.oxyadminpages.healthconditionaccept())
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.flightclick())
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.selecttravellerknow())
   await testController.click(oxyadminglobalpage.oxyadminpages.commondropdown().withText('Internet'))
   await testController.click(oxyadminglobalpage.oxyadminpages.suboptiontravellerknow())
   await testController.pressKey('down+enter')
   await testController.click(oxyadminglobalpage.oxyadminpages.Nextpagebutton())
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmandsave())
   
   /////********enable when we book multple trip with same name*******/
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmbookinguser())
   await testController.click(oxyadminglobalpage.oxyadminpages.termscondition())
   
   await testController.click(oxyadminglobalpage.oxyadminpages.confirmcondition())
   await testController.click(oxyadminglobalpage.oxyadminpages.saveandbook())
   await testController.click(oxyadminglobalpage.oxyadminpages.expandbooking())
   await testController.wait(10000)
   await testController.click(oxyadminglobalpage.oxyadminpages.bookingexpand())
   await testController.click(oxyadminglobalpage.oxyadminpages.expandmissinfinfo())
   console.log('I enter trip code for captain choice and fill all the details and book')
 });


});
   