import { Test, TestingModule } from '@nestjs/testing';

import { SkillController } from '@Character/skill/skill.controller';
import { SkillService } from '@Character/skill/skill.service';

const SkillServiceStub = {};

describe('Skill Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SkillController],
      providers: [{ useValue: SkillServiceStub, provide: SkillService }]
    }).compile();
  });
  it('should be defined', () => {
    const controller: SkillController = module.get<SkillController>(
      SkillController
    );
    expect(controller).toBeDefined();
  });
});
