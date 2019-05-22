# Functions as a Service

![](https://user-images.githubusercontent.com/744973/56170578-e5675b80-5f96-11e9-9ffe-9492512a0586.png)

The demo shows calling Google Maps Platform APIs from Google Cloud Functions.

## Technologies

- Cloud Functions (Node 10)
- TypeScript:
  - Google Maps Client: https://www.npmjs.com/package/@types/google__maps
- [Node.js Client for Google Maps Services](https://github.com/googlemaps/google-maps-services-js)
  - Place Details API
  - Places Photos API
  - Call Routes API

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