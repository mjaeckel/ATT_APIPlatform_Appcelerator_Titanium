/**
 * This file was auto-generated by the Titanium Module SDK helper for Android
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2010 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 */
package ti.api.att;

import java.util.List;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.KrollFunction;
import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.titanium.TiApplication;
import org.json.JSONObject;

import com.att.developer.http.AttRequest;
import com.att.developer.http.AttResponse;
import com.google.gson.Gson;


@Kroll.module(name="Attmodule", id="ti.api.att")
public class AttmoduleModule extends KrollModule
{

	// Standard Debugging variables
	private static final String LCAT = "AttmoduleModule";
	
	private static Gson gson;
	
	public AttmoduleModule()
	{
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app)
	{
		gson = new Gson();
	}
	
	private void handleError(Exception e, KrollFunction errorCallback) {
		e.printStackTrace();
		
		KrollDict kdError = new KrollDict();
		kdError.put("error", "Error while executing request");
		kdError.put("message", e.getMessage());
		errorCallback.call(getKrollObject(), kdError);
	}
	
	private static boolean subStringInList(String subString, List<String> list) {
		for(int i = 0; i < list.size(); i++) {
			if(list.get(i).contains(subString)) return true;
		}
		
		return false;
	}
	
	private void handleAttResp(AttResponse attResp, KrollFunction success, KrollFunction error) {
		KrollDict kdSuccess;
		try {
			if(subStringInList("application/json", attResp.getResponseHeaders().get(AttRequest.HeaderTitles.CONTENT_TYPE))) {
				kdSuccess = new KrollDict(attResp.getResponseJSONObject());
			} else {
				kdSuccess = new KrollDict();
				kdSuccess.put("success", attResp.getResponseString());
			}
			
			Log.d(LCAT, "success object is " + kdSuccess.toString());
		} catch(Exception e) {
			handleError(e, error);
			return;
		}
		
		success.call(getKrollObject(), kdSuccess);
	}
	
	private void sendParams(Object rawParams, KrollFunction successCallback, KrollFunction errorCallback) {
		AttResponse attResp;
		try {
			JSONObject params = new JSONObject(gson.toJson(rawParams));
			
			attResp = AttRequest.send(params);
		} catch(Exception e) {
			handleError(e, errorCallback);
			return;
		}
		
		handleAttResp(attResp, successCallback, errorCallback);
	}
	
	@Kroll.method
	public void sendMMS(Object[] arguments) {
		sendParams(arguments[0], (KrollFunction) arguments[1], (KrollFunction) arguments[2]);
	}
	
	@Kroll.method
	public void speechToText(Object[] arguments) {
		sendParams(arguments[0], (KrollFunction) arguments[1], (KrollFunction) arguments[2]);
	}
	
	@Kroll.method
	public void speechToTextCustom(Object[] arguments) throws Exception {
		try {
			sendParams(arguments[0], (KrollFunction) arguments[1], (KrollFunction) arguments[2]);
		} catch(Exception e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	@Kroll.method
	public void sendWAPPush(Object[] arguments) {
		sendParams(arguments[0], (KrollFunction) arguments[1], (KrollFunction) arguments[2]);
	}
	
	@Kroll.method
	public void sendMessage(Object[] arguments) {
		sendParams(arguments[0], (KrollFunction) arguments[1], (KrollFunction) arguments[2]);
	}
}

