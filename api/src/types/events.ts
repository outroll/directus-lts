import type { ActionHandler, FilterHandler, InitHandler } from '@outroll/types';
import type { ScheduledTask } from 'node-cron';

export type EventHandler =
	| { type: 'filter'; name: string; handler: FilterHandler }
	| { type: 'action'; name: string; handler: ActionHandler }
	| { type: 'init'; name: string; handler: InitHandler }
	| { type: 'schedule'; task: ScheduledTask };