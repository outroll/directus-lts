import type { Field } from '@outroll/types';
import type { Table } from '@outroll/schema';

export type CollectionMeta = {
	collection: string;
	note: string | null;
	hidden: boolean;
	singleton: boolean;
	icon: string | null;
	translations: Record<string, string>;
	item_duplication_fields: string[] | null;
	accountability: 'all' | 'accountability' | null;
	group: string | null;
};

export type Collection = {
	collection: string;
	fields?: Field[];
	meta: CollectionMeta | null;
	schema: Table | null;
};