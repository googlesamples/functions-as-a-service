import {Request, Response} from 'express';

import {getClient} from './gmp_client';

/**
 * Returns place details at the specific location.
 * Requires an `API_KEY` environment variable.
 * @see https://github.com/googlemaps/google-maps-services-js#nodejs-client-for-google-maps-services
 */
export default async (req: Request, res: Response) => {
  // Get the Maps Client
  let googleMapsClient;
  try {
    googleMapsClient = getClient();
  } catch (e) {
    return res.status(400).send(e);
  }

  // Validate origin
  const origin = req.query.origin;
  if (!origin) {
    return res.status(400).send('Error: origin must be provided. Example: origin=37.7841393,-122.404467');
  }

  // Execute API request
  const response = await googleMapsClient.places({
    query: origin,
  }).asPromise();

  // Send the response
  res.send({
    data: response.json,
    request: {
      query: req.query,
      params: req.path,
    },
  });
};
