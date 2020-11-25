import 'googlemaps';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divElm: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divElm), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      mapTypeId: 'terrain',
    });
  }

  addMarker(mappable: Mappable): void {
    // console.log(this.googleMap);
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
