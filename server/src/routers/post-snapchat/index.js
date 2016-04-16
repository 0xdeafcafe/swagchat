import Router from 'express-promise-router';
import CustomFilters from './handlers/custom-filters';
import * as CustomLiveStories from './handlers/custom-live-stories';
import zlib from 'zlib';

const router = Router();
export default router;

router.post('/loq/loc_data', CustomFilters);
router.post('/loq/loc_data', CustomLiveStories.addToSendView);
router.post('/bq/stories', CustomLiveStories.addToStoriesView);
