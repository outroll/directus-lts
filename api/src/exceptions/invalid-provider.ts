import { BaseException } from '@outroll/exceptions';

export class InvalidProviderException extends BaseException {
	constructor(message = 'Invalid provider.') {
		super(message, 403, 'INVALID_PROVIDER');
	}
}