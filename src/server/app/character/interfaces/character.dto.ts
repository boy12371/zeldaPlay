import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

import { AttributeDTO } from '@Character/interfaces/attribute.dto';
import { SaveDTO } from '@Character/interfaces/save.dto';
import { SkillDTO } from '@Character/skill/interfaces/skill.dto';

export class CharacterDTO {
  @ApiModelPropertyOptional()
  readonly id?: string;

  @ApiModelProperty()
  readonly level: number;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly race: string;

  @ApiModelPropertyOptional()
  readonly subRace?: string;

  @ApiModelProperty({ type: [AttributeDTO] })
  readonly attributes: AttributeDTO[];

  @ApiModelProperty()
  readonly health: number;

  @ApiModelProperty()
  readonly maxHealth: number;

  @ApiModelProperty()
  readonly magic: number;

  @ApiModelProperty()
  readonly maxMagic: number;

  @ApiModelProperty()
  readonly exp: number;

  @ApiModelPropertyOptional()
  readonly craftOne?: string;

  @ApiModelPropertyOptional()
  readonly craftTwo?: string;

  @ApiModelPropertyOptional()
  readonly performCust?: string;

  @ApiModelPropertyOptional()
  readonly profession?: string;

  @ApiModelPropertyOptional({ type: [SkillDTO] })
  readonly skills?: SkillDTO[];

  @ApiModelPropertyOptional({ type: [SkillDTO] })
  readonly weaponSkills?: SkillDTO[];

  @ApiModelPropertyOptional({ type: [SkillDTO] })
  readonly magicSkills?: SkillDTO[];

  @ApiModelProperty({ type: [SaveDTO] })
  readonly savingThrows: SaveDTO[];
}
