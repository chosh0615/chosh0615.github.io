import { Action } from './action';
import { Construct } from './construct';

export class EtlAction extends Action {

	public constructs: Construct[];

	constructor(
		public name: string
	) {
		super(name);

		this.constructs = [new Construct("Source", "test", "tes", []),
                      new Construct("Writer", "test", "test", [])];
	}
}
