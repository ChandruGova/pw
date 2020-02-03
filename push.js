var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cnYie_9PcvA:APA91bEhmYiSh6dAbrcWMu6ZA3-E0bUy3JreYBCuNJ7cWvV_CyE7uc6bEpBD0r8wm2ZeZgqg3VC068KL5wkyuFM3EEKtshUyVVWl63W0lonP1jnW8AKdtyO812lnAaa0Vck2kJc7X61a","expirationTime":null,
"keys":{"p256dh":"BKwrQypshRtkXsDolw_ztpmqaTNb58RS0CHXn3u_ZLgYoem6NTj7qUkvEYG6GKmbju2cXiRgu_M3vOtFGsXDyq0","auth":"s7Bqm0smOQytWrKsnsC7ww"}}

push.sendNotification(sub , "test email")