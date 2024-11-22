import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mails:any=[];

  constructor(private _mailsService:MailService) {
    _mailsService.getmails().subscribe(
      (data:any) => {
        this.mails = data;
      },
    (err:any)=>{
      alert('interneal server error ');
    }

    )
  }

}
