import { useUserStore } from '@/stores/user';
import { Accountability } from '@outroll/types';
import { parseFilter as parseFilterShared } from '@outroll/utils';
import { Filter } from '@outroll/types';

export function parseFilter(filter: Filter | null): Filter {
	const userStore = useUserStore();

	if (!userStore.currentUser) return filter ?? {};

	const accountability: Accountability = {
		role: userStore.currentUser.role.id,
		user: userStore.currentUser.id,
	};

	return parseFilterShared(filter, accountability) ?? {};
}
