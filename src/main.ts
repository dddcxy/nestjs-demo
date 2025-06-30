import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { TransformInterceptor } from './interceptors/transform.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// 应用程序入口，负责启动 Nest 应用。
// 常见操作：端口监听、中间件挂载、全局拦截器/管道注册等。
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 创建 Nest 应用实例，传入根模块 AppModule。
  // app.useGlobalInterceptors(new TransformInterceptor()); // 全局拦截器

  const config = new DocumentBuilder()
    .setTitle('NestJS 示例 API')
    .setDescription('自动生成的接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000); // 启动应用并监听 3000 端口
}
bootstrap();
