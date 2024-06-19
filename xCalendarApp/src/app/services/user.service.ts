import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER_DATA, ADD_USER_DATA } from '../graphql/graphql.queries';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private apollo: Apollo) {}

  private getNextId(): number {
    return this.users.length === 0 ? 1 : Math.max(...this.users.map(users => users.id)) + 1;
  }

  getUserByName(name: string) {
    return this.apollo.watchQuery({
      query: GET_USER_DATA,
      variables: {
        name: name,
      },
    }).valueChanges;
  }

  addUser(email: string, name: string, password: string) {
    return this.apollo.mutate({
      mutation: ADD_USER_DATA,
      variables: {
        id: this.getNextId(),
        email,
        name,
        password,
      },
    });
  }
}
