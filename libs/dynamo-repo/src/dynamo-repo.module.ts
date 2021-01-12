import { Module } from '@nestjs/common'
import { DynamoRepoService } from './dynamo-repo.service'

@Module({
    providers: [DynamoRepoService],
    exports: [DynamoRepoService],
})
export class DynamoRepoModule {}
