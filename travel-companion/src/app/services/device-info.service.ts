import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  async getDeviceInfo(): Promise<any> {
    return await Device.getInfo();
  }
}
