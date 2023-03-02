import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    console.log(value, val, '************');

    if (isNaN(val)) {
      throw new BadRequestException(
        `Validation failed."${value}"is not an integer`,
      );
    }
    return value;
  }
}
