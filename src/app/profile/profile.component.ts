import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles: any=[];

  constructor(private _profilesService:ProfileService){
    _profilesService.getProfiles().subscribe(
      (data:any)=>{
        this.profiles = data;

      },
      (err:any)=>{
        alert('internal server error')
      }
    )
  }

}
