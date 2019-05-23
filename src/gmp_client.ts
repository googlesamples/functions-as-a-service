import {createClient} from '@google/maps';

/**
 * Gets the Google Maps API Client.
 * @throws {Error} If there is no `API_KEY` env var present.
 */
export const getClient = () => {
  // Parse the Google Maps API_KEY
  const API_KEY = process.env.API_KEY as string;
  if (!API_KEY) throw new Error('Error: API_KEY environment variable required.');

  // Create the Maps Client
  const googleMapsClient = createClient({
    key: API_KEY,
    Promise,
  });
  return googleMapsClient;
};