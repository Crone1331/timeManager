import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger';
export interface IAlert {
  type: AlertType;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public alert$ = new Subject<IAlert>();

  public succes(text: string) {
    this.alert$.next({type: 'success', text});
  }

  public warning(text: string) {
    this.alert$.next({type: 'warning', text});
  }

  public danger(text: string) {
    this.alert$.next({type: 'danger', text});
  }
}
