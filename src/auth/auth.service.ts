import { Injectable } from '@nestjs/common';
import { User, Bookmark } from "@prisma/client";

@Injectable({})
export class AuthService {
  signin() {
    return 'I am sign in';
  }

  signup() {
    return { message: 'I am sign up' };
  }
}
