import Router from 'express-promise-router';
import CustomFilters from './handlers/custom-filters'

const router = Router();
export default router;

router.post('/loq/loc_data', CustomFilters);
