if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/exp1/sw.js', {scope: '/exp1/'})
  
  
  
  
  
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}
