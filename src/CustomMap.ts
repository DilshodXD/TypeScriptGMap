interface Mapabble {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  googleMap: google.maps.Map;
  constructor(selector: string) {
    this.googleMap = new google.maps.Map(document.getElementById(selector), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapabble: Mapabble): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapabble.location.lat,
        lng: mapabble.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapabble.markerContent(),
      });
      infoWindow.open(this.googleMap, marker)
    });
  }
}
