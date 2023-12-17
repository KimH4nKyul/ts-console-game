export class Player {
  constructor(private _nickname: string) {}

  changeName(nickname: string) {
    this._nickname = nickname
  }

  get nickname(): string {
    return this._nickname
  }
}
