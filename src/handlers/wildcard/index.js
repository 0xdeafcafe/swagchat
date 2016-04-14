import request from 'request-promise';
import fs from 'fs-promise';

async function index(req, res, next) {
	// delete host header as this breaks certificate stuff
	delete req.headers.host;
	const requestOptions = {
		uri: `https://app.snapchat.com${req.originalUrl}`,
		method: req.method,
		headers: req.headers,
		body: req.method === 'GET' ? void 0 : req.body,
		resolveWithFullResponse: true,
		encoding: null,
		
		// proxy: 'http://127.0.0.1:8888',
		// rejectUnauthorized: false
	};

	let response = void 0;
	try {
		response = await request(requestOptions);
		
		// remove transfer-encoding header, as we doesn't support this
		delete response.headers['transfer-encoding'];

		// set the data to our temp `scResult`
		req.scResult = response;
		next();
	}
	catch (ex) {
		console.log(ex);
		console.log(req.body);
		console.log(req.method);
	}
}

export { index };
