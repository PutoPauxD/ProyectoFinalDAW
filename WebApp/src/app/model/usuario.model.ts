export interface UsuarioModel{
  id: number;
  email: string;
  password: string;

  username: string;
  name: string;
  descripcion?: string;

  seguidos: number;
  seguidores: number;

  numeroPosts: number;

  diaUnion: Date;
  cumpleanios: Date;

  profpicture?: string;
  headerpicture?: string;
}
