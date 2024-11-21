import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  async getCurrentPosition(): Promise<{ lat: number; lng: number } | undefined> {
    const position = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = position.coords;
    return { lat: latitude, lng: longitude };
  }
}
