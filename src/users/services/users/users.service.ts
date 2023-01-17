import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUser = [
    { name: 'adin17', email: 'dindin@mail.com' },
    { name: 'ivacu', email: 'iva@mail.com' },
    { name: 'fam', email: 'fam@mail.com' },
  ];

  fetchUser() {
    return this.fakeUser;
  }

  createUser(userDetail: createUserType) {
    this.fakeUser.push(userDetail);
    return {};
  }

  fetchUserById(id : number){
    return {id: 1, name: 'fam', email: 'fam@mail.com' }
  }
}
