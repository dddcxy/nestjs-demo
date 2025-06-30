import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

// 存放管道，用于参数校验、数据转换等。
@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('参数必须为数字');
    }
    return val;
  }
}
