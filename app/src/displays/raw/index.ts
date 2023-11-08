import { defineDisplay } from '@outroll/utils';
import { TYPES, LOCAL_TYPES } from '@outroll/constants';

export default defineDisplay({
	id: 'raw',
	name: '$t:displays.raw.raw',
	icon: 'code',
	component: ({ value }) => (typeof value === 'string' ? value : JSON.stringify(value)),
	options: [],
	types: TYPES,
	localTypes: LOCAL_TYPES,
});
