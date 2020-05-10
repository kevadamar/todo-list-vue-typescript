export interface Result<T> {
  success: boolean;
  message?: string;
  errorCode?: number;
  version?: string;
  data: T;
}
