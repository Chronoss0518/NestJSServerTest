import { Module } from '@nestjs/common';
import { AccessLoggerService } from './logger.service';

@Module({
    providers:[
        AccessLoggerService
    ],
    exports:[
        AccessLoggerService
    ]
})
export class LoggerModule {}
