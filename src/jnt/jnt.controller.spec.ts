import {Test, TestingModule} from '@nestjs/testing'
import {JntController} from './jnt.controller'

describe('JntHookController', () => {
    let controller: JntController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [JntController],
        }).compile()

        controller = module.get<JntController>(JntController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
