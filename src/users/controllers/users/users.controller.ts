import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';
// import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUser() {
    return this.userService.fetchUser();
  }

  @Post()
  // @UsePipes(new ValidationPipe())
  createUser(@Body() userPayload: createUserDto) {
    console.log(userPayload);

    return this.userService.createUser(userPayload);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.userService.fetchUserById(id);
  }
}
