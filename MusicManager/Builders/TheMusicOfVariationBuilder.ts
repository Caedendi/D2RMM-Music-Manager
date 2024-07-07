import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Sound } from "../Models/Sound";
import { BaseMusicBuilder } from "./BaseMusicBuilder";
import { IMusicBuilder } from "./Interfaces/IMusicBuilder";

export class TheMusicOfVariationBuilder extends BaseMusicBuilder implements IMusicBuilder {
  protected readonly pathAct1 = `act1\\`;
  protected readonly pathAct2 = `act2\\`;
  protected readonly pathAct3 = `act3\\`;

  constructor() {
    super();
  }

  public build(): void {
    // add options for each individual track
  }

  protected applyTown2LoopTimeOffset(): void {
    // WyRuZzaH mentions on the downloads page: "I highly recommend download also "The Sounds of Variation (Sounds)" for edited music Datablocks, for better looping.. More in Main Description."
    // But the only change from the vanilla files that is related to music is this.
    //
    // sounds.txt row 4809
    // entry music_town_2_hd
    // column "Block 1" changed: -1 => 5322552
    // time offset value for when it should start looping
    // other changes are sfx only, no music

    // todo
  }
}
