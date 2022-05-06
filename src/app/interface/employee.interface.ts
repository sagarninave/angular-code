export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  gender: string;
  nationality: string;
  job: IEmployeeJob;
}

export interface IEmployeeJob {
  job_title: string;
  job_description: string;
  salary: number;
  location: string;
}
