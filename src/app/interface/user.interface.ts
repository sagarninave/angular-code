export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  address: IUserAddress;
}

export interface IUserAddress {
  id: string;
  first_line: string;
  second_line: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pin_code: number;
}
