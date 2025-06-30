import { Injectable } from '@nestjs/common';

// 服务层，负责业务逻辑处理。
// 通过 @Injectable 装饰器声明，可被控制器等依赖注入。
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
