export interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picture?: string | File; // Optional since it might not be part of every form submission
  picturePath?: string; // Same as above
}

export interface LoginValues {
  email: string;
  password: string;
}
