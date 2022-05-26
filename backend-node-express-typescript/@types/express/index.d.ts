declare namespace Express {
    export interface Request {
        pagination: {
            start: number;
            size: number;
        };
    }
  }
