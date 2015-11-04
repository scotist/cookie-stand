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

//   this.calHrTl();
//   var tbl = document.createElement('table'); //move
//   var trElement = document.createElement('tr');
//     for (var i = 0; i < this.hourlyTls.length; i++){
//        var thElement = document.createElement('th');
//       thElement.textContent = hoursOfOperation[i];
//       trElement.appendChild(thElement);

// }
//       tbl.appendChild(trElement);
//   var trElement = document.createElement('tr');
//   var tdElement = document.createElement('td');
//       tdElement.textContent = this.storeName;
//       trElement.appendChild(tdElement);
//       tbl.appendChild(trElement);

//       for (var i = 1; i < 9; i++) {
//         var tdElement = document.createElement('td');
//         tdElement.textContent = this.hourlyTls[i];
//         trElement.appendChild(tdElement);
//       }

  // var trElement = document.createElement('tr');
  // var tdElement = document.createElement('td');
  //     tdElement.textContent = this.dailyTls;
  //     trElement.appendChild(tdElement);
  //     tbl.appendChild(trElement);

  // document.body.appendChild(tbl);

  // }

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

pikePlace.display();
seaTac.display();
southCenter.display();
bellevue.display();
alki.display();

// function displayAllLocations(){
//   for (var i = 0; i < location.length; i++) {
//     location[i].display();
// }

// }
  document.body.appendChild(tbl);

// displayAllLocations();
