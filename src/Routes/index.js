const { Router } = require('express');
const { activities } = require('../models/Activities/Routes/activities.routes');
const { banners } = require('../models/Banners/Routes/banners.routes');
const chatsRouter = require('../models/Chats/Routes/chats.routes');
const { communicated } = require('../models/Comunnicated/Routes/communicated.routes');
const { events } = require('../models/Events/Routes/events.routes');
const feedRoutes = require('../models/Feed/Routes/feed.routes');
const { helpCenter } = require('../models/HelpCenter/Routes/help_center.routes');
const { monthsRouter } = require('../models/Months/Routes/months.routes');
const { profiles } = require('../models/Profiles/Routes/profiles.routes');
const {loginPhone, validateToken} = require('../models/users/Routes/sessions.routes');
const user = require('../models/users/Routes/user.routes');

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
routes.use('/chats', chatsRouter);

exports = routes;
