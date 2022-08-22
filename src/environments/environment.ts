// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: 'http://localhost:3000/',
  movies: 'https://api.themoviedb.org/3/',
  moviesKey: 'api_key=c6d4ecbebfd608f62585b424bebc717c',
  image: 'https://image.tmdb.org/t/p/w500/',
  otherData: '&include_adult=false&language=en-US'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
