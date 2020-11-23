import 'googlemaps';

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

  // addCompanyMarker(){

  // }

  // addUserMarker() {

  // }
}
