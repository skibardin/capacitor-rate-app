import { WebPlugin } from '@capacitor/core';
import { MapslyAppRatePlugin } from './definitions';

export class MapslyAppRateWeb extends WebPlugin implements MapslyAppRatePlugin {
  constructor() {
    super({
      name: 'MapslyAppRate',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO in WEB', options);
    return options;
  }

  async requestReview(options: { value: string }): Promise<{ value: string }> {
    console.log('requestReview in WEB', options);
    return options;
  }
}

const MapslyAppRate = new MapslyAppRateWeb();

export { MapslyAppRate };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MapslyAppRate);
