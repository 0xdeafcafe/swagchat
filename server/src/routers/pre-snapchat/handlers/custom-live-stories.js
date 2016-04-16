export async function saveToDatabase(req, res, next) {
	const dataContext = req.app.get('data-context');
	const customLiveStories = await dataContext.executeQuery('SELECT * FROM `custom_live_stories` WHERE is_active = 1');

	next();
}
