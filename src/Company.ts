import faker, { fake } from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
    <h1> Company name ${this.companyName} </h1>
    <h5> company catch phrase ${this.catchPhrase}</h5>
    `;
  }
}
