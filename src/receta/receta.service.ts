import { Injectable } from '@nestjs/common';

@Injectable()
export class RecetaService {
    getRecetas(): string {
        return 'Hello World!';
      }
}
