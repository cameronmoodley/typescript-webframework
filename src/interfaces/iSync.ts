import { AxiosPromise } from 'axios';

export interface iSync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}
