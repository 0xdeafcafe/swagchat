import request from 'request-promise';

export default async function index(req, res, next) {
	// delete host header as this breaks certificate stuff
	delete req.headers.host;
	
	// create request options - we be picky
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

	try {
		const response = await request(requestOptions);
		
		// remove transfer-encoding header, as we doesn't support this
		delete response.headers['transfer-encoding'];

		// set the data to our temp `scResult`
		req.scResult = response;
		
		// move along
		next();
	}
	catch (ex) {
		console.log(ex);
		console.log(req.body);
		console.log(req.method);
	}
}
