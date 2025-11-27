//User Entity
import { Profile } from 'src/profile/profile.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users') // ← renamed table
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 24, unique: true, nullable: false })
  username: string;
  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;
  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: ['insert'],
    // eager: true,
  })
  @JoinColumn()
  profile?: Profile; //Marked as Optional
  @CreateDateColumn() //Sets the value of the Created At Field when Created
  createdAT: Date; //Record Date and Time when a User was Created.
  @UpdateDateColumn()
  updatedAT: Date;
  @DeleteDateColumn()
  deletedAT: Date;
}
