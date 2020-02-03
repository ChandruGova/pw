var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/d_uvycsPDvw:APA91bGEemaTbBnvRPeiPdxNJlpVsd4cqKnnREGSrPMubPc85PWbTCN8A-YT6UpF-jL_-sfzqJeKzf14xcxOZQ3GiR5wrmk_G-95HEHY19ue0_nH8X8ulUiLCzaLv1G2dZluLQ5VvWHG","expirationTime":null,"keys":{"p256dh":"BFiCIcECvbtdlDyghArM1gp0ttVz4LkRfwJCcMuo2OJMEdlTOvh1lRhAp1DNpCb-zC7t0dZBnLnhBP5f-3_NdNc","auth":"hSAbTfDQPKPaEL0GxU4vjg"}}
const notificationPayload = JSON.stringify({
    "notification": {
        "title": "Angular News",
        "body": "Newsletter Available!",
        // "icon": "assets/main-page-logo-small-hat.png",
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