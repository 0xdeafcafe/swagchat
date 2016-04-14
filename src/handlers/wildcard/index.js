import request from 'request-promise';
import fs from 'fs-promise';

async function index(req, res) {
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
	// delete host header as this breaks certificate stuff
	delete requestOptions.headers.host;

	let response = void 0;
	try {
		response = await request(requestOptions);
		
		// remove transfer-encoding header, as we doesn't support this
		delete response.headers['transfer-encoding'];

		// send that data yo
		res.set(response.headers);
		res.status(response.statusCode.toString());
		res.send(response.body);
	}
	catch (ex) {
		console.log(ex);
		console.log(req.body);
		console.log(req.method);
	}
}

export { index };
