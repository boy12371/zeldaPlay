import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

import { Utils } from '../utils/utils';

@Entity()
export class User {
  idStart = '00U';

  @PrimaryColumn({
    type: 'text',
    unique: true
  })
  id: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text', nullable: true })
  recovery_token: string;

  @Column({ type: 'text', unique: true, nullable: true })
  loginToken: string;

  @Column({ type: 'text', unique: true, nullable: true })
  googleToken: string;

  @BeforeInsert()
  createId() {
    this.id = this.idStart + Utils.makeId(9);
  }
}
