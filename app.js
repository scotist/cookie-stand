
var hoursOfOperation = ["Locations", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "Total"];
var locations = [pikePlace];

var pikePlace = {
  storeName: "Pike Place",
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

display: function() {
  this.calHrTl();
  var tbl = document.createElement('table');
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

pikePlace.display();
console.log(pikePlace.hourlyTls);
console.log(pikePlace.dailyTls);


