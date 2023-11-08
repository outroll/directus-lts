import type { Driver } from '@outroll/storage';

export const _aliasMap: Record<string, string> = {
	local: '@outroll/storage-driver-local',
	s3: '@outroll/storage-driver-s3',
	gcs: '@outroll/storage-driver-gcs',
	azure: '@outroll/storage-driver-azure',
	cloudinary: '@outroll/storage-driver-cloudinary',
};

export const getStorageDriver = async (driverName: string): Promise<typeof Driver> => {
	if (driverName in _aliasMap) {
		driverName = _aliasMap[driverName]!;
	} else {
		throw new Error(`Driver "${driverName}" doesn't exist.`);
	}

	return (await import(driverName)).default;
};
