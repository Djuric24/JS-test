/// <reference path="predmet.ts" />

class Ispit {
    private _predmet: Predmet;
    private _brojIndeksaStudenta: string;
    private _imeStudenta: string;
    private _prezimeStudenta: string;
    private _deoIspita: string;
    private _datum: string;
    private _brojBodova: number;



	constructor(predmet: Predmet, brojIndeksaStudenta: string, imeStudenta: string, prezimeStudenta: string, deoIspita: string, datum: string, brojBodova: number) {
		this._predmet = predmet;
        this._brojIndeksaStudenta = brojIndeksaStudenta;
		this._imeStudenta = imeStudenta;
		this._prezimeStudenta = prezimeStudenta;
		this._deoIspita = deoIspita;
		this._datum = datum;
		this._brojBodova = brojBodova;
	}
	

    /**
     * Getter predmet
     * @return {Predmet}
     */
	public get predmet(): Predmet {
		return this._predmet;
	}

    /**
     * Setter predmet
     * @param {Predmet} value
     */
	public set predmet(value: Predmet) {
		this._predmet = value;
	}


    /**
     * Getter brojIndeksaStudenta
     * @return {string}
     */
	public get brojIndeksaStudenta(): string {
		return this._brojIndeksaStudenta;
	}

    /**
     * Setter brojIndeksaStudenta
     * @param {string} value
     */
	public set brojIndeksaStudenta(value: string) {
		this._brojIndeksaStudenta = value;
	}


    /**
     * Getter imeStudenta
     * @return {string}
     */
	public get imeStudenta(): string {
		return this._imeStudenta;
	}

    /**
     * Setter imeStudenta
     * @param {string} value
     */
	public set imeStudenta(value: string) {
		this._imeStudenta = value;
	}

    /**
     * Getter prezimeStudenta
     * @return {string}
     */
	public get prezimeStudenta(): string {
		return this._prezimeStudenta;
	}

    /**
     * Setter prezimeStudenta
     * @param {string} value
     */
	public set prezimeStudenta(value: string) {
		this._prezimeStudenta = value;
	}

    /**
     * Getter deoIspita
     * @return {string}
     */
	public get deoIspita(): string {
		return this._deoIspita;
	}

    /**
     * Setter deoIspita
     * @param {string} value
     */
	public set deoIspita(value: string) {
		this._deoIspita = value;
	}

    /**
     * Getter datum
     * @return {string}
     */
	public get datum(): string {
		return this._datum;
	}

    /**
     * Setter datum
     * @param {string} value
     */
	public set datum(value: string) {
		this._datum = value;
	}

    /**
     * Getter brojBodova
     * @return {number}
     */
	public get brojBodova(): number {
		return this._brojBodova;
	}

    /**
     * Setter brojBodova
     * @param {number} value
     */
	public set brojBodova(value: number) {
		this._brojBodova = value;
	}


}