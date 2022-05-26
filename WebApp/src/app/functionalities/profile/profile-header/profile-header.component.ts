import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { FollowService } from 'src/app/services/follow.service';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnChanges {

  @Input() public usuario: UsuarioModel;
  public usuarioLogged: UsuarioModel;
  public isItMe: boolean;

  constructor(private router: Router, private publicService: PublicService, private followService: FollowService, private usuarioService: UserService) {
    this.usuarioLogged = this.publicService.getUserLogged();
  }

  ngOnChanges(): void {
    this.checkIsItMe();
  }


  follow() {
    this.followService.setFollow(this.usuario.id, this.usuarioLogged.id).subscribe();
  }

  deleteAccount() {
    this.usuarioService.deleteUser(this.usuario.id);
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  private checkIsItMe() {
    if(this.usuario.id === this.usuarioLogged.id)
      {this.isItMe = true}
    else
      {this.isItMe = false}
  }
}
