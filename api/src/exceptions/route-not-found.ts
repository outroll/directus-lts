import { BaseException } from '@outroll/exceptions';

export class RouteNotFoundException extends BaseException {
	constructor(path: string) {
		super(`Route ${path} doesn't exist.`, 404, 'ROUTE_NOT_FOUND');
	}
}
