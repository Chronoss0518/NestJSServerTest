import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, Logger } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as Transport from 'winston-transport';

@Injectable()
export class AccessLoggerService implements LoggerService {
  logger: Logger;

  constructor() {
    /** ローテーション */
    const logTransFormStream = new DailyRotateFile({
      level: 'info',
      dirname: `log/access/`,
      filename: `log_%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxFiles: '1d',
    });

    // ログローテンションするタイミングのイベント
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logTransFormStream.on('rotate', () => {});

    const t: Transport[] = [logTransFormStream];

    this.logger = createLogger({
      format: format.combine(format.timestamp(), format.json()),
      transports: t,
    });
  }

  log(message: string) {
    this.logger.info(message);
  }
  error(message: string) {
    this.logger.error(message);
  }
  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }
}