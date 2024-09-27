import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LessonModuleBase } from "./base/lesson.module.base";
import { LessonService } from "./lesson.service";
import { LessonController } from "./lesson.controller";
import { LessonResolver } from "./lesson.resolver";

@Module({
  imports: [LessonModuleBase, forwardRef(() => AuthModule)],
  controllers: [LessonController],
  providers: [LessonService, LessonResolver],
  exports: [LessonService],
})
export class LessonModule {}
