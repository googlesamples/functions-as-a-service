# Functions as a Service

![](https://user-images.githubusercontent.com/744973/56170578-e5675b80-5f96-11e9-9ffe-9492512a0586.png)

The demo shows calling Google Maps Platform APIs from Google Cloud Functions.

## Technologies

- Cloud Functions (Node 10)
  - [Function Framework](https://github.com/GoogleCloudPlatform/functions-framework-nodejs) for local development.
- Google Maps Services ([Node.js Client](https://github.com/googlemaps/google-maps-services-js))
  - Directions API
- TypeScript
  - Google Maps Types: https://www.npmjs.com/package/@types/google__maps
  - Google Cloud Functions Server (Express): https://www.npmjs.com/package/@types/express

## Develop

First install dependencies:

```sh
npm i
```

Then in one tab continually build the project with this command:

```sh
npm run build
```

In another tab, start the web server (and watch if the source code changes):

```sh
npm run watch
```

In order to use some methods, you'll need to start the server with an API key.

```sh
API_KEY=<KEY> npm run watch
```

### API Key

To create an API key, use the Cloud Console credentials page:

https://console.cloud.google.com/apis/credentials

More detailed instructions can be found in the ["Get API Key" guide](https://developers.google.com/maps/documentation/javascript/get-api-key#detailed_guide).

After creating an API key, enable these APIs:

- [Directions API](http://console.cloud.google.com/google/maps-apis/apis/directions-backend.googleapis.com)

### Test

To run the tests, first create an API key with the `Places API` enabled:

- Enable the `Places API`: https://console.cloud.google.com/google/maps-apis/apis/places-backend.googleapis.com
- Create an `API Key`: https://console.cloud.google.com/apis/credentials

Then run the tests from your terminal:

```
API_KEY=<KEY> npm run test
```

### Deploy

You must create a `secret.env` with your API Key:

```env
API_KEY=AIsdfyCnTEiLTroDN14NTtpPm1n7jrBR844ID4A
```

You can deploy this project to Google Cloud Functions by running the following script:

```sh
npm run deploy
```