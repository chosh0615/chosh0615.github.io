import { Injectable } from '@angular/core';
import { Job } from '../model/job';

@Injectable()
export class JobService {
	
  getJobs() : Job[] {
    return [{jobId: '111', name: 'job 1'},
            {jobId: '222', name: 'job 2'}
            ];
  }
}