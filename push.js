var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/d3e_TPmZYQE:APA91bESrtdH6nAE_Ucjpto4SCghXHq9SxqwEVuJRq4hEDnL8Bz-gs_h87GUai87MQRC8M1kXpqLHw5QGs_Pcc00OkfckVp1zyOIbRuyh1rYtPsSeJmYWFMJfWNRcxau-q-ShcwnTvjz","expirationTime":null,"keys":{"p256dh":"BN2tWQzmYmkVNTTzphcRFhhoOZR1EZIhQtLhxxmE_aZ0vk-6_WI8lwe4takJ4YnKdawMYsqQyOAyIXcM4Zhmh_k","auth":"3fmz4OxXpcazV-Yr1SLaAg"}}
const notificationPayload = JSON.stringify({
    "notification": {
        "title": "Angular News",
        "body": "Newsletter Available!",
        "icon": "assets/main-page-logo-small-hat.png",
        "vibrate": [100, 50, 100],
        "data": {
            "dateOfArrival": Date.now(),
            "primaryKey": 1
        },
        "actions": [{
            "action": "explore",
            "title": "Go to the site"
        }]
    }
});
const options = {
      TTL: 20
    };
push.sendNotification(sub ,notificationPayload,options)