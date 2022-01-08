import { WebPlugin } from '@capacitor/core';
export class MapslyAppRateWeb extends WebPlugin {
    constructor() {
        super({
            name: 'MapslyAppRate',
            platforms: ['web'],
        });
    }
    async echo(options) {
        console.log('ECHO in WEB', options);
        return options;
    }
    async requestReview(options) {
        console.log('requestReview in WEB', options);
        return options;
    }
}
const MapslyAppRate = new MapslyAppRateWeb();
export { MapslyAppRate };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MapslyAppRate);
//# sourceMappingURL=web.js.map