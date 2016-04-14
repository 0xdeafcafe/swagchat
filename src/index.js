'use strict';

import express from 'express';
import * as middleware from './middleware';
import handlers from './handlers';

const app = express();
export default app;

app.set('etag', false);
app.use(middleware.bodyRaw);
app.use('/', handlers);
app.use(middleware.notFound);
app.use(middleware.error);
