$(document).ready(() => {;

  setCity = (lat,long) => {
    $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyCfl8r72Mtkm-4ZX27CKFWxVMD79n6ZW8M')
    .then(data => {
      $('#h-input').val(data.results[3].formatted_address);
    })
    .catch(e => {
      alert(e);
    });
  };

  const successCallback = position => {
    const x = position.coords.latitude;
    const y = position.coords.longitude;
    setCity(x, y);
  };

  const errorCallback = error => {
    const errorMessage = 'Unknown error';
    switch (error.code) {
      case 1:
        errorMessage = 'Permission denied';
        break;
      case 2:
        errorMessage = 'Position unavailable';
        break;
      case 3:
        errorMessage = 'Timeout';
        break;
    }
    console.log(errorMessage);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
});
