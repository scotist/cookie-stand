var hoursOfOperation = [ "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var locations = [];

function CookieStand(storeName, minCustHr, maxCustHr, avePerCust) {
  this.storeName = storeName;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avePerCust = avePerCust;
  this.hourlyTls = [];
  this.dailyTls = 0;
  locations.push(this);

this.calRanCust = function () {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
};

this.calHrTl = function() {
for (var i = 0; i < hoursOfOperation.length; i++){
      var hourly = this.calRanCust() * this.avePerCust;
      this.hourlyTls.push(Math.ceil(hourly));
      this.dailyTls += this.hourlyTls[i];
      console.log('Total cookies at ' + hoursOfOperation[i] + ': ' + this.dailyTls);
    };
};

this.display = function () {

this.calHrTl();

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.storeName;
    row.appendChild(location);

    for(var i = 0; i < hoursOfOperation.length; i++){
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlyTls[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
      var totalCookies = document.createElement('td');
      totalCookies.textContent = this.dailyTls;
      row.appendChild(totalCookies);
      tbl.appendChild(row);
  }


}


var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand("Bellevue Square", 20, 48, 3.3);
var alki = new CookieStand("Alki", 3, 24, 2.6);

var tbl = document.createElement('table');
var headerRow = document.createElement('thead');

var emptyCell = document.createElement('td');
  headerRow.appendChild(emptyCell);

  for (var i = 0; i < hoursOfOperation.length; i++) {
  var td = document.createElement('td');
  td.innerHTML = hoursOfOperation[i];
  headerRow.appendChild(td);
};

var dailyTotal = document.createElement('th');
  dailyTotal.textContent = "Total";
  headerRow.appendChild(dailyTotal);
  tbl.appendChild(headerRow);



// pikePlace.display();
// seaTac.display();
// southCenter.display();
// bellevue.display();
// alki.display();


// // harvest field data via event.target.minCust.value, put that into the constructor:

function displayAllLocations(){
  for (var i = 0; i < locations.length; i++) {
    locations[i].display();
  }

}
displayAllLocations();

  document.body.appendChild(tbl);

// ++++++++++++++



var newStandForm = document.getElementById("new-cookie-stand");
console.log(newStandForm);


var handleNewStand = function(event) {
  console.log(handleNewStand);
  event.preventDefault();

  if(!event.target.standname.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value){
      return alert("You must fill in all the fields!");
}


var standName = event.target.standname.value;
var min = event.target.min.value;
var max = event.target.max.value;
var avg = Number(event.target.avg.value);

var newStand = new CookieStand(standName, min, max, avg);

event.target.standname.value = null;
event.target.min.value = null;
event.target.max.value = null;
event.target.avg.value = null;

locations.push(newStand);

newStand.display();


};


newStandForm.addEventListener('submit', handleNewStand);
