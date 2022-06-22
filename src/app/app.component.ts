import {Component, OnInit} from '@angular/core';
import {IData, Status} from 'src/app/params';
import {DataService} from 'src/app/services/data.service';
import {NotificationService} from 'src/app/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: IData[] = [];
  public endDateValue: Date = new Date;
  public inputText: string = '';

  constructor(private dataService: DataService, private notificationService: NotificationService) {}

  //  this.data = this.dataService.getTaskList(); TODO Observer

  public ngOnInit(): void {
    this.data = this.dataService.getTaskList();
  }

  public addNewTask(): void {
    if (this.inputText.length > 0) {
      const task: IData = {
        id: '',
        taskName: this.inputText,
        endData: this.endDateValue,
        startData: new Date,
        status: this.endDateValue.toLocaleDateString() >= (new Date).toLocaleDateString() ? 'new' : 'fail'
      }
      this.dataService.setNewTask(task)
      this.data = this.dataService.getTaskList();
      this.inputText = '';
      this.notificationService.succes('Новая задача успешно добавлена.')
    }
    console.log(new Date, this.endDateValue);
  }

  public editTaskStatus(id: string, status: Status): void {
    this.dataService.changeStatusTask(id, status)
    this.data = this.dataService.getTaskList();
    this.notificationService.warning(`Статус задачи изменен на: ${this.setStatus(status)}.`)
  }

  public removeTask(id: string): void {
    this.dataService.removeTask(id);
    this.data = this.dataService.getTaskList();
    this.notificationService.danger('Задача удалена.')
  }

  private setStatus(value: string) {

    let progressValue: string = ''
    switch (value) {
      case 'inProgress':
        progressValue = 'В процессе';
        break;
      case 'fail':
        progressValue = 'Не выполнено';
        break;
      case 'success':
        progressValue = 'Выполнено';
        break;
      case 'new':
        progressValue = 'Новая';
        break;

      default:
        progressValue = 'Unknown'
        break;
    }
    return progressValue
  }

}

