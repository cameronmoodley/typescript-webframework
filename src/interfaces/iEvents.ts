export interface iEvents {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}
