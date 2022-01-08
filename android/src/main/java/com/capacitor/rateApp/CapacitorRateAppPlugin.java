package com.capacitor.rateApp;

import android.content.Context;
import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.Logger;

@NativePlugin
public class CapacitorRateAppPlugin extends Plugin {

    private static final String TAG = "MapslyRateApp";
    private CapacitorRateApp implementation = new CapacitorRateApp();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        Logger.info("android echo: " + value);

        call.resolve();
    }

    @PluginMethod
    public void requestReview(PluginCall call) {
//        final AppCompatActivity activity = getActivity();
//        implementation.requestReview(call, activity);

        String value = call.getString("value");

        Logger.info("android requestReview: " + value);

        call.resolve();
    }
}
