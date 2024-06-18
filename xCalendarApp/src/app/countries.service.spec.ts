import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Country } from './graphql-models/Country';

// write a GraphQL query that asks for information (name , capital, etc..) about all countries
const COUNTRIES = gql`
  {
    countries {
      name
      capital
      currency
      emoji
      phone
      continent {
        name
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private apollo: Apollo) {}

  getCountries(): Observable<Country[]> {
    return this.apollo
      .watchQuery<any>({
        query: COUNTRIES,
      })
      .valueChanges.pipe(map((result) => result.data.countries));
  }
}
