import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../service/job.service';

@Component({
  selector: 'jobs',
  template: `
    <h1>Job list</h1>
    <table class="table table-hover">
      <tr><th>Job ID</th><th>Job name</th></tr>
      <tr *ngFor="let job of jobs" (click)="onSelect($event)">
        <td>{{ job.jobId }}</td>
        <td>{{ job.name }}</td>
      </tr>
    </table>
  `, 
  providers: [JobService]
})
export class JobsComponent {
  jobs = this.jobService.getJobs();

	constructor(private jobService: JobService,
              private router: Router) {
  }

  onSelect($event) {
    
    let link = ['/job'];
    this.router.navigate(link);
  }

}