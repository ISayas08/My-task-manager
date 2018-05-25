import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast/toast.service';
import { TasksService } from '../../../services/tasks/tasks.service';
import { TaskModel } from '../../../models/task.model';
import { MatDialog } from '@angular/material';
import { TaskFormComponent } from '../modals/task-form/task-form.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projects;

  constructor(
    private _toast: ToastService,
    private _task: TasksService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._task.getAllTasks().subscribe(res => {
      this.projects = [];
      const groupedByProjetTasks_Obj = this.groupBy(res, 'project');
      const keys = Object.keys(groupedByProjetTasks_Obj);

      keys.forEach(key => {
        this.projects.push({
          name: key,
          tasks: groupedByProjetTasks_Obj[key],
          isExpanded: false
        });
      });
    });
  }

  //============================================================
  //  Local methods.
  //============================================================

  private groupBy(json: Array<any>, key: string): Object {
    return json.reduce((groups, JSONItem) => {
      (groups[JSONItem[key]] = groups[JSONItem[key]] || []).push(JSONItem);
      return groups;
    }, {});
  }

  //============================================================
  //  Local methods.
  //============================================================

  private goToEditTask(task: TaskModel) {
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
      this._toast.showMessage('The tasks was edited successfully.');
    });
  }
}
