import {Component, OnInit} from '@angular/core';
import {IData, Status, testData} from 'src/app/params';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: IData[] = testData;
  public inputText: string = '';

  constructor(private dataService: DataService) {}

  //  this.data = this.dataService.getTaskList(); TODO Observer

  public ngOnInit(): void {
    this.data = this.dataService.getTaskList();
  }

  public addNewTask(): void {
    if (this.inputText.length > 0) {
      const task: IData = {
        id: '',
        taskName: this.inputText,
        endData: '22.22.23',
        status: 'inProgress'
      }
      this.dataService.setNewTask(task)
      this.data = this.dataService.getTaskList();
      this.inputText = '';
    }
  }

  public editTaskStatus(id: string, status: Status): void {
    this.dataService.changeStatusTask(id, status)
    this.data = this.dataService.getTaskList();
  }

  public removeTask(id: string): void {
    this.dataService.removeTask(id);
    this.data = this.dataService.getTaskList();
  }
}
