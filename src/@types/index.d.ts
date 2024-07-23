declare global {
    namespace Express {
      interface Request {
        validatedUser: User;
      }
    }
  }
  
  export interface User {
    name: string;
    surname: string;
    username: string;
    password?: string;
    classes_enrolled: string[];
    accessToken: string;
  }