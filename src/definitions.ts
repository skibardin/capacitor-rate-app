declare module '@capacitor/core' {
  interface PluginRegistry {
    MapslyAppRate: MapslyAppRatePlugin;
  }
}

export interface MapslyAppRatePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
