import { defineEndpoint } from '@outroll/extensions-sdk';

export default defineEndpoint((router) => {
	router.get('/', (_req, res) => res.send('Hello, World!'));
});
