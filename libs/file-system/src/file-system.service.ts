import {Injectable} from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class FileSystemService {
    exists(dirName: string): boolean {
        return fs.existsSync(path.join(__dirname, dirName))
    }

    mkDir(dirName: string): void {
        fs.mkdirSync(path.join(__dirname, dirName))
    }

    writeFile(fileName: string, file: any): void {
        fs.writeFileSync(path.join(__dirname, fileName), file)
    }

    existsAndMkDir(dirName): void {
        !this.exists(dirName) && this.mkDir(dirName)
    }

    existsAndWriteFile(dirName: string, file: any): void {
        !this.exists(dirName) && this.writeFile(dirName, dirName)
    }
}
