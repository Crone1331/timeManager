import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
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
