import { Action } from './action';
import { Construct } from './construct';

export class EtlAction extends Action {
  constructor(
  	public name: string,
    public constructs: Construct[]
    ) {
    	super(name);
    }
}
