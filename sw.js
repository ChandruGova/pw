self.addEventListener('push', event => {
    // const data = event.data.json()
    if(event && event.data ){
        console.log(event.data,"dddddddddd")
    }
    console.log('New notification', event)
    // const options = {
    //   body: data.body,
    // }
    // event.waitUntil(
    //   self.registration.showNotification(data.title, options)
    
    //   );
  })