import { environment } from "src/environments/environment";
export const apiConstants = {
  getAllUsers: `${environment.baseUrl}/users`,
  getUserAddress: `${environment.baseUrl}/user_address`,
  signupUser: `${environment.baseUrl}/users`,
};
