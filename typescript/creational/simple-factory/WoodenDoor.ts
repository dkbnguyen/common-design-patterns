import {Door} from './Door';

export class WoodenDoor implements Door {
  width: number;
  height: number;

  constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
  }

  public getWidth():number {
    return this.width;
  }

  public getHeight():number {
    return this.height;
  }
}
