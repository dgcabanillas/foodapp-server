import express, {
  Application,
  NextFunction,
  Request,
  Response
} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routerUser from '../src/models/User/routes';
import routerUserRole from '../src/models/UserRole/routes';
import routerFood from '../src/models/Food/routes';
import routerCoordinate from '../src/models/Coordinate/routes';
import routerRestaurant from '../src/models/Restaurant/routes';
import routerAuth from '../src/auth/router/authRouter';

dotenv.config();

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(routerUser);
app.use(routerUserRole);
app.use(routerFood);
app.use(routerCoordinate);
app.use(routerRestaurant);
app.use(routerAuth);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;