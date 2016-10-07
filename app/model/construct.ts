import { Property } from './property';

export class Construct {
  constructor(
    public className: string,
    public displayName: string,
    public properties: Property[]) { }
}
