import { gql } from "apollo-angular";

const USER_DATA = gql`
query {
    User{
        id,
        username,
        email,
        birthdate,
        adress{
            id,
            city,
            postcode,
            street,
            housenumber
        }
    }
}`

export { USER_DATA };