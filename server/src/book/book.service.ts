import { Injectable } from '@nestjs/common';

import { Book } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

import { BookResponse } from './book.types';
import { CreateBookDto, UpdateBookDto } from './dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async books(params: { skip?: number; take?: number }): Promise<Book[]> {
    const { skip, take } = params;

    const books = await this.prisma.book.findMany({
      skip,
      take
    });

    return books;
  }

  async book(id: string): Promise<BookResponse> {
    const book = await this.prisma.book.findUnique({
      where: {
        id: +id
      }
    });

    if (!book) {
      return {
        message: `Book with id ${id} not found.`,
        sattus: 404
      };
    }

    return { data: book };
  }

  async createBook(data: CreateBookDto): Promise<BookResponse> {
    const createdBook = await this.prisma.book.create({
      data
    });

    return {
      message: `Book with id ${createdBook.id} successfully created`,
      data: createdBook
    };
  }

  async updateBook(params: {
    where: { id: number };
    data: UpdateBookDto;
  }): Promise<BookResponse> {
    const { where, data } = params;

    const existingBook = await this.prisma.book.findUnique({
      where
    });

    if (!existingBook) {
      return {
        message: `You can't update book with id ${where.id} because it not found.`,
        sattus: 404
      };
    }

    const updatedBook = await this.prisma.book.update({
      data,
      where
    });

    return {
      message: `Book with id ${updatedBook.id} successfully updated`,
      data: updatedBook
    };
  }

  async deleteBook(where: { id: number }): Promise<BookResponse> {
    const existingBook = await this.prisma.book.findUnique({
      where
    });

    if (!existingBook) {
      return {
        message: `You can't delete book with id ${where.id} because it not found.`,
        sattus: 404
      };
    }

    const deletedBook = await this.prisma.book.delete({
      where
    });

    return {
      message: `Book with id ${deletedBook.id} successfully deleted`,
      data: deletedBook
    };
  }
}
