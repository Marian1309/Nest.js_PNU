import { Book as BookModel } from '@prisma/client';

export type BookResponse =
  | {
      data: BookModel;
      message?: string;
    }
  | {
      message: string;
      sattus: number;
    };
