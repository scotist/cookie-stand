var hoursOfOperation = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",];
var locations = [pikePlace];

var pikePlace = {
  minCustHr: 17,
  maxCustHr: 67,
  avePerCust: 3.9,
  hourlyTls: [],
  dailyTls: 0, // for loop, += from hourlyTls;

  calRanCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  calHrTl: function() {
    for (var i = 0; i < hoursOfOperation.length; i++){
      var hourly = this.calRanCust() * this.avePerCust;
      this.hourlyTls.push(Math.ceil(hourly));
      console.log(i);
    }
  },
display: function() {
    for (var i = 0; i < hoursOfOperation.length; i++){
    var displayTotals = document.createElement('h2');
    displayTotals.innerHTML = hoursOfOperation[i][0];
    document.body.appendChild(hoursOfOperation);
    }
  }
};

pikePlace.calHrTl();
pikePlace.display();
console.log(pikePlace.hourlyTls);


// console.log(pikePlace.dailyTls);


// calDaily: function() {
//     var dailyTls = 0;
//     for (var i = 0; i < hoursOfOperation.length; i++){
// //       hourlyTls.push(Math.ceil(this.calHrTl()));
// //     }

// display: function() {
//     for (var i = 0; i < hoursOfOperation.length; i++){
//     var displayTotals = document.createElement('h2');
//     displayTotals.innerHTML = hoursOfOperation[i][0];
//     document.body.appendChild(hoursOfOperation);
//     }
//   }
