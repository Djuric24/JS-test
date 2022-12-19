class Predmet {
    constructor(imeProfesora, prezimeProfesora, idPredmeta, nazivPredmeta) {
        this.imeProfesora = imeProfesora;
        this.prezimeProfesora = prezimeProfesora;
        this.idPredmeta = idPredmeta;
        this.nazivPredmeta = nazivPredmeta;
    }
    get imeProfesora() {
        return this._imeProfesora;
    }
    set imeProfesora(value) {
        this._imeProfesora = value;
    }
    get prezimeProfesora() {
        return this._prezimeProfesora;
    }
    set prezimeProfesora(value) {
        this._prezimeProfesora = value;
    }
    get idPredmeta() {
        return this._idPredmeta;
    }
    get nazivPredmeta() {
        return this._nazivPredmeta;
    }
    set nazivPredmeta(value) {
        this._nazivPredmeta = value;
    }
    set idPredmeta(value) {
        this._idPredmeta = value;
    }
}
/// <reference path="predmet.ts" />
class Ispit {
    constructor(predmet, brojIndeksaStudenta, imeStudenta, prezimeStudenta, deoIspita, datum, brojBodova) {
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
    get predmet() {
        return this._predmet;
    }
    /**
     * Setter predmet
     * @param {Predmet} value
     */
    set predmet(value) {
        this._predmet = value;
    }
    /**
     * Getter brojIndeksaStudenta
     * @return {string}
     */
    get brojIndeksaStudenta() {
        return this._brojIndeksaStudenta;
    }
    /**
     * Setter brojIndeksaStudenta
     * @param {string} value
     */
    set brojIndeksaStudenta(value) {
        this._brojIndeksaStudenta = value;
    }
    /**
     * Getter imeStudenta
     * @return {string}
     */
    get imeStudenta() {
        return this._imeStudenta;
    }
    /**
     * Setter imeStudenta
     * @param {string} value
     */
    set imeStudenta(value) {
        this._imeStudenta = value;
    }
    /**
     * Getter prezimeStudenta
     * @return {string}
     */
    get prezimeStudenta() {
        return this._prezimeStudenta;
    }
    /**
     * Setter prezimeStudenta
     * @param {string} value
     */
    set prezimeStudenta(value) {
        this._prezimeStudenta = value;
    }
    /**
     * Getter deoIspita
     * @return {string}
     */
    get deoIspita() {
        return this._deoIspita;
    }
    /**
     * Setter deoIspita
     * @param {string} value
     */
    set deoIspita(value) {
        this._deoIspita = value;
    }
    /**
     * Getter datum
     * @return {string}
     */
    get datum() {
        return this._datum;
    }
    /**
     * Setter datum
     * @param {string} value
     */
    set datum(value) {
        this._datum = value;
    }
    /**
     * Getter brojBodova
     * @return {number}
     */
    get brojBodova() {
        return this._brojBodova;
    }
    /**
     * Setter brojBodova
     * @param {number} value
     */
    set brojBodova(value) {
        this._brojBodova = value;
    }
}
/// <reference path="ispit.ts" />
class Fakultet {
    constructor(naziv) {
        this._predmeti = [];
        this._ispiti = [];
        this.naziv = naziv;
    }
    get predmeti() {
        return this._predmeti;
    }
    set predmeti(value) {
        this._predmeti = value;
    }
    get ispiti() {
        return this._ispiti;
    }
    set ispiti(value) {
        this._ispiti = value;
    }
    get naziv() {
        return this._naziv;
    }
    set naziv(value) {
        this._naziv = value;
    }
    dodajIspit(ispit) {
        fakultet.ispiti.push(ispit);
    }
    refreshIspis() {
        let tableBody = document.getElementById("tbody");
        let table = "";
        let klasa = (nr, tip) => {
            if (nr >= 35 && tip === "kolokvijum")
                return "green";
            else if (nr >= 10 && tip === "teorija")
                return "green";
            else
                return "red";
        };
        for (let i in fakultet.ispiti) {
            table += `<tr>
      <td>${fakultet.ispiti[i].brojIndeksaStudenta}</td>
      <td>${fakultet.ispiti[i].imeStudenta} ${fakultet.ispiti[i].prezimeStudenta}</td>
      <td>${fakultet.ispiti[i].predmet.nazivPredmeta}</td>
      <td>${fakultet.ispiti[i].deoIspita}</td>
      <td>${fakultet.ispiti[i].datum}</td>
      <td class="${klasa(fakultet.ispiti[i].brojBodova, fakultet.ispiti[i].deoIspita)}">${fakultet.ispiti[i].brojBodova}</td>
    </tr>`;
        }
        tableBody.innerHTML = table;
    }
    izracunajProlaznostPoPredmetu(deoIspita, predmet) {
        let potrebniIspiti = this.ispiti.filter((item) => item.predmet.nazivPredmeta === predmet.nazivPredmeta);
        let polozeniIspiti = [];
        for (let ispit of potrebniIspiti) {
            if (ispit.brojBodova >= 35)
                polozeniIspiti.push(ispit);
        }
        let rez = (polozeniIspiti.length * 100) / potrebniIspiti.length;
        document.getElementById("podaci").innerHTML = `
    <h3>Prolaznost za ${deoIspita} za predmet ${predmet.nazivPredmeta} je ${rez.toFixed(2)}</h3>`;
    }
    najlaksiProfesorPoNacinuPolaganja() {
        //sad vidim da sam mogao sa reduce ovo da odradim a ne da komplikujem ovako
        let polozeniKolokvijum = [];
        let polozeniTeorija = [];
        let kolRez = {};
        let kolTeorija = {};
        for (let ispit of fakultet.ispiti) {
            if (ispit.deoIspita === "kolokvijum" && ispit.brojBodova >= 35) {
                polozeniKolokvijum.push(ispit);
            }
            if (ispit.deoIspita === "teorija" && ispit.brojBodova >= 10) {
                polozeniTeorija.push(ispit);
            }
        }
        for (let ispit of polozeniKolokvijum) {
            if (kolRez[ispit.predmet.imeProfesora])
                kolRez[ispit.predmet.imeProfesora]++;
            else
                kolRez[ispit.predmet.imeProfesora] = 1;
        }
        for (let ispit of polozeniTeorija) {
            if (kolTeorija[ispit.predmet.imeProfesora])
                kolTeorija[ispit.predmet.imeProfesora]++;
            else
                kolTeorija[ispit.predmet.imeProfesora] = 1;
        }
        let tempRez = Object.entries(kolRez);
        let rez1 = tempRez[0];
        for (let item of tempRez) {
            if (item[1] > rez1[1])
                rez1 = item;
        }
        let tempKol = Object.entries(kolTeorija);
        let rez2 = tempKol[0];
        for (let item of tempKol) {
            if (item[1] > rez2[1])
                rez2 = item;
        }
        document.getElementById("podaci").innerHTML = ` 	<h3>Profesor sa najlaksim teoretskim ispitom je ${rez1[0]} sa ukupno ${tempRez.length} polozenih ispita.</h3>
        	<br>
        	<h3>Profesor sa najlaksim kolokvijumom je  ${rez2[0]}  sa ukupno ${tempKol.length} polozenih kolokvijuma.</h3>`;
    }
    polozeniPredmet(predmet) {
        let predmeti = this.ispiti.filter((item) => item.predmet.nazivPredmeta === predmet.nazivPredmeta);
    }
}
/// <reference path="fakultet.ts" />
let fakultet;
let aktivanPredmet;
function promeniAktivnog(selekt) {
    aktivanPredmet = fakultet.predmeti.filter((el) => el.idPredmeta == Number(selekt.value))[0];
    fakultet.refreshIspis();
}
let deoIspita = document.getElementById("nacinPolaganjaSelekt");
let izracunajProlaznostBtn = document.getElementById("izracunajProlaznostPoPredmetu");
let polozenBtn = document.getElementById("polozenpredmet");
let izracunajLakocu = document.getElementById("najlaksiProferoriPoNacinuPolaganja");
let dodajIspitBtn = document.getElementById("dodajIspit");
function wireEvents() {
    dodajIspitBtn.addEventListener("click", () => {
        let indexStudenta = document.getElementById("indeks");
        let imeStudenta = document.getElementById("ime");
        let prezimeStudenta = document.getElementById("prezime");
        let datum = document.getElementById("datum");
        let teorija = document.getElementById("teorija");
        let kolokvijum = document.getElementById("kolokvijum");
        let ocena = (data) => {
            console.log(data.value);
            if (data.value === "teorija")
                return +teorija.value;
            if (data.value === "kolokvijum")
                return +kolokvijum.value;
        };
        let noviIspit = new Ispit(aktivanPredmet, indexStudenta.value, imeStudenta.value, prezimeStudenta.value, deoIspita.value, datum.value, ocena(deoIspita));
        fakultet.dodajIspit(noviIspit);
        fakultet.refreshIspis();
    });
    izracunajProlaznostBtn.addEventListener("click", () => {
        fakultet.izracunajProlaznostPoPredmetu(deoIspita.value, aktivanPredmet);
    });
    izracunajLakocu.addEventListener("click", () => {
        fakultet.najlaksiProfesorPoNacinuPolaganja();
    });
    polozenBtn.addEventListener("click", () => {
        fakultet.polozeniPredmet(aktivanPredmet);
    });
}
window.onload = () => {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    fakultet = new Fakultet("FTN");
    let p1 = new Predmet("Pera", "Peric", 1, "Algoritimi");
    let p2 = new Predmet("Mika", "Mikic", 2, "Strukture podataka");
    let p3 = new Predmet("Zika", "Zikic", 3, "Bioloski inspirisano racunarstvo");
    fakultet.predmeti = [p1, p2, p3];
    let i11 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "teorija", "2022-02-11", 5);
    let i12 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "kolokvijum", "2022-03-05", 60);
    let i21 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "teorija", "2022-05-09", 25);
    let i22 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "kolokvijum", "2022-07-21", 68);
    let i31 = new Ispit(p1, "i3", "Dejan", "Dejan", "teorija", "2022-05-09", 7);
    let i32 = new Ispit(p1, "i3", "Dejan", "Dejan", "kolokvijum", "2022-07-21", 69);
    let i41 = new Ispit(p2, "i4", "Marko", "Markovic", "teorija", "2022-02-11", 20);
    let i42 = new Ispit(p2, "i4", "Marko", "Markovic", "kolokvijum", "2022-03-05", 64);
    let i51 = new Ispit(p2, "i5", "Nikola", "Nikolic", "teorija", "2022-05-09", 18);
    let i52 = new Ispit(p2, "i5", "Nikola", "Nikolic", "kolokvijum", "2022-07-21", 15);
    let i61 = new Ispit(p2, "i6", "Luka", "Lukic", "teorija", "2022-05-09", 22);
    let i62 = new Ispit(p2, "i6", "Luka", "Lukic", "kolokvijum", "2022-07-21", 33);
    let i71 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "teorija", "2022-02-11", 23);
    let i72 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "kolokvijum", "2022-03-05", 66);
    let i81 = new Ispit(p3, "i8", "Branko", "Brankovic", "teorija", "2022-05-09", 7);
    let i82 = new Ispit(p3, "i8", "Branko", "Brankovic", "kolokvijum", "2022-07-21", 21);
    let i91 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "teorija", "2022-05-09", 8);
    let i92 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "kolokvijum", "2022-07-21", 34);
    let i101 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "teorija", "2022-05-09", 29);
    let i102 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "kolokvijum", "2022-07-21", 70);
    let i111 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "teorija", "2022-05-09", 9);
    let i112 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "kolokvijum", "2022-07-21", 17);
    fakultet.dodajIspit(i11);
    fakultet.dodajIspit(i12);
    fakultet.dodajIspit(i21);
    fakultet.dodajIspit(i22);
    fakultet.dodajIspit(i31);
    fakultet.dodajIspit(i32);
    fakultet.dodajIspit(i41);
    fakultet.dodajIspit(i42);
    fakultet.dodajIspit(i51);
    fakultet.dodajIspit(i52);
    fakultet.dodajIspit(i61);
    fakultet.dodajIspit(i62);
    fakultet.dodajIspit(i71);
    fakultet.dodajIspit(i72);
    fakultet.dodajIspit(i81);
    fakultet.dodajIspit(i82);
    fakultet.dodajIspit(i91);
    fakultet.dodajIspit(i92);
    fakultet.dodajIspit(i101);
    fakultet.dodajIspit(i102);
    fakultet.dodajIspit(i111);
    fakultet.dodajIspit(i112);
    let select = document.getElementById("predmet");
    fakultet.predmeti.forEach((el) => {
        select.options.add(new Option(el.nazivPredmeta, el.idPredmeta.toString()));
    });
    aktivanPredmet = fakultet.predmeti[0];
    fakultet.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map