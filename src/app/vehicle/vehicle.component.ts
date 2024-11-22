import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles: any=[];
  term:string="";

  column:string="";
  order:string="";

 

  limit:number=0;
  page:number=0;

  constructor( private _vehicleService:VehicleService) {

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internet server errror");
      }
    )
  }
  filter(){
    this._vehicleService.getFilterVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internet server errror");
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internet server errror");
      }
    )
  }

  pagination(){
    this._vehicleService.getPagedVehicles(this.limit , this.page).subscribe(
      (data:any)=>{
       this.vehicles=data;
      },
      (err:any)=>{
        alert("internet server errror");
      }

    )
     
    }
    delete(id:string){
      this._vehicleService.deleteVehicle(id).subscribe(
        (data:any)=>{
         alert('deleted successfully!!');
         location.reload();
        },
        (err:any)=>{
          alert("internet server errror");
        }
      )
  
  }

















  
  
  }


  
  