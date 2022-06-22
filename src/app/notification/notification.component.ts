import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NotificationService} from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() delay = 5000;
  public text: string = '';
  public type = 'succes';

  private aSub!: Subscription;
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.aSub = this.notificationService.alert$.subscribe((alert) => {
      this.text = alert.text;
      this.type = alert.type;

      const timeOut = setTimeout(() => {
        clearTimeout(timeOut);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
