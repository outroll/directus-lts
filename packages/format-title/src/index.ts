export default function formatTitle(key: string): string {
	if (!key) return '';

	const words = key.split(/[\s_-]+/);

	return words
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(' ');
}
