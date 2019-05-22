# Functions as a Service

![](https://user-images.githubusercontent.com/744973/56170578-e5675b80-5f96-11e9-9ffe-9492512a0586.png)

Functions as a Service is a demo for Google I/O '19.

The demo shows calling Google Maps Platform APIs from Google Cloud Functions.

We show functions firing to query photos, details, and directions to sushi restaurants within 25 miles of Google I/O.

## Technologies

### Google Cloud Functions

- Cloud Functions (Node 10)

### Google Maps Platform

- Place Details API
- Places Photos API
- Street View Static API
- Call Routes API

## Develop

This project has two sub-projects, `gcf` and `gmp`.

- `gcf/` holds Google Cloud Functions logic.
  - `cd` into this directory and run `deploy.sh` to deploy.
- `gmp/` holds Google Maps Platform logic.
  - Publish to npm to expose this module to `gcf/`.

To build the project, in the parent directory, run this command:

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