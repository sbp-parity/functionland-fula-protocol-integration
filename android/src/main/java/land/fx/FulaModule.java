package land.fx.fula;

import android.net.Uri;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableNativeArray;


import java.io.File;
import java.util.Map;
import java.util.HashMap;
import java.util.Base64;

import mobile.Fula;
import mobile.Mobile;

@ReactModule(name = FulaModule.NAME)
public class FulaModule extends ReactContextBaseJavaModule {
    public static final String NAME = "FulaModule";
    Fula fula;
    String appDirs;

    public FulaModule(ReactApplicationContext reactContext) throws Exception{
        super(reactContext);
        appDirs = reactContext.getFilesDir().toString();
        fula = Mobile.newFula(appDirs);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void send(String path, Promise promise) {
        try{
            String cid = fula.send(path);
            promise.resolve(cid);
        }
        catch(Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void connect(String boxId, Promise promise) {
        Log.d("fulaModule", appDirs);
        try{
            fula.connect(boxId);
            promise.resolve(true);
        }
        catch(Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void receive(String fileId, Promise promise) {
        try{
            String filePath = fula.receive(fileId);
            String uriPath = Uri.fromFile(new File(filePath)).toString();
            promise.resolve(uriPath);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void graphQL(String query, String variableValues, Promise promise) {
        try{
            byte[] res = fula.graphQL(query, variableValues);
            WritableNativeArray arr = new WritableNativeArray();
            for(byte b : res){
                arr.pushInt(b);
            }
            promise.resolve(arr);
        }catch (Exception e){
            promise.reject(e);
        }
    }


}
