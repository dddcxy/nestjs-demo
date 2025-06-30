import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

// 存放守卫，用于权限控制、认证等。
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return Boolean(request.headers['authorization']); // 简单示例
  }
}
