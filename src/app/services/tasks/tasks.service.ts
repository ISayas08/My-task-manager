import { Injectable } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';
import { BehaviorSubject } from 'rxjs';
import { SessionService } from '../session/session.service';
import { UserModel } from '../../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks$ = new BehaviorSubject([]);

  constructor(
    private _session: SessionService,
    private _user: UserService
  ) { }

  //==================================================
  // Shared methods.
  //==================================================

  public addOne(task: TaskModel) {
    let taskAux = this.tasks$.value;
    taskAux.push(task);

    this.emitNewTasksList(taskAux);
    this.updateListToStorage();
  }

  public editOne(task: TaskModel) {
    let taskAux: TaskModel[] = this.tasks$.value;
    
    taskAux.filter(t => t.id === task.id).forEach((t, i) => {
      t.name = task.name;
      t.project = task.project;
      t.limit_date = task.limit_date;
      t.comments = task.comments;

      this.emitNewTasksList(taskAux);
      this.updateListToStorage();
    });
  }

  public deleteOne(id: string) {
    let taskAux: TaskModel[] = this.tasks$.value;
    taskAux.filter(t => t.id === id).forEach((t, i) => {
      taskAux.splice(i, 1);
      this.emitNewTasksList(taskAux);
      this.updateListToStorage();
    });
  }

  public getAllTasks(): BehaviorSubject<TaskModel[]> {
    this.initTaskList();
    return this.tasks$;
  }

  private initTaskList() {
    this.emitNewTasksList(this.loadAllTasks());
  }

  //==================================================
  // Local methods.
  //==================================================

  private loadAllTasks() {
    return this._session.getActiveUser().tasks || [];
  }

  private updateListToStorage() {
    let activeUser: UserModel = this._session.getActiveUser();
    activeUser.tasks = this.tasks$.value;

    this._user.editOne(activeUser);
    this._session.upDateSessionData(activeUser);
  }

  //==================================================
  // Emiter
  //==================================================

  private emitNewTasksList(tasksList: TaskModel[]) {
    this.tasks$.next(tasksList);
  }
}
