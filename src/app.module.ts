import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
