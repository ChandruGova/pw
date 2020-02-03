var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/cwTTdPYNYf8:APA91bFh4laN4WMFyG6d2m268YOMXaYb2xn-ROoH1WpikPxmTVYRKvWZ7ntne3639reMvIU-pq_ixtLjTvDkHbAkBWLYNVPK__CrmLzKFUZnynWJTunpfbqtelPBeB61v0wdhklAr8E6","expirationTime":null,"keys":{"p256dh":"BAs9W10vaZJg3mNLP3-kkzTRt23mVWOXmGkgdzF6n9OY_U9iVCBb1FDlPmHVmFbcBebLrjQqid9Txc_ed2zDSac","auth":"upqg9a4P0aXE1MAEr2KIyQ"}}
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
push.sendNotification(sub ,notificationPayload)