import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 控制器，负责处理路由请求和响应。
// 通过 @Controller 装饰器定义路由前缀，方法上用 @Get、@Post 等装饰器定义接口。
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
