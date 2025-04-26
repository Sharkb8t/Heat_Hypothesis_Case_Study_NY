
// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

// Initialize all the LayerGroups
let layers = {
  Mar142017 : new L.LayerGroup(),
  Apr192020 : new L.LayerGroup(),
  Feb022021 : new L.LayerGroup(),
  Feb092022 : new L.LayerGroup(),
  May052022 : new L.LayerGroup(),
  Jun302022 : new L.LayerGroup(),
};

// Create the map with our layers.
let map = L.map("map", {
  center: [40.75, -73.98726202397067],
  zoom: 14
});

// Add "street" tile layer to the map.
street.addTo(map);


// Create an overlays object to add to the layer control.
let overlays = {
  "2017-03-14" : layers.Mar142017,
  "2020-04-19" : layers.Apr192020,
  "2021-02-02" : layers.Feb022021,
  "2022-02-09" : layers.Feb092022,
  "2022-05-05" : layers.May052022,
  "2022-06-30" : layers.Jun302022
};

// Create a control for layers, and add overlays to it.
L.control.layers(null, overlays).addTo(map);


// Define dateName variable to hold a string based on date string, which
// will then add the marker to the appropriate layer
let dateName;

let crimeCount = {
  first : 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
  sixth: 0  
}

for (let i = 0; i < crimes.length; i++) {
  if (crimes[i].date_string == '2017-03-14') {
    dateName = 'Mar142017'
    crimeCount.first += 1
  }
  else if (crimes[i].date_string == '2020-04-19') {
    dateName = 'Apr192020'
    crimeCount.second += 1
  }
  else if (crimes[i].date_string == '2021-02-02') {
    dateName = 'Feb022021'
    crimeCount.third += 1
  }
  else if (crimes[i].date_string == '2022-02-09') {
    dateName = 'Feb092022'
    crimeCount.fourth += 1
  }
  else if (crimes[i].date_string == '2022-05-31') {
    dateName = 'May052022'
    crimeCount.fifth += 1
  }
  else if (crimes[i].date_string == '2022-06-30') {
    dateName = 'Jun302022'
    crimeCount.sixth += 1
  }

  // Create a new marker for each crime
  let newMarker = L.marker([crimes[i].Latitude, crimes[i].Longitude])

  // Add marker to appropriate layer based on dateName
  newMarker.addTo(layers[dateName]);

  // Bind crime data to popup message
  newMarker.bindPopup("<b>Complaint_No: </b>"+ crimes[i].Complaint_No + "<br><b> Date: </b>" + crimes[i].date_string + "<br> <b>Offense: </b>" + crimes[i].Ofns_Desc + "<br><b> Category: </b>" + crimes[i].Law_Cat)
};

// same logic for weather data
let dateName2;

for (let i = 0; i < weather.length; i++) {
  if (weather[i].date_string == '2017-03-14') {
    dateName2 = 'Mar142017'
  }
  else if (weather[i].date_string == '2020-04-19') {
    dateName2 = 'Apr192020'
  }
  else if (weather[i].date_string == '2021-02-02') {
    dateName2 = 'Feb022021'
  }
  else if (weather[i].date_string == '2022-02-09') {
    dateName2 = 'Feb092022'
  }
  else if (weather[i].date_string == '2022-05-31') {
    dateName2 = 'May052022'
  }
  else if (weather[i].date_string == '2022-06-30') {
    dateName2 = 'Jun302022'
  }

  // Use circleWithText2 fucntion defined on line 116
  let newCircle = circleWithText2([weather[i].Latitude, weather[i].Longitude],
    weather[i]["Max Temp"], 50, 3, circleClass(weather[i]["Max Temp"]))



  newCircle.addTo(layers[dateName2]);

  newCircle.bindPopup("<b>Location: </b>" + weather[i].Location + 
    "<br><b>Min Temp: </b>" + weather[i]["Min Temp"] +
    "<br><b>Max Temp: </b>" + weather[i]["Max Temp"] +
    "<br><b>Mean Temp: </b>" + weather[i]["Mean Temp"]
  )
};

// Below function was written by user TomazicM on StackExchange. Source URL: https://gis.stackexchange.com/questions/401380/pop-up-on-circle-markers-not-working-with-polygons-in-leaflet-when-using-cluster
function circleWithText2(latLng, txt, radius, borderWidth, circleClass) {
  var size = radius * 2;
  var style = 'style="width: ' + size + 'px; height: ' + size + 'px; border-width: ' + borderWidth + 'px;"';
  var iconSize = size + (borderWidth * 2);
  var icon = L.divIcon({
    html: '<span class="' + 'circle ' + circleClass + '" ' + style + '>' + '<b>Max Temp:</b>' + '<br>' + txt + '</span>',
    className: '',
    iconSize: [iconSize, iconSize]
  });
  var marker = L.marker(latLng, {
    icon: icon
  });
  return(marker);
}

// Define function to determine formatting for Circle class based on Max Temperature
function circleClass(temperature) {
  let circleClassName;
  if (temperature < 40) {
    circleClassName = 'circle1'
  }
  else if (temperature >= 40 & temperature < 50) {
    circleClassName = 'circle2'
  }
  else if (temperature >= 50 & temperature < 80) {
    circleClassName = 'circle3'
  }
  else if (temperature > 80) {
    circleClassName = 'circle4'
  }

  return circleClassName
}

// define Legend
let legend = L.control({
  position: 'bottomright'
});

// update Legend using .on everytime a Layer is changed
map.on('overlayadd', function(eventLayer) {
  // define legendInfo to store text for div.InnerHTML
  let legendInfo;
  // Conditional based on selection
  if (eventLayer.name == "2017-03-14") {
      legendInfo = "<center><h3>2017-03-14 </h3>" + "<b>Number of Reported<br> Violent Crime Incidents: </b> <br> <br>"  + crimeCount.first 
    }
    else if (eventLayer.name == "2020-04-19") {
      legendInfo = "<center><h3>2020-04-19 </h3>" + "<b>Number of Reported<br> Violent Crime Incidents: </b> <br> <br>"  + crimeCount.second 
    }
    else if (eventLayer.name == "2021-02-02")  {
      legendInfo = "<center><h3>2021-02-02 </h3>" + "<b>Number of Reported<br> Violent Crime Incidents: </b> <br> <br>"  + crimeCount.third 
    }
    else if (eventLayer.name == "2022-02-09") {
      legendInfo = "<center><h3>2022-02-09</h3>" + "<b>Number of Reported<br> Violent Crime Incidents: </b> <br> <br>"  + crimeCount.fourth 
    }
    else if (eventLayer.name == "2022-05-05") {
      legendInfo = "<center><h3>2022-05-05</h3>" + "<b>Number of Reported<br> Violent Crime Incidents: </b> <br> <br>"  + crimeCount.fifth 
    }
    else if (eventLayer.name == "2022-06-30") {
      legendInfo = "<center><h3>2022-06-30</h3>" + "<b>Number of Reported<br> Violent Crime Incidents: </b> <br> <br>"  + crimeCount.sixth 
    }
    else {
      legendInfo = ''
    }

  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend")
    div.innerHTML += legendInfo
    return div
  }
  // add to map
  legend.addTo(map)
})
