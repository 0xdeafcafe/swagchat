import Multer from 'multer';

const multerLimits = {
	headerPairs: 100,
	fields: 20,
	fieldNameSize: 50,
	fieldSize: 2 * 1024 * 1024, // 1MB
	files: 1,
	fileSize: 10 * 1024 * 1024 // 10MB
};
const multer = Multer({
	limits: multerLimits
}).single('raw_thumbnail_data');

export async function saveToDatabase(req, res, next) {
	const dataContext = req.app.get('data-context');
	const customLiveStories = await dataContext.executeQuery('SELECT * FROM `custom_live_stories` WHERE is_active = 1');

	await new Promise((resolve, reject) => {
		multer(req, res, error => {
			if (error)
				reject(error);
			else
				resolve();
		});
	});

	const inputObj = req.body;
	const inputFile = req.file;

	console.log(req.body);
	res.json({ });
}
