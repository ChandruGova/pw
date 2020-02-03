var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/duQaOqSJ9Jo:APA91bHXiKODq71U6bwYwW7qYK31EOov7aAPDk7TBDD2Y9_YVxso2cVY2fAfwjN4n_VXKIXTAtV_1eZtLj7YnlNTGpqkJq7C0kf6KBSug4QjUuZtRgPdMgU5z7eZ_a2dONqkErKdY0_B","expirationTime":null,
"keys":{"p256dh":"BKPuvplinN_hxv-VISGaBlu5RUuwzJWFtkp9Wc_f6vGtkjgbuZQiHiNzMDOQkSL7o52Y68JbuMNkCuhZj4Kgijw","auth":"HCfcvEmzsFgDfFZzwhkvfQ"}}

push.sendNotification(sub , "test email")