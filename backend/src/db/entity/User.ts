// imports
import { Column, Entity, Unique } from 'typeorm';
// import Model to extend from
import Model from './Model';

// define the user entity
@Entity('users')
@Unique(['account'])
export default class User extends Model {
  @Column({ name: 'account' })
  account!: string;
  unique!: true;

  @Column()
  displayName!: string;

  @Column({ select: false })
  password!: string;
}
