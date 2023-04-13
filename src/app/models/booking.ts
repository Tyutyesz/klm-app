
interface City {
  IATACode: string;
  name: string;
  country: {
    code: string;
    name: string;
  };
}

interface Airport {
  IATACode: string;
  name: string;
  city: City;
}

interface FlightSegment {
  id: number;
  type: string;
  informational: boolean;
  departFrom: Airport;
  arriveOn: Airport;
  marketingFlight: {
    number: string;
    carrier: {
      code: string;
      name: string;
    };
    status: {
      code: string;
      name: string;
    };
    numberOfStops: number;
    sellingClass: {
      code: string;
    };
    operatingFlight: {
      number: string;
      carrier: {
        code: string;
        name: string;
      };
      duration: string;
      flown: boolean;
      checkInStart: string;
      localCheckInStart: string;
      checkInEnd: string;
      localCheckInEnd: string;
      scheduledArrival: string;
      localScheduledArrival: string;
      scheduledDeparture: string;
      localScheduledDeparture: string;
      arrivalTerminal: {
        name: string;
      };
      cabin: {
        code: string;
        name: string;
      };
      equipment: {
        code: string;
        name: string;
      };
    };
  };
}

interface Connection {
  id: number;
  duration: string;
  origin: Airport;
  destination: Airport;
  segments: FlightSegment[];
}

interface Itinerary {
  type: string;
  connections: Connection[];
}

interface EmailAddress {
  address: string;
}

interface Title {
  code: string;
  name: string;
}

interface Passenger {
  id: number;
  firstName: string;
  lastName: string;
  title: Title;
}

export interface Booking {
  bookingCode: string;
  contactDetails: EmailAddress[];
  itinerary: Itinerary;
  passengers: Passenger;
}
