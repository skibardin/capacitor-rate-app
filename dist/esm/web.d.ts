import { WebPlugin } from '@capacitor/core';
import { MapslyAppRatePlugin } from './definitions';
export declare class MapslyAppRateWeb extends WebPlugin implements MapslyAppRatePlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    requestReview(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const MapslyAppRate: MapslyAppRateWeb;
export { MapslyAppRate };
