import { Injectable } from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: TaskModel[];

  constructor() {
    this.tasks = this.getAllTasks();
  }

  //==================================================
  // Shared methods.
  //==================================================

  public addOne(task: TaskModel) {
    this.tasks.push(task);

    this.updateListToStorage();
  }

  public getAllTasks(): TaskModel[] {
    return localStorage.getItem('tasks') ?
      JSON.parse(localStorage.getItem('tasks')) : [];
  }

  public addTestTasks() {
    this.addOne(new TaskModel(
      'Terminar la capacitación',
      'Bancolombia',
      '29/5/2018',
      'Lorem ipsum dolor sit ament'
    ));
    this.addOne(new TaskModel(
      'Tarea de prueba 1',
      'Bancolombia',
      '29/5/2018',
      'Lorem ipsum dolor sit ament'
    ));
    this.addOne(new TaskModel(
      'Tarea de prueba 2',
      'Bancolombia',
      '29/5/2018',
      'Lorem ipsum dolor sit ament'
    ));
    this.addOne(new TaskModel(
      'Tarea de prueba 3',
      'Bancolombia',
      '29/5/2018',
      'Lorem ipsum dolor sit ament'
    ));
  }

  //==================================================
  // Local methods.
  //==================================================

  private updateListToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
