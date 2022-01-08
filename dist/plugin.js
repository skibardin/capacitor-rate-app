var capacitorCapacitorRateApp = (function (exports, core) {
    'use strict';

    class MapslyAppRateWeb extends core.WebPlugin {
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
    core.registerWebPlugin(MapslyAppRate);

    exports.MapslyAppRate = MapslyAppRate;
    exports.MapslyAppRateWeb = MapslyAppRateWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
