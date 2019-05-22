// import {helloWorld} from './src/';

// module.exports = {
//   helloWorld,
// };

import {Request, Response} from 'express';

exports.helloWorld = (req: Request, res: Response) => {
  res.send('hello');
};