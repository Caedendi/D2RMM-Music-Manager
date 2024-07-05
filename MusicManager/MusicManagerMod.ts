import { AlternateSongsBuilder } from "./Builders/AlternateSongsBuilder";
import { IMusicBuilder } from "./Builders/Interfaces/IMusicBuilder";
import { MiscBuilder } from "./Builders/MiscBuilder";
import { TerrorZonesBuilder } from "./Builders/TerrorZonesBuilder";

export class MusicManagerMod {
  protected readonly builders: IMusicBuilder[];

  constructor() {
    this.builders.push(
      new AlternateSongsBuilder(),
      new TerrorZonesBuilder(),
      new MiscBuilder(),
    );
  }

  public build(): void {
    this.builders.forEach(builder => {
      builder.build();
    });
  }
}
