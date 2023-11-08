import type { Filter } from '@outroll/types';
import { defineOperationApi, validatePayload } from '@outroll/utils';

type Options = {
	filter: Filter;
};

export default defineOperationApi<Options>({
	id: 'condition',

	handler: ({ filter }, { data }) => {
		const errors = validatePayload(filter, data, { requireAll: true });

		if (errors.length > 0) {
			throw errors;
		} else {
			return null;
		}
	},
});
