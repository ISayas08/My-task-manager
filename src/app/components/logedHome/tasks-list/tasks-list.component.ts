import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../../../services/tasks/tasks.service';
import { TaskModel } from '../../../models/task.model';
import { Router } from '@angular/router';
import { TaskFormComponent } from '../modals/task-form/task-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {

  private tasks: TaskModel[];
  private tasksAux: TaskModel[];

  constructor(
    private _task: TasksService,
    private _router: Router,
    private _dialog: MatDialog,
    private _message: ToastService
  ) { }

  ngOnInit() {
    this._task.getAllTasks().subscribe(res => {
      this.tasks = res;
      this.tasksAux = res;
    });
  }

  ngOnDestroy() {

  }

  //==============================================================
  // Events.
  //==============================================================

  private search(event) {
    const searchTerm = event.target.value.toLocaleLowerCase();
    this.tasks = this.tasksAux;

    this.tasks = this.tasks.filter(t => {
      return t.name.toLocaleLowerCase().includes(searchTerm) ||
        t.limit_date.startsWith(searchTerm) ||
        t.project.toLocaleLowerCase().includes(searchTerm);
    });
  }

  private goToEditTask(task) {
    const dataToDialog = {
      isEditing: true,
      taskData: task
    }
    this.openNewtaskDialog(dataToDialog);
  }

  private openNewtaskDialog(data: any = {}) {
    let dialogRef = this._dialog.open(TaskFormComponent, {
      width: '30%',
      minWidth: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (data.isEditing) this._message.showMessage('The tasks was edited successfully.');
      else this._message.showMessage('The tasks was created successfully.');
    });
  }

  private deleteTask(id: string) {
    // TODO Add comfirm.
    this._task.deleteOne(id);
    this._message.showMessage('Task deleted successfully.');
  }

}
