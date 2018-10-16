import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Note } from '@Entity/note.entity';
import { NoteService } from './note.service';

const mockRepo = {};

describe('NoteService', () => {
  let service: NoteService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoteService,
        {
          useValue: mockRepo,
          provide: getRepositoryToken(Note)
        }
      ]
    }).compile();
    service = module.get<NoteService>(NoteService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
