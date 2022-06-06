export interface UsuarioModel{
  id: number;
  email: string;
  password: string;

  username: string;
  name: string;
  descripcion?: string;
  role: number;

  seguidos: number;
  seguidores: number;

  numeroPosts: number;

  diaUnion: Date;
  cumpleanios: Date;

  profpicture?: string;
  headerpicture?: string;
}

export interface loginUsuarioModel{
  email: string;
  password: string;
}

export interface registerUsuarioModel{
  name: string;
  username: string;
  email: string;
  password: string;
  profpicture: string;
  cumpleanios: Date;
}
