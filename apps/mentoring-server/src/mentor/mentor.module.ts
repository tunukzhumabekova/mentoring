import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MentorModuleBase } from "./base/mentor.module.base";
import { MentorService } from "./mentor.service";
import { MentorController } from "./mentor.controller";
import { MentorResolver } from "./mentor.resolver";

@Module({
  imports: [MentorModuleBase, forwardRef(() => AuthModule)],
  controllers: [MentorController],
  providers: [MentorService, MentorResolver],
  exports: [MentorService],
})
export class MentorModule {}
