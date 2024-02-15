import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.osmeal.app',
  appName: 'OSMeal',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
