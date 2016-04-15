export default async function index(req, res, next) {
	const dataContext = req.app.get('data-context');
	const customLiveStories = await dataContext.executeQuery('SELECT * FROM `custom_live_stories` WHERE is_active = 1');
	for (var i = 0; i < customLiveStories.length; i++) {
		if (req.params.shared_id === customLiveStories.shared_id) {
			res.json({ });
		}
	}
}
