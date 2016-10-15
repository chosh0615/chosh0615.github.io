import { Property } from './property';

export class Construct {
  constructor(
  	public constructType: string,
    public className: string,
    public displayName: string,
    public properties: Property[]) { }
}
