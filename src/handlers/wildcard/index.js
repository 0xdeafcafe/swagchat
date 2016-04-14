import request from 'request-promise';
import fs from 'fs-promise';

async function index(req, res) {
	const requestOptions = {
		uri: `https://app.snapchat.com${req.originalUrl}`,
		method: req.method,
		headers: req.headers,
		body: req.method === 'GET' ? void 0 : req.body,
		resolveWithFullResponse: true,
		gzip: true,
		
		proxy: 'http://127.0.0.1:8888',
		rejectUnauthorized: false
	};
	delete requestOptions.headers.host;

	let response = void 0;
	try {
		response = await request(requestOptions);
		delete response.headers['transfer-encoding'];
		delete response.headers['content-encoding'];
		await fs.writeFile('C:\\img.jpg', new Buffer(response.body, 'binary'));
		await fs.writeFile('C:\\data.file', JSON.stringify(response));
		// console.log('xxx');
		// console.log(typeof(response.body));
		// console.log(response.body);

		res.set(response.headers);
		res.status(response.statusCode.toString());
		res.send(new Buffer(response.body, 'binary'));
	}
	catch (ex) {
		console.log(ex);
		console.log(req.body);
		console.log(req.method);
	}
}

export { index };
