import { gql } from "apollo-angular";

const GET_USER_DATA = gql`
  query getUserByName($name: String!) {
    user(name: $name) {
      id
      email
      name
      password
      phoneNumber
    }
  }
`;

const ADD_USER_DATA = gql`
mutation createUser($id: String!, $email: String!, $name: String!, $password: String!, $phoneNumber:Number!){
    createUser(id: $id, email: $email, name: $name, password: $password, phoneNumber:$phoneNumber)
    id
    email
    name
    password
    phoneNumber
}
`;

export { GET_USER_DATA,ADD_USER_DATA };