'use strict';

import express from 'express';
import * as middleware from './middleware';
import SnapchatProxy from './handlers/snapchat-proxy';
import PreSnapchat from './routers/pre-snapchat';
import PostSnapchat from './routers/post-snapchat';

const app = express();
export default app;

app.set('etag', false);
app.use(middleware.bodyRaw);

// run proxy middleware
app.use(PreSnapchat);
app.use(SnapchatProxy);
app.use(PostSnapchat);
app.use(function(req, res) {
	res.status(req.scResult.statusCode.toString());
	res.set(req.scResult.headers);
	res.send(req.scResult.body);
});

app.use(middleware.notFound);
app.use(middleware.error);
