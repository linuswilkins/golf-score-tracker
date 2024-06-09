export default class Hole {
  private holeNumber: number;
  private par?: number;

  constructor(holeNumber: number, par?: number) {
    this.holeNumber = holeNumber;
    this.par = par;
  }

  getHoleNumber(): number {
    return this.holeNumber;
  }

  getPar(): number {
    return this.par ? this.par : 0;
  }

  setPar(par: number): void {
    this.par = par;
  }
}
