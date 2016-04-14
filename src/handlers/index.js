import Router from 'express-promise-router';
import * as wildcard from './wildcard';

const router = Router();
export default router;

router.use(function (req, res, next) {
	res.removeHeader("X-Powered-By");
	next();
});
router.use(wildcard.index);
