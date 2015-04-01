
    var x = document.getElementById("demo");
var position;
    function getLocation() {
        if (!Modernizr.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("using polyfill");
            geolocation.getCurrentPosition(showPosition, showError);
        }
    }

    function showPosition(position) {
        console.log([position.coords.latitude, position.coords.longitude])

        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker.bindPopup("Ubicación actual").openPopup();
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }


