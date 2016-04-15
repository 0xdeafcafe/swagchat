import zlib from 'zlib';

export default async function index(req, res, next) {
	const dataContext = req.app.get('data-context');
	const response = JSON.parse(zlib.gunzipSync(req.scResult.body).toString('utf8'));	
	const filters = await dataContext.executeQuery('SELECT * FROM `custom_filters` WHERE is_active = 1');
	const filterTemplate = response.location.filters[response.location.filters.length - 1];
	for(var i = 0; i < filters.length; i++) {
		response.location.filters.push({
			...filterTemplate,
			filter_id: filters[i].filter_id.toString(),
			image: filters[i].image
		});
	}
	
	req.scResult.body = zlib.gzipSync(new Buffer(JSON.stringify(response)));
	next();
};
