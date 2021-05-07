import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  details:any
  token:any;

  data = {
    contenu:"",
    voiture:{
      idVoiture: ""
    },
    nomUtilisateur: ""
  };

  user: any;

  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;


  constructor(private service:VehiculeService, private route: ActivatedRoute, 
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('auth-token');
    this.user = JSON.parse(sessionStorage.getItem('auth-user'))     
    this.findDetails(this.route.snapshot.params.idVoiture);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  findDetails(idVoiture:any){
    this.service.getDetails(idVoiture, this.token)
    .subscribe(data=>{
      if(data.status == 200){
        this.details = data.body;
      }
    }, err=>{
      console.log(err);
    })
  }

  saveComment(){
    this.data.voiture.idVoiture = this.details.voiture[0].idVoiture
    this.data.nomUtilisateur = this.user.username
    this.service.comment(this.data, this.token).subscribe(res =>{
      this.ngOnInit();
    }, err=>{
      console.log(err);
    })
  }

}
