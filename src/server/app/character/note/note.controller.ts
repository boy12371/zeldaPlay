import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { Note } from '../../entities/note.entity';
import { NoteDTO } from './interfaces/note.dto';
import { NoteService } from './note.service';

@ApiUseTags('character', 'note')
@Controller('characters/note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get(':charId')
  async getNotes(
    @Param('charId') charId: string
  ): Promise<Array<Partial<Note>>> {
    return this.noteService.getNotes(charId);
  }

  @Post(':charId')
  async newNote(
    @Body() inNote: NoteDTO,
    @Param('charId') charId: string
  ): Promise<Note> {
    return this.noteService.saveNote(inNote, charId);
  }
}
