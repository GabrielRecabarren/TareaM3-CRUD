import { IError } from './error.interface';
//Principio Solid :Responsabilidad Unica --> Separar los helpers de errores cada uno con su propio contexto.

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;

  constructor(message: string) {
    super(message);
  }
  serializeErrors(): IError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status
    };
  }
}
