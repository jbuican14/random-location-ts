import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  companyImage: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.companyImage = faker.image.business();
  }

  markerInfo(): string {
    return `
    <div>
    <p>I work at <strong> ${this.companyName}</strong></p>
    <p>Catchphrase : <strong>${this.catchPhrase}</strong> </p>
    <img class="Company-img" src=${this.companyImage} alt=${this.companyName} />
    </div>`;
  }
}
