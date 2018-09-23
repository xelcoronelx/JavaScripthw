const tdata = dataSet;

// populate table
var tableBody = d3.select('#table').html("");

function makeTable(UFO) {
  var tableBody = d3.select('#table').html("")

  for (var i = 0; i < UFO.length; i++) {
    var tdata = tableBody.append("tr")
    tdata.append('td').text(UFO[i].datetime)
    tdata.append('td').text(UFO[i].city)
    tdata.append('td').text(UFO[i].state)
    tdata.append('td').text(UFO[i].country)
    tdata.append('td').text(UFO[i].shape)
    tdata.append('td').text(UFO[i].durationMinutes)
    tdata.append('td').text(UFO[i].comments)
  }
  return (tableBody)
};

makeTable(tdata)

//search button selection
var submit = d3.select("#search");
submit.on("click", function() {

  d3.event.preventDefault();

  // input section date search has to be exact.. 
  var forminput = d3.select("#form-input");
  var inputValue = forminput.property("value");
  var searchData = tdata.filter(set => set.datetime === inputValue);

  makeTable(searchData)


});