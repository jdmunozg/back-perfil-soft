import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './ormconfig';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),

    ApiModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
