import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { FollowService } from 'src/app/services/follow.service';
import { MensajesService } from 'src/app/services/mensajes.service';
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
  public follows: boolean;

  constructor(private router: Router,
              private publicService: PublicService,
              private followService: FollowService,
              private usuarioService: UserService,
              private mensajeService: MensajesService) {
    this.usuarioLogged = this.publicService.getUserLogged();
  }

  ngOnChanges(): void {
    this.checkIsItMe();
  }


  ngOnInit(): void {
    this.followService.checkActivityFollows(this.usuario.id, this.publicService.getUserLogged().id).subscribe({
      next: res => {if(res) {this.follows = true}}
    });

  }

  follow(): void {
    this.followService.setFollow(this.usuario.id, this.publicService.getUserLogged().id).subscribe();
    this.follows = true;
  }

  unfollow(): void {
    this.followService.unsetFollow(this.usuario.id, this.publicService.getUserLogged().id).subscribe();
    this.follows = false;
  }
  deleteAccount(): void {
    this.usuarioService.deleteUser(this.usuario.id);
    this.router.navigateByUrl('/home')
  }

  public generarChat() {
    this.mensajeService.generarChat(this.publicService.getUserLogged().id, this.usuario.id).subscribe();
    this.mensajeService.generarChat(this.usuario.id, this.publicService.getUserLogged().id).subscribe();
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }


  private checkIsItMe(): void {
    if(this.usuario.id === this.usuarioLogged.id)
      {this.isItMe = true}
    else
      {this.isItMe = false}
  }
}
