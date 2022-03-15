import express, {
  Application,
  NextFunction,
  Request,
  Response
} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routerUser from './collections/Users/routes/routes';
import routerUserRole from './collections/UserRole/routes';
import routerFood from './collections/Food/routes/routes';
import routerCoordinate from './collections/Coordinate/routes';
import routerRestaurant from './collections/Restaurants/routes';
import routerAuth from '../src/auth/router/authRouter';
import projectsRoutes from './projects/routes/projectsRouter';

dotenv.config();

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(projectsRoutes);
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