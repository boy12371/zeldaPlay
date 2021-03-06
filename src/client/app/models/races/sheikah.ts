import { Attributes } from '#Enums/attributes.enum';
import { Skills } from '#Enums/skills.enum';
import { Weapons } from '#Enums/weapon-skills.enum';
import { Character } from '#Models/character';

export class Sheikah extends Character {
  constructor() {
    super();

    this.race = 'Sheikah';
    this.attributes[Attributes['Dexterity']].changeValue(2); // Dex Buff
    this.attributes[Attributes['Constitution']].changeValue(2); // Con Buff
    this.attributes[Attributes['Charisma']].changeValue(-2); // Cha Neg

    this.skills[Skills['Stealth']].racial = 4; // Stealth buff

    this.weaponSkills[Weapons['Naginata']].trained = true; // Naginatas

    this.skills[Skills['Acrobatics']].trained = true; // Acrobatics
    this.skills[Skills['CraftOne']].trained = true; // Craft 1
    this.skills[Skills['CraftTwo']].trained = true; // Craft 2
    this.skills[Skills['Escape Artist']].trained = true; // Escape Artist
    this.skills[Skills['Knowledge History']].trained = true; // Knowledge (History)
    this.skills[Skills['Knowledge Language']].trained = true; // Knowledge (Language)
    this.skills[Skills['Knowledge Local']].trained = true; // Knowledge (Local)
    this.skills[Skills['Knowledge Nobility']].trained = true; // Knowledge (Nobility)
    this.skills[Skills['Knowledge Plains']].trained = true;
    this.skills[Skills['Knowledge Religion']].trained = true; // Knowledge (Religion)
    this.skills[Skills['Perception']].trained = true; // Perception
    this.skills[Skills['Sense Motive']].trained = true; // Sense Motive
    this.skills[Skills['Sleight of Hand']].trained = true; // Sleight of Hand
    this.skills[Skills['Stealth']].trained = true; // Stealth
  }
}
