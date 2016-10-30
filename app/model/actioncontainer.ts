import { Action } from './action'

export class ActionContainer {

	constructor(
		public key: string,
		public parent: string,
		public name: string,
		public actionId: string,
		public source: string, 
		public action: Action
	) { }
}
