'use strict';

import express from 'express';
import * as middleware from './middleware';
import * as Wildcard from './handlers/wildcard';
import PreResponse from './routers/pre-response';
import PostResponse from './routers/post-response';

const app = express();
export default app;

app.set('etag', false);
app.use(middleware.bodyRaw);

// run proxy middleware
app.use(PreResponse);
app.use(Wildcard.index);
app.use(PostResponse);
app.use(function(req, res) {
	res.status(req.scResult.statusCode.toString());
	res.set(req.scResult.headers);
	res.send(req.scResult.body);
});

app.use(middleware.notFound);
app.use(middleware.error);