import {Request, Response} from 'express';

/**
 * Returns an array of lat/lng origin locations.
 * Simulates origin requests from many locations.
 */
export default (req: Request, res: Response) => {
  // Validate query parameter.
  const origin = req.query.origin;
  if (!origin) {
    return res.send({
      error: 'Error: `origin` query parameter required. Example: /origins?origin=1',
    });
  }

  // Select a random place around the origin.
  const getDotAroundOrigin = () => {
    const place0 = { lat: 37.621491, lng: -122.378912 }; // SFO
    const place1 = { lat: 37.826837, lng: -122.498978 }; // Marin
    const place2 = { lat: 37.769548, lng: -122.486010 }; // GG Park
    const place3 = { lat: 37.795455, lng: -122.393306 }; // Ferry Building
    const place4 = { lat: 37.808171, lng: -122.270019 }; // Fox Theatres
    const place5 = { lat: 37.750565, lng: -122.203004 }; // Oracle Arena
    const place6 = { lat: 37.715740, lng: -122.219267 }; // OAK
    const place7 = { lat: 37.521822, lng: -121.924796 }; // Old Mission Park
    const place8 = { lat: 37.368574, lng: -121.927630 }; // SJC
    const place9 = { lat: 37.422051, lng: -122.084025 }; // Googleplex
    const places = [place0, place1, place2, place3, place4, place5, place6, place7, place8, place9];
    const place = places[+origin];

    // Validate place
    if (!place) return res.send('Error: Invalid `origin` query parameter. Example: /origins?origin=1');

    // Randomize the dot's location a bit
    const RANDOMNESS = 0.025;
    place.lat += ((Math.random() - 0.5) * RANDOMNESS);
    place.lng += ((Math.random() - 0.5) * RANDOMNESS);
    return place;
  };

  // Select N dots
  const N = 10;
  const dots = [];
  for (let i = 0; i < N; ++i) {
    dots[i] = getDotAroundOrigin();
  }
  res.send(dots);
};
