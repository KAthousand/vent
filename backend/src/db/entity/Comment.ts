//imports
import { Column, Entity } from "typeorm";
// import model to extend from
import Model from "./Model";

// Define the entity
@Entity('comments')

export default class Comment extends Model{
  @Column()
  content!: string

  @Column()
  userId!: string

  @Column()
  postId!: string
}