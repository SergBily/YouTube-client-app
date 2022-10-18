import { InjectionToken } from '@angular/core';

export interface AppConfig {
  readonly baseUrl: string;

  readonly apiKey: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('appConfig');

export const DEFAULT_CONFIG: AppConfig = {
  baseUrl: 'https://www.googleapis.com/youtube/v3',

  apiKey: 'AIzaSyC3Oyn2ezcLsIu2wTWe3pt2KtST0dJdGO0',
};
