import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GET_USER_DATA,ADD_USER_DATA } from "../graphql/graphql.queries";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: any[] = [];

  constructor(private apollo: Apollo) {}

  private getNextId(): number {
    return this.users.length === 0
      ? 1
      : Math.max(...this.users.map((users) => users.id)) + 1;
  }

  getUserByEmail(email: string) {
    return this.apollo.watchQuery({
      query: GET_USER_DATA,
      variables: {
        email: email,
      },
    }).valueChanges;
  }

  addUser(email: string, name: string, password: string, phoneNumber: string) {
    return this.apollo.mutate({
      mutation: ADD_USER_DATA,
      variables: {
        id: this.getNextId(),
        email,
        name,
        password,
        phoneNumber,
      },
    });
  }
}
