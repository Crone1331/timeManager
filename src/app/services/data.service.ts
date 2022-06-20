import {Injectable} from '@angular/core';
import {IData, Status} from 'src/app/params';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private taskData: IData[] = [];
  constructor() {
    this.taskData = this.getTaskList();
  }

  public getTaskList(): IData[] {
    return JSON.parse(localStorage.getItem('taskData') || '[]');
  }

  public removeTask(id: string) {
    this.taskData = this.taskData.filter((task) => {return task.id !== id})
    this.updateDataTask();
    console.log(this.taskData);
  }

  public setNewTask(task: IData) {
    const generateNewId = this.makeId();
    do {
      task.id = generateNewId;
    } while (!task.id && this.checkIdUniq(generateNewId))

    this.taskData.push(task);
    this.updateDataTask();
    console.log(this.taskData);
  }

  public changeStatusTask(id: string, status: Status) {
    this.taskData.forEach(elem => {
      if (elem.id === id) {
        elem.status = status;
      }
    })
    this.updateDataTask();
  }

  private updateDataTask(): void {
    localStorage.setItem('taskData', JSON.stringify(this.taskData))
  }

  private makeId(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  private checkIdUniq(id: string): boolean {
    let statusUniq: boolean = true;
    this.taskData.forEach(elem => {
      elem.id === id ? statusUniq = true : statusUniq = false
    })
    return statusUniq;
  }
}
