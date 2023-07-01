import { Module } from '@nestjs/common';
import { AccountPersistenceModule } from './modules/account-persistance/account-persistence.module';
import { AccountWebModule } from './modules/account-web/account-web.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'data', 'data.sqlite'),
      logging: true,
      autoLoadEntities: true,
    }),
    AccountPersistenceModule,
    AccountWebModule,
  ],
})
export class AppModule {}
