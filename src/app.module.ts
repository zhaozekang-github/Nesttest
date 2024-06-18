import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TeaModule } from './tea/tea.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'nest',
      retryDelay: 10,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CoffeesModule,
    TeaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
