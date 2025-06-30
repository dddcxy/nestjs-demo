import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// 自定义装饰器，简化控制器或服务的参数注入、权限校验等。
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
