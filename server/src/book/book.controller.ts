import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';

import { Book as BookModel } from '@prisma/client';

import { BookService } from './book.service';
import { BookResponse } from './book.types';
import { CreateBookDto, UpdateBookDto } from './dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks(
    @Query('skip') skip?: string,
    @Query('take') take?: string
  ): Promise<BookModel[]> {
    return this.bookService.books({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined
    });
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<BookResponse> {
    return this.bookService.book(id);
  }

  @Post()
  async createBook(
    @Body()
    bookData: CreateBookDto
  ): Promise<BookResponse> {
    return this.bookService.createBook(bookData);
  }

  @Patch(':id')
  async updateBook(
    @Param('id') id: string,
    @Body()
    bookData: UpdateBookDto
  ): Promise<BookResponse> {
    return this.bookService.updateBook({
      where: { id: +id },
      data: bookData
    });
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<BookResponse> {
    return this.bookService.deleteBook({ id: +id });
  }
}
