import {Module} from '@nestjs/common'
import {JntService} from './jnt.service'
import {JntController} from './jnt.controller'

@Module({
    providers: [JntService],
    controllers: [JntController],
})
export class JntModule {
}
