import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BookModule } from 'src/book/book.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user.entity';

@Module({
  imports: [
    forwardRef(() => BookModule),
    // TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService], //  声明本模块可注入的服务
  exports: [UserService], // 允许其他模块通过 imports 依赖本模块并复用服务
})
export class UserModule {}
