import { Injectable } from '@angular/core';
import { Job } from '../model/job';

@Injectable()
export class JobService {
	
  getJobs() : Job[] {
    return [];
  }
}