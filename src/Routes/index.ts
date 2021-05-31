import { Router } from 'express';
import { activities } from '../models/Activities/Routes/activities.routes';
import { banners } from '../models/Banners/Routes/banners.routes';
import { communicated } from '../models/Comunnicated/Routes/communicated.routes';
import { events } from '../models/Events/Routes/events.routes';
import feedRoutes from '../models/Feed/Routes/feed.routes';
import { helpCenter } from '../models/HelpCenter/Routes/help_center.routes';
import { monthsRouter } from '../models/Months/Routes/months.routes';
import { profiles } from '../models/Profiles/Routes/profiles.routes';
import {loginPhone, validateToken} from '../models/users/Routes/sessions.routes';
import user from '../models/users/Routes/user.routes';

const routes = Router();

routes.use('/login-phone', loginPhone);
routes.use('/validate-token', validateToken);

routes.use('/help-center', helpCenter);
routes.use('/communicated', communicated);
routes.use('/activities', activities);
routes.use('/events', events);
routes.use('/banners', banners);
routes.use('/user', user);
routes.use('/profiles', profiles);
routes.use('/feed', feedRoutes);
routes.use('/months', monthsRouter);

export default routes;
