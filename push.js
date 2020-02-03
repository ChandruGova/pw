var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/fMFBIWZt_SY:APA91bEv--XM4YaruBMWLOsajdhYSfi9f6cA3FLuMjn4uPc5LckodsCBUj1LKrZBsbsaXqfyakkG02_bQ_Nzv34_F-p49oX4R5_3L6-LBgSCXe4LEnBrde_ABBvxJjTnLICSQRryhA4M","expirationTime":null,"keys":{"p256dh":"BMKdhC-DMDPa64rnSK6uk6WVXtR5eMXt_3V_F7M2l1L7eyrtyc9jzC5h6pxGm6GW3DJV62QX6_6hOVcY3UzIUHw","auth":"9mbx2auSLOIegUsXxefdKQ"}}
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