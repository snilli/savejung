import {Module} from '@nestjs/common'
import {JntModule} from './jnt/jnt.module'

@Module({
    imports: [JntModule],
})
export class AppModule {
}
