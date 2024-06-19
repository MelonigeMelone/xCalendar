import { gql } from 'apollo-angular';

const GET_USER_DATA = gql`
  query getUserByName($name: String!) {
    user(name: $name) {
      id
      email
      name
      password
    }
  }
`;

const ADD_USER_DATA = gql`
  mutation addUser($id: String!, $email: String!, $name: String!, $password: String!) {
    addUser(id: $id, email: $email, name: $name, password: $password)
    id
    email
    name
    password
  }
`;

export { GET_USER_DATA, ADD_USER_DATA };
