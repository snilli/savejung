import {Test, TestingModule} from '@nestjs/testing'
import {JntService} from './jnt.service'

describe('JntHookService', () => {
    let service: JntService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [JntService],
        }).compile()
        service = module.get<JntService>(JntService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
