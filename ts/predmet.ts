class Predmet {
  private _imeProfesora: string;
  private _prezimeProfesora: string;
  private _idPredmeta: number;
  private _nazivPredmeta: string;

  constructor(
    imeProfesora: string,
    prezimeProfesora: string,
    idPredmeta: number,
    nazivPredmeta: string
  ) {
    this.imeProfesora = imeProfesora;
    this.prezimeProfesora = prezimeProfesora;
    this.idPredmeta = idPredmeta;
    this.nazivPredmeta = nazivPredmeta;
  }

  public get imeProfesora(): string {
    return this._imeProfesora;
  }

  public set imeProfesora(value: string) {
    this._imeProfesora = value;
  }

  public get prezimeProfesora(): string {
    return this._prezimeProfesora;
  }

  public set prezimeProfesora(value: string) {
    this._prezimeProfesora = value;
  }

  public get idPredmeta(): number {
    return this._idPredmeta;
  }

  public get nazivPredmeta(): string {
    return this._nazivPredmeta;
  }

  public set nazivPredmeta(value: string) {
    this._nazivPredmeta = value;
  }

  public set idPredmeta(value: number) {
    this._idPredmeta = value;
  }
}
