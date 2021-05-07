import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  public vehicules:any;
  token: any;
  liste: any;
  show: boolean = false;

  constructor(private service:VehiculeService, private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('auth-token');
    console.log('token', this.token)
    this.getAllVehicules()
  }

  getAllVehicules(){
    this.service.getListeVoitures(this.token)
    .subscribe(data =>{
      if(data.status == 200){
        this.vehicules = data.body;
      }
    }, err=>{
      console.log(err)
    });
  }

  details(index : any){
    this.router.navigate(['/detail-voiture/' + index])
  }


}
