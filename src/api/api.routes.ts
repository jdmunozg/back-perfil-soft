import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';

export const apiRoutes = [
  {
    path: 'usuario',
    module: UsuarioModule,
  },
  {
    path: 'rol',
    module: RolModule,
  },
];
