import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../models/voiture.model';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-new-voiture',
  templateUrl: './new-voiture.component.html',
  styleUrls: ['./new-voiture.component.css']
})
export class NewVoitureComponent implements OnInit {

  form: any = {
    marque: null,
    numero: null,
    couleur: null,
    type: null
  };

  vehicule: Voiture = {
    marque: '',
    numero: '',
    couleur: '',
    type: ''

  };
  submitted = false;
  token: any;

  constructor(private service:VehiculeService, private route: Router) { }

  ngOnInit(): void {
  }

  saveVoiture(){
    const data = {
      marque: this.vehicule.marque,
      numero: this.vehicule.numero,
      couleur: this.vehicule.couleur,
      type: this.vehicule.type
    };
    this.service.createVoiture(data, this.token)
    .subscribe(response => {
      console.log(response);
      this.submitted = true;
      this.route.navigateByUrl('/voiture');
    }, err => {
      console.log(err);
    });
  }

  /* newVehicule(): void{
    this.submitted = false;
    this.vehicule = {
      marque: '',
      numero: '',
      couleur: '',
      type: ''
    };
  } */

}
