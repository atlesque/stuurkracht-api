import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix("api");
  app.enableCors();
  await app.listen(process.env.PORT);
}

bootstrap();
