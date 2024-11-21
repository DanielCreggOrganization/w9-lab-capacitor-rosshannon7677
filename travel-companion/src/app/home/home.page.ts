import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';

interface Location {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  styles: [`
    .image-container {
      text-align: center;
      margin-top: 10px;
    }

    .image-container img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    ion-card-title {
      font-size: 1.2rem;
      font-weight: bold;
    }
  `]
})
export class HomePage {
  photo: string | undefined;
  location: Location | undefined;
  deviceInfo: Record<string, any> | undefined;
  isLoading = {
    camera: false,
    location: false,
    deviceInfo: false
  };

  constructor(
    private cameraService: CameraService,
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService
  ) {}

  async captureImage() {
    this.isLoading.camera = true;
    try {
      this.photo = await this.cameraService.takePicture();
    } finally {
      this.isLoading.camera = false;
    }
  }

  async getLocation() {
    this.isLoading.location = true;
    try {
      this.location = await this.locationService.getCurrentPosition();
    } finally {
      this.isLoading.location = false;
    }
  }

  async getDeviceInfo() {
    this.isLoading.deviceInfo = true;
    try {
      this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    } finally {
      this.isLoading.deviceInfo = false;
    }
  }
}
