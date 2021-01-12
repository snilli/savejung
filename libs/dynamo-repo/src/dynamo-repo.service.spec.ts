import { Test, TestingModule } from '@nestjs/testing'
import { DynamoRepoService } from './dynamo-repo.service'

describe('DynamoRepoService', () => {
    let service: DynamoRepoService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DynamoRepoService],
        }).compile()

        service = module.get<DynamoRepoService>(DynamoRepoService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
