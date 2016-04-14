import Router from 'express-promise-router';
import zlib from 'zlib';
import fs from 'fs';

const router = Router();
export default router;

async function xox(req, res, next) {
	const dataContext = req.app.get('data-context');
	const random = req.app.get('random');
	const response = JSON.parse(zlib.gunzipSync(req.scResult.body).toString('utf8'));	
	const filters = await dataContext.executeQuery('SELECT * FROM `custom_filters` WHERE is_active = 1');
	const filterTemplate = response.location.filters[response.location.filters.length - 1];
	for(var i = 0; i < filters.length; i++) {
		response.location.filters.push({
			...filterTemplate,
			filter_id: random.integer(1527607230, 4725397219901440).toString(),
			image: filters[i].image
		});
	}
	
	req.scResult.body = zlib.gzipSync(new Buffer(JSON.stringify(response)));
	next();
};

router.post('/loq/loc_data', xox);