import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../../../../services/tasks/tasks.service';
import { TaskModel } from '../../../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  private newTaskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    private _formBuild: FormBuilder,
    private _task: TasksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.newTaskForm = this._formBuild.group({
      name: ['', Validators.required],
      project: ['', Validators.required],
      limit_date: ['', Validators.required],
      comments: ['']
    });

    if (this.data && this.data.isEditing) {
      this.setUpFormDataToEdit();
    }
  }

  //===================================================
  // Events.
  //===================================================

  private onSaveTasks() {
    const taskData = this.newTaskForm.value;
    const date = new Date();
    const taskObj = new TaskModel(
      this.data.isEditing ? this.data.taskData.id : date.getTime() + '',
      taskData.name,
      taskData.project,
      taskData.limit_date,
      taskData.comments
    );

    if (this.data.isEditing) this.editTask(taskObj);
    else this.saveTask(taskObj);

    this.dialogRef.close();
  }

  //===================================================
  // Local methods.
  //===================================================

  private saveTask(taskToSave: TaskModel) {
    this._task.addOne(taskToSave);
  }

  private editTask(taskToEdit: TaskModel) {
    this._task.editOne(taskToEdit);
  }

  private setUpFormDataToEdit() {
    this.newTaskForm.setValue({
      name: this.data.taskData.name,
      project: this.data.taskData.project,
      limit_date: this.data.taskData.limit_date,
      comments: this.data.taskData.comments
    });
  }
  //===================================================
  // getters.
  //===================================================

  private get name() { return this.newTaskForm.get('name') }
  private get project() { return this.newTaskForm.get('project') }
  private get limit_date() { return this.newTaskForm.get('limit_date') }
  private get comments() { return this.newTaskForm.get('comments') }

}
