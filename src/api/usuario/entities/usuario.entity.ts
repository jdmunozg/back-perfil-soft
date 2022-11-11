import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  codigo: string;

  @Column()
  is_active: number;
}
