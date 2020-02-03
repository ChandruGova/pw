var push = require('web-push');


var vapidKeys = {
    publicKey:'BFUW60E9Rw0doM1FZ-pgED2WBJM8sC2oOiWv8OomS5fSloPkB9nO6uGxHEr4WvklSwl3LQ4HuBZKKdZPKaCC8sk',
    privateKey: '4mp669vmNy4YKLAcPpqrOhqkivEx06wg16JeazZholY' 
};

push.setVapidDetails('mailto:chandru@vknowlabs.com' , vapidKeys.publicKey , vapidKeys.privateKey);

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/efexhO7Elqs:APA91bEvVi35finq95P7OPUprATesTDdgWo3lTEC5Sa3hO8JGgBs-nHdztjKg9pJMbozLOSD-NLC-mwZ6azCPw61tI24i24XTm7mKhir80gB_pMxrQ3j8EKMs285yZo8Vd_PVyW9ZGNE","expirationTime":null,"keys":{"p256dh":"BFbReEc9TNwNkAw_UCjclPZmj6gbquF-KqyjxLY3_Pyva0OCUOUNLt3B2ZNUqlYqDLyud5hQIJT8Qu-qMA22R4w","auth":"qQAu_8VfipRg4EQxmNX8RQ"}}

push.sendNotification(sub , "test email")