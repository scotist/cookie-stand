
var hoursOfOperation = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",];
var locations = [pikePlace];

var pikePlace = {
  minCustHr: 17,
  maxCustHr: 67,
  avePerCust: 3.9,
  hourlyTls: [],
  dailyTls: 0,

  calRanCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },

  calHrTl: function() {
    for (var i = 0; i < hoursOfOperation.length; i++){
      var hourly = this.calRanCust() * this.avePerCust;
      this.hourlyTls.push(Math.ceil(hourly));
      this.dailyTls += this.hourlyTls[i];
      console.log(i);
    }

  },

  // calTotal: function() {
  //   for (var i = 0; i < this.hourlyTls.length; this.dailyTls += this.hourlyTls[i++]);
  // },

display: function() {
    for (var i = 0; i < hoursOfOperation.length; i++){
    var displayTotals = document.getElementById('pikePlaceList');
    var listItem = document.createElement('li');
    listItem.innerHTML = hoursOfOperation[i] + ": " + this.hourlyTls[i]pikePlacelist.appendChild(listItem);

    document.body.appendChild(hoursOfOperation);
    }
  }

}




// var pplist = document.getElementById("pikePlaceList");
//       var listItem = document.createElement("li");
//       listItem.innerHTML = hoursOfOperation[i] + ": " + this.hourlyTls[i];pplist.appendChild(listItem);
//       console.log(this.dailyTls);
pikePlace.calHrTl();
// pikePlace.calTotal();
pikePlace.display();
console.log(pikePlace.hourlyTls);
console.log(pikePlace.dailyTls);


// var testing = "testing";
// var el = document.getElementById('item');
// el.innerHTML = testing;
// console.log(pikePlace.dailyTls);

// var hour = document.createElement('li');
// hour.innerHTML = hoursOfOperation[i] + this.dailyTls[i];
// this.domID.appendChild(hour);

// var dailyTotal = document.createElement('li)');
// hour.innerHTML = "Total: " + this.total;
// this.domID.appendChild(dailyTls);
