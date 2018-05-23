import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks/tasks.service';
import { TaskModel } from '../../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  private tasks: TaskModel[];

  constructor(
    private _task: TasksService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.tasks = this._task.getAllTasks() || [];
  }

  private search(event) {
    const searchTerm = event.target.value.toLocaleLowerCase();
    this.tasks = this._task.getAllTasks();

    this.tasks = this.tasks.filter(t => {
      return t.name.toLocaleLowerCase().includes(searchTerm) ||
        t.limit_date.startsWith(searchTerm) ||
        t.project.toLocaleLowerCase().includes(searchTerm);
    });
  }

  private goToEditTask(i) {
    this._router.navigate(['tasks/edit', i]);
  }

}
