// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spotify_api_host: 'https://api.spotify.com/v1',
  firebase: {
    apiKey: 'AIzaSyDD5Kwsl6GuC4LfOLSMOhmJ2iG2F5-Yl4w',
    authDomain: 'spotiapp-2b89b.firebaseapp.com',
    projectId: 'spotiapp-2b89b',
    storageBucket: 'spotiapp-2b89b.appspot.com',
    messagingSenderId: '821987139288',
    appId: '1:821987139288:web:376e00d5fa91d27aec41ad'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
