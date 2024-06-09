export default class Player {
  private id: number;
  private name: string;

  constructor(id: number, name?: string) {
    this.id = id;
    name ? (this.name = name) : (this.name = "Player");
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  setId(id: number): void {
    this.id = id;
  }
}
