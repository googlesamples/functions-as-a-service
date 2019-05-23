import {Request, Response} from 'express';

import route1 from './src/route1';
import route2 from './src/route2';

/**
 * Entry point into the Functions Framework.
 * @see https://github.com/GoogleCloudPlatform/functions-framework-nodejs
 */
exports.function = (req: Request, res: Response) => {
  const paths = {
    '/foo': route1,
    '/bar': route2,
  };
  // Find the first route that matches
  for (const [path, route] of Object.entries(paths)) {
    if (req.path.startsWith(path)) {
      return route(req, res);
    }
  }
  res.send('No path found');
};
