$(function () {
  console.log('x');
  if($('.js-map').length){
    shopMap.initMap();
  }
});

var shopMap = {
  initMap: function () {
    // console.console.log('x');
    let lat = 21.046284;
    let lng = 105.795889;

    let latlng = new google.maps.LatLng(lat, lng);
    let map = new google.maps.Map(document.getElementsByClassName('js-map')[0],{
      zoom                  : 16,
      center                : latlng,
      scrollwhell           : false,
      mapTypeControl        : false,
      streetViewControl     : false
    });

    let marker = new google.maps.Marker({
      position : latlng,
      map      : map
    });

    this.map = map;
    this.marker = marker;
    this.defaultLatLng = latlng;

    map.addListener('center_changed', function () {
      let latlng = shopMap.getMapCenterCoordinate();
      shopMap.setMarkerPostion(latlng.lat(), latlng.lng());
    } );


  },
  getMapCenterCoordinate : function () {
    return this.map.getCenter();
  },
  setMarkerPostion: function(lat,lng) {
    this.marker.setOptions({
      position: {lat: lat, lng : lng}
    })
  }
};
