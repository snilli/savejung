import { Module } from '@nestjs/common';
import { QueryDomService } from './query-dom.service';

@Module({
  providers: [QueryDomService],
  exports: [QueryDomService],
})
export class QueryDomModule {}
