export interface IResponse<T> {
  success: boolean;
  errors?: {
    code: number;
    message: {
      rule: string;
      field: string;
      message: string;
    };
  };
  data: T;
}
