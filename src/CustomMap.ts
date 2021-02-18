import 'googlemaps';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerInfo(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map; // only reference from inside only

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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerInfo(),
      });

      infoWindow.open(this.googleMap, marker);
      this.googleMap.setZoom(3);
    });
  }
}
