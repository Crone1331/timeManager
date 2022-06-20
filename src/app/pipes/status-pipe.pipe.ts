import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let progressValue: string = ''
    switch (value) {
      case 'inProgress':
        progressValue = 'In Progress';
        break;
      case 'fail':
        progressValue = 'Fail';
        break;
      case 'success':
        progressValue = 'Success';
        break;

      default:
        progressValue = 'Unknown'
        break;
    }
    return progressValue
  }
}
