import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(202)
  Cats(@Res() response): any {
    return response.status(200).json({ msg: 'hello world of cats' });
  }
}
