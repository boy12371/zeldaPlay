import 'reflect-metadata';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { join } from 'path';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rootPath = join(__dirname, '../client');
  app.useStaticAssets(rootPath);

  const options = new DocumentBuilder()
    .setTitle('ZeldaPlay')
    .setDescription('The zeldaplay API description')
    .setVersion('1.0')
    .setSchemes('https')
    .setContactEmail('jmcdo29@gmail.com')
    .setHost('zeldaplay.herokuapp.com')
    .setLicense(
      'MIT',
      'https://github.com/jmcdo29/zeldaPlay/blob/master/LICENSE'
    )
    .addTag('character')
    .addTag('weapon')
    .addTag('user')
    .addTag('spell')
    .addTag('skill')
    .addTag('note')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);

  await app.listen(process.env.PORT, () => {
    console.log(`Application stated on ${process.env.PORT}.`);
  });
}

bootstrap();
