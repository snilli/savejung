import {Module} from '@nestjs/common'
import {FileSystemService} from './file-system.service'
import {RequestModule} from '../../request/src'

@Module({
    imports: [RequestModule],
    providers: [FileSystemService],
    exports: [FileSystemService],
})
export class FileSystemModule {}
