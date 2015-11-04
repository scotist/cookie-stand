var hoursOfOperation = ["Locations", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "Total"];

function CookieStand(storeName, minCustHr, maxCustHr, avePerCust) {
  this.storeName = storeName;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avePerCust = avePerCust;
  this.hourlyTls = [];
  this.dailyTls = 0;

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
  // ** alternative (non-working) code for table **
//   var hourTr = document.createElement('tr');
//   hourTable.appendChild(hourTr);
//   var hourTd = document.createElement('td');
//   hourTd.innerHTML = this.name; // do I need this?
//   hourTr.appendChild(hourTd);

//   for (var i = 0; i < hoursOfOperation.length; i++){
//     var hourTd = document.createElement('td');
//     hourTd.innerHTML = this.hourlyTls[i];
//     hourTr.appendChild(hourTd);
//   }

//   var hourTd = document.createElement('td');
//   hourTd.innerHTML = this.dailyTls;
//   hourTr.appendChild(hourTd);
// };
  this.calHrTl();
  var tbl = document.createElement('table'); //move
  var trElement = document.createElement('tr');
    for (var i = 0; i < this.hourlyTls.length; i++){
       var thElement = document.createElement('th');
      thElement.textContent = hoursOfOperation[i];
      trElement.appendChild(thElement);

}
      tbl.appendChild(trElement);
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
      tdElement.textContent = this.storeName;
      trElement.appendChild(tdElement);
      tbl.appendChild(trElement);

      for (var i = 1; i < 9; i++) {
        var tdElement = document.createElement('td');
        tdElement.textContent = this.hourlyTls[i];
        trElement.appendChild(tdElement);
      }

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
      tdElement.textContent = this.dailyTls;
      trElement.appendChild(tdElement);
      tbl.appendChild(trElement);

  document.body.appendChild(tbl);

  }

}


var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand("Bellevue Square", 20, 48, 3.3);
var alki = new CookieStand("Alki", 3, 24, 2.6);

// *** additional alternative (non-working) code to put nonrepeating
// table elements outside constructor ***
// var location = [pikePlace, seaTac, southCenter, bellevue, alki];

// var hourTable = document.createElement('table');
// document.body.appendChild(hourTable);
// var hourTr = document.createElement('tr');
// hourTable.appendChild(hourTr);
// var hourTh = document.createElement('th');
// hourTr.appendChild(hourTh);

// for (var i = 0; i < hoursOfOperation.length; i++) {
//   var hourTh = document.createElement('th');
//   hourTh.innerHTML = hoursOfOperation[i];
//   hourTr.appendChild(hourTh);
// }

// var hourTh = document.createElement('th');
// hourTh.innerHTML = 'Total';
// hourTr.appendChild(hourTh);

pikePlace.display();
seaTac.display();
southCenter.display();
bellevue.display();
alki.display();
