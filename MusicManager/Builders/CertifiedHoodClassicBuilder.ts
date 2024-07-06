import { FileConstants } from "../Constants/FileConstants";
import { SettingsConstants } from "../Constants/SettingsConstants";
import { Sound } from "../Models/Sound";
import { BaseMusicBuilder } from "./BaseMusicBuilder";
import { IMusicBuilder } from "./Interfaces/IMusicBuilder";

export class CertifiedHoodClassicBuilder extends BaseMusicBuilder implements IMusicBuilder {
  protected readonly pathAct1 = `act1\\`;

  protected readonly soundNameRogueEncampment = `music_town_1`;
  protected readonly fileNameRogueEncampment  = "town1";
  
  protected readonly soundNameTristram = `music_tristram`;
  protected readonly fileNameTristram  = "tristram";

  constructor() {
    super();
  }

  /**
   * Changes the Rogue Encampment's music to the Tristram music. Optionally switches both.
   */
  public build(): void {
    if (config.CertifiedHoodClassic as string !== SettingsConstants.disabled)
      return;

    let newRogueEncampment = new Sound(this.soundNameRogueEncampment, this.pathAct1, this.fileNameTristram, FileConstants.extensionFlac);
    this.modifySound(newRogueEncampment);

    if (config.CertifiedHoodClassic as string === "switch") {
      let newTristram = new Sound(this.soundNameTristram, this.pathAct1, this.fileNameRogueEncampment, FileConstants.extensionFlac);
      this.modifySound(newTristram);
    }
  }
}
