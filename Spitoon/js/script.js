// Email Verification
function email_verify() {
    var addressIsLegal = true;
    var email = 
document.getElementById("address").value;
    if(email.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }
    if(email.indexOf("@") < 1 || email.indexOf("@")(email.length - 5)) {
        addressIsLegal = false;
    };
    if (addressIsLegal === false){
        alert("Please enter a valid email address");
        return false;
    }
    }

    // Radio Verification
function radio_verify() {
    var radios = document.getElementsByName("gender");
    for(var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Please choose a gender option");
    return false;
}

// Google Maps
function initMap(){
    //Map options
    var options = {
      zoom:8,
      center:{lat:35.2271,lng:-80.8431}
    }
    // New map
    var map = new
    google.maps.Map(document.getElementById('map'), options);

    // // Listen for click on map
    // google.maps.event.addListener(map, 'click', function(event){
    //   addMarker({coords:event.latLng});
    // });

    // Array of markers
    var markers = [{coords:{lat:35.2059,lng:-80.8516},
      // iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Dilworth NC</h1>'
    },
        {
          coords:{lat:35.1849,lng:-80.7907},
          content:'<h1>Cotswold NC</h1>'
        },

        {
          coords:{lat:35.1585,lng:-80.8378},
          content:'<h1>Barclay Downs NC</h1>'
        }
      ];

    //Loop through markers
    for(var i = 0;i<markers.length;i++){
      // Add marker
      addMarker(markers[i]);
    }

    // Add Marker function
      function addMarker(props){
        var marker = new
          google.maps.Marker({
          position:props.coords,
          map:map,
          // icon:props.iconImage
        });

        // Check for custom icon
        if(props.iconImage){
          //Set icon iconImage
          marker.setIcon(props.iconImage);
        }

        //Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
              content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
  }

// About Me Button
var pageCounter = 1;
var memberContainer = document.getElementById('member-info');
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true' + pageCounter + '.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            alert("We connected to the server, but it returned an error.");
        }
        
    };

    ourRequest.onerror = function() {
        alert("Connection Error");
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for(ii=0;ii < data.length; ii++) {
        htmlString += "<p>" + data[ii].fname + ' ' + data[ii].lname;
        

        htmlString += ' the brave.</p>';

        // htmlString += '.</p>';
    }

    memberContainer.insertAdjacentHTML('beforeend', htmlString);
}
