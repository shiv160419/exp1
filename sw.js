// install event


var GHPATH = '/exp1';

// Choose a different app prefix name
var APP_PREFIX = 'exp10';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/js/app.js`
]
self.addEventListener('install', evt => {
  console.log('service worker installed');
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
});
