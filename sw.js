self.addEventListener('push', event => {
    // const data = event.data.json()
    if(event && event.data ){
        console.log(event.data,"dddddddddd")
    }else{
        console.log("dddddddddddddddddddddddddddddddcsvsfb")
    }
    console.log('New notification', event)
    const options = {
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
    event.waitUntil(
      self.registration.showNotification("Chandru", options)
    
      );
  })