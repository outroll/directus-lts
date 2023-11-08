import { BaseException } from '@outroll/exceptions';

export class TokenExpiredException extends BaseException {
	constructor(message = 'Token expired.') {
		super(message, 401, 'TOKEN_EXPIRED');
	}
}
