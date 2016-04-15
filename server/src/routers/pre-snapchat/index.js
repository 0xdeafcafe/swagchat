import Router from 'express-promise-router';
import SpoofDescriptions from './handlers/spoof-descriptions';

const router = Router();
export default router;

router.get('/shared/description', SpoofDescriptions);
