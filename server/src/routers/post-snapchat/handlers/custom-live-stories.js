import zlib from 'zlib';

export async function addToStoriesView(req, res, next) {
	const dataContext = req.app.get('data-context');
	const response = JSON.parse(zlib.gunzipSync(req.scResult.body).toString('utf8'));

	// query and inject custom live stories here
	const customLiveStories = await dataContext.executeQuery('SELECT * FROM `custom_live_stories` WHERE is_active = 1');
	for (var i = 0; i < customLiveStories.length; i++) {
		const currentCustomLiveStory = customLiveStories[i];
		const customLiveStory = {
			'show_viewing_jit': currentCustomLiveStory.show_viewing_jit,
			'allow_story_explorer': currentCustomLiveStory.allow_story_explorer,
			'mature_content': currentCustomLiveStory.mature_content,
			'profile_description': currentCustomLiveStory.profile_description,
			'shared_id': currentCustomLiveStory.shared_id,
			'thumbnails': {
				'unviewed': {
					'needs_auth': false,
					'url': currentCustomLiveStory.unviewed_thumbnail
				},
				'viewed': {
					'needs_auth': false,
					'url': currentCustomLiveStory.viewed_thumbnail
				}
			},
			'has_custom_description': currentCustomLiveStory.has_custom_description,
			'display_name': currentCustomLiveStory.display_name,
			'username': currentCustomLiveStory.username,
			'stories': [
				{
					'story': {
						'id': 'bridalfashion16~1460739897323~924f9c65',
						'username': currentCustomLiveStory.username,
						'mature_content': false,
						'client_id': 'BRIDALFASHION16~5793C025-28B9-4576-9F5C-0ADDF8560A9D',
						'timestamp': 1460739897323,
						'media_id': '5111068354756608',
						'media_key': 'reHKqANzGmueSoaLWPNzi1lnn6xfsBFilhtPl/07YkE=',
						'media_iv': '/VmpVBj7WhaHnjo0OFOv/g==',
						'thumbnail_iv': 'gyKwe78GVZyz9w3twUyUzQ==',
						'media_type': 1,
						'time': 5.640149253731344,
						'caption_text_display': 'Just finished ripping the runway!',
						'zipped': true,
						'story_filter_id': '',
						'time_left': 77520442,
						'is_shared': true,
						'submission_id': 'bridalfashion16~d4aafc81ec29c902b0e47643a1c51812',
						'media_url': 'https://app.snapchat.com/bq/story_blob?story_id=5111068354756608&t=0&mt=1&encoding=compressed',
						'thumbnail_url': 'https://app.snapchat.com/bq/story_thumbnail?story_id=5111068354756608&t=0&mt=1&encoding=compressed',
						'needs_auth': false,
						'ad_can_follow': true
					},
					'viewed': false
				}
			],
			'is_local': currentCustomLiveStory.is_local
		};

		response.friend_stories.push(customLiveStory);
	}

	req.scResult.body = zlib.gzipSync(new Buffer(JSON.stringify(response)));
	next();
};

export async function addToSendView(req, res, next) {
	const dataContext = req.app.get('data-context');
	const response = JSON.parse(zlib.gunzipSync(req.scResult.body).toString('utf8'));

	const customLiveStories = await dataContext.executeQuery('SELECT * FROM `custom_live_stories` WHERE is_active = 1');
	for (var i = 0; i < customLiveStories.length; i++) {
		const currentCustomLiveStory = customLiveStories[i];
		response.location.our_story_auths.push({
			'story_id': currentCustomLiveStory.shared_id,
			'display_name': currentCustomLiveStory.display_name,
			'friend_name': currentCustomLiveStory.display_name,
			'my_stories_display_name': currentCustomLiveStory.display_name,
			'account': currentCustomLiveStory.shared_id,
			'venue': 'Earth',
			'local_story': false,
			'is_whitelisted': false,
			'time_left': 90819990702
		});
	}

	req.scResult.body = zlib.gzipSync(new Buffer(JSON.stringify(response)));
	next();
}
