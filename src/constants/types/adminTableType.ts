export interface Admin {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

export type Admins = Admin[]; // This defines an array of Admin objects
