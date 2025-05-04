package com.newapp

import android.os.Bundle
import org.devio.rn.splashscreen.SplashScreen

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreenReactPackage
import com.cboy.rn.splashscreen.SplashScreenReactPackage;


class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this) // показываем Splash
    super.onCreate(savedInstanceState)
  }

  override fun getMainComponentName(): String = "NewApp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}

