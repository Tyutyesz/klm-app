import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Observable} from "rxjs";

const USERS = gql `
  query {
    getAllUsers {
      name
      age
      married
    }
  }
`;

const BOOKING = gql `
  query getBooking($bookingCode: String!) {
  getBooking(bookingCode: $bookingCode) {
    bookingCode
    contactDetails {
      address
    }
    itinerary {
      type
      connections {
        id
        duration
        origin {
          IATACode
          name
          city {
            IATACode
            name
            country {
              code
              name
            }
          }
        }
        destination {
          IATACode
          name
        }
        segments {
          id
          type
          informational
          departFrom {
            IATACode
            name
          }
          arriveOn {
            IATACode
            name
          }
          marketingFlight {
            number
            carrier {
              code
              name
            }
            status {
              code
              name
            }
            numberOfStops
            sellingClass {
              code
            }
            operatingFlight {
              number
              duration
              flown
              checkInStart
              localCheckInStart
              checkInEnd
              localCheckInEnd
              scheduledArrival
              localScheduledArrival
              scheduledDeparture
              localScheduledDeparture
              equipment {
                code
                name
              }
            }
          }
        }
      }
    }
    passengers {
      id
      firstName
      lastName
      title {
        code
        name
      }
    }
  }
}

`


@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor( private apollo: Apollo) { }

  getUsers(): Observable<any>{
    return this.apollo.watchQuery<any>({
      query: USERS,
    }).valueChanges;
  }

  getBooking(): Observable<any>{
    return this.apollo.watchQuery<any>({
      query: BOOKING,
      variables: {
        "bookingCode": "PZIGZ3"
      }
    }).valueChanges;
  }
}
