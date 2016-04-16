import Router from 'express-promise-router';
import SpoofDescriptions from './handlers/spoof-descriptions';
import * as CustomLiveStories from './handlers/custom-live-stories';

const router = Router();
export default router;

router.get('/shared/description', SpoofDescriptions);
router.post('/bq/post_story', CustomLiveStories.saveToDatabase);
