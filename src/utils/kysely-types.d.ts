import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Claims {
  id: Generated<number>;
  userId: string;
  createdAt: Generated<Timestamp>;
  fromStationId: string;
  toStationId: string;
  departureDate: Timestamp;
}

export interface Stations {
  id: string;
  name: string;
  code: string;
}

export interface Users {
  id: string;
  fromStationId: string | null;
  toStationId: string | null;
  firstName: Generated<string>;
  lastName: Generated<string>;
  address: Generated<string>;
  postalCode: Generated<string>;
  city: Generated<string>;
  identityNumber: Generated<string>;
  email: Generated<string>;
  phoneNumber: Generated<string>;
  ticketNumber: Generated<string>;
}

export interface DB {
  claims: Claims;
  stations: Stations;
  users: Users;
}
