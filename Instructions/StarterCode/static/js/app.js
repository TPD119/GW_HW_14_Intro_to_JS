// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");
var table = d3.select("#ufo-table");
var tbody = table.select("tbody");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.text("");

    //d3.select("#ufo-table").select("tbody").text = "";
    //table.text("");
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //inputValue.node().value ="";
    
    var filteredData = tableData.filter(event => event.datetime === inputValue);
    //filteredData.text("");
    console.log(filteredData);


    //
    filteredData.forEach(function(eventReport) {
        // Step 1: Loop Through `data` and console.log each weather report object
        console.log(eventReport);
        
        // Step 2:  Use d3 to append one table row `tr` for each weather report object
        // Don't worry about adding cells or text yet, just try appending the `tr` elements.
        var row = tbody.append("tr");
       
        // Step 3:  Use `Object.entries` to console.log each weather report value
        Object.entries(eventReport).forEach(function([key, value]) {
          console.log(key, value);
      
          // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
          // Append a cell to the row for each value 
          // in the weather report object
          var cell = tbody.append("td");
         
          // Step 5: Use d3 to update each cell's text with
          // weather report values (weekday, date, high, low) 
          cell.text(value);
        });
    });
});