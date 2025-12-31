import { DeepPartial, Field } from '@outroll/types';
import { defineOperationApp } from '@outroll/utils';

export default defineOperationApp({
	id: 'exec',
	icon: 'code',
	name: '$t:operations.exec.name',
	description: '$t:operations.exec.description',
	overview: () => [],
	options: () => {
		const standard: DeepPartial<Field>[] = [
			{
				field: 'code',
				name: '$t:code',
				type: 'string',
				meta: {
					width: 'full',
					interface: 'input-code',
					options: {
						language: 'javascript',
					},
				},
				schema: {
					default_value: `module.exports = async function(data) {
	// Do something...
	return {};
}`,
				},
			},
		];

		return standard;
	},
});
