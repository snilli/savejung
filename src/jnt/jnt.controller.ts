import {Body, Controller, Post, Req} from '@nestjs/common'
import {JntService} from './jnt.service'
import {inspect} from 'util'

@Controller('jnt')
export class JntController {
    constructor(private readonly: JntService) {}

    @Post('/webhook')
    index2(@Req() request: Request, @Body() body: any): Record<string, unknown> {
        console.log(inspect(body, {showHidden: false, depth: null}))
        const data = body?.logistics_interface as Record<string, unknown>

        if (!data) {
            return {
                logisticproviderid: 'JNT',
                responseitems: [
                    {
                        reason: '',
                        success: 'false',
                    },
                ],
            }
        }

        return {
            logisticproviderid: body.eccompanyid,
            responseitems: [
                {
                    billcode: data.billcode,
                    txlogisticid: data.txlogisticid,
                    reason: '',
                    success: 'true',
                },
            ],
        }
    }
}

/*
{
  eccompanyid: 'JT',
  data_digest: 'ZWQyZmQwMGY2ZjZkYTFkOTE3ZmY3YmY0NDZmYWYyZjA=',
  msg_type: 'TRACKQUERY',
  logistics_interface: {
    id: '8600001198561614597499627',
    logisticproviderid: 'SELLCONNECT',
    billcode: '860000119856',
    txlogisticid: 'order13',
    traces: [
      {
        scanType: 'Create order',
        scanTime: '2021-03-01 18:18:19',
        entrySite: null,
        deliveryName: null,
        deliveryTel: null,
        driverName: null,
        driverTel: null,
        weight: 0,
        remark: null,
        signer: null,
        city: null,
        siteType: null,
        siteName: null,
        difficultiesType: null
      }
    ]
  }
}

 */
