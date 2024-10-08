import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  readonly housesUrl = 'http://localhost:3000/locations';

  upadateUrl(data: any) {
    const replaced = data.photo.replace('${this.baseUrl}', this.baseUrl);
    return replaced;
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.housesUrl);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.housesUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstname: string, lastname: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstname}, lastName: ${lastname}, email: ${email}.`
    );
  }
}
