import { defineOperationApi } from '@outroll/extensions-sdk';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'custom',
	handler: ({ text }) => {
		console.log(text);
	},
});
