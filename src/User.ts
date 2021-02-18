import faker from 'faker';

import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  image: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.image = faker.image.imageUrl();
    // console.log(this.image);
  }

  markerInfo(): string {
    return `<h4> Hi, I'am <strong>${this.name}</strong> </h4>
            <img src=${this.image} alt=${this.name} class="User-img"/>`;
  }
}
