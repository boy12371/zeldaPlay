import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Character } from '#Models/character';
import { MaterialModule } from '#Shared/material/material.module';
import { MessageService } from '#Shared/messages/message.service';
import { NoteComponent } from './note.component';
import { NoteService } from './note.service';

const messageServiceStub: Partial<MessageService> = {
  add(message) {
    return message;
  }
};

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, MaterialModule],
      declarations: [NoteComponent],
      providers: [
        { provide: MessageService, useValue: messageServiceStub },
        NoteService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.character = new Character();
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle functions', () => {
    test('expand notes', () => {
      const originals = [];
      for (const show of component.showNotes) {
        originals.push(show);
      }
      for (let i = 0; i < component.showNotes.length; i++) {
        component.expandNotes(i);
        expect(component.showNotes[i]).not.toBe(originals[i]);
      }
    });
    test('makeNewNote', () => {
      const newNote = component.newNote;
      component.makeNewNote();
      expect(component.newNote).not.toBe(newNote);
      component.makeNewNote();
      expect(component.newNote).toBe(newNote);
    });
  });

  describe('adding notes', () => {
    test('make new regular note', () => {
      component.newMsg = 'my message';
      component.important = false;
      component.addNote();
      expect(component.character.notes).toHaveLength(1);
      component.character.notes.pop();
    });
    test('make new important note', () => {
      component.newMsg = 'my important message';
      component.important = true;
      component.addNote();
      expect(component.character.importantNotes).toHaveLength(1);
      component.notes.pop();
    });
  });
});
