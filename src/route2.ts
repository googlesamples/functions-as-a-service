import {Request, Response} from 'express';

/**
 * Entry point into the Functions Framework.
 * @see https://github.com/GoogleCloudPlatform/functions-framework-nodejs
 */
export default (req: Request, res: Response) => {
  const params = req.params;
  const query = req.query;

  res.send({
    params: req.path,
    query: req.query,
    hi: 1234567,
  });
};
