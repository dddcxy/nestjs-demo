import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

// 应用的根模块，负责组织和导入其他功能模块。
@Module({
  imports: [UserModule], // 导入其他模块，表示 AppModule 依赖这些模块
  controllers: [AppController], // 指定该模块的控制器
  providers: [AppService], // 指定该模块的服务和其他提供者
})
export class AppModule {}
