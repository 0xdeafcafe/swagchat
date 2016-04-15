import {raw} from 'body-parser';

export const bodyRaw = raw({type: '*/*', limit: '10mb', inflate: false});
export {default as notFound} from './not-found';
export {default as error} from './error';