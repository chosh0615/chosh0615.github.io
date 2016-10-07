import { Action } from './action';

export class Job {
  constructor(
    public jobId: string,
    public name: string,
    public actions: Action[]
    ) { }
}
