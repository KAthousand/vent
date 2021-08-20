//imports
import { Column, Entity } from 'typeorm';
// import model to extend from
import Model from './Model';

// Define the entity
@Entity('posts')
export default class Post extends Model {
  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column()
  userId!: string;
}
