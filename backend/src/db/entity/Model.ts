// imports
import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
} from 'typeorm';

// create an abstract class that extends from BaseEntity from typeOrm
export default abstract class Model extends BaseEntity {
  // Generate a unique id
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  createdDateTime!: Date;

  @UpdateDateColumn()
  updatedDateTime!: Date;

  @DeleteDateColumn()
  deletedDateTime!: Date;

  @VersionColumn()
  version!: number;
}
