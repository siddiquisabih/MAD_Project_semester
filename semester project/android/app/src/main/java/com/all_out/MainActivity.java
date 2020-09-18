package com.all_out;

import com.facebook.react.ReactActivity;
import android.content.Context;
import android.app.NotificationManager;

public class MainActivity extends ReactActivity {
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "All_Out";
  }
  public void onResume() {
    super.onResume();
     getSystemService(Context.NOTIFICATION_SERVICE);
     NotificationManager nMgr = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

    nMgr.cancelAll();
}
}
