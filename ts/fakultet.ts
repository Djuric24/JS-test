/// <reference path="ispit.ts" />

class Fakultet {
  private _naziv: string;
  private _predmeti: Predmet[] = [];
  private _ispiti: Ispit[] = [];
  constructor(naziv: string) {
    this.naziv = naziv;
  }
  public get predmeti(): Predmet[] {
    return this._predmeti;
  }

  public set predmeti(value: Predmet[]) {
    this._predmeti = value;
  }
  public get ispiti(): Ispit[] {
    return this._ispiti;
  }

  public set ispiti(value: Ispit[]) {
    this._ispiti = value;
  }

  public get naziv(): string {
    return this._naziv;
  }

  public set naziv(value: string) {
    this._naziv = value;
  }
  dodajIspit(ispit: Ispit) {
    fakultet.ispiti.push(ispit);
  }
  refreshIspis() {
    let tableBody = document.getElementById("tbody");
    let table = "";
    let klasa = (nr, tip) => {
      if (nr >= 35 && tip === "kolokvijum") return "green";
      else if (nr >= 10 && tip === "teorija") return "green";
      else return "red";
    };
    for (let i in fakultet.ispiti) {
      table += `<tr>
      <td>${fakultet.ispiti[i].brojIndeksaStudenta}</td>
      <td>${fakultet.ispiti[i].imeStudenta} ${
        fakultet.ispiti[i].prezimeStudenta
      }</td>
      <td>${fakultet.ispiti[i].predmet.nazivPredmeta}</td>
      <td>${fakultet.ispiti[i].deoIspita}</td>
      <td>${fakultet.ispiti[i].datum}</td>
      <td class="${klasa(
        fakultet.ispiti[i].brojBodova,
        fakultet.ispiti[i].deoIspita
      )}">${fakultet.ispiti[i].brojBodova}</td>
    </tr>`;
    }
    tableBody.innerHTML = table;
  }
  izracunajProlaznostPoPredmetu(deoIspita: string, predmet: Predmet): void {
    let potrebniIspiti = this.ispiti.filter(
      (item) => item.predmet.nazivPredmeta === predmet.nazivPredmeta
    );
    let polozeniIspiti = [];
    for (let ispit of potrebniIspiti) {
      if (ispit.brojBodova >= 35) polozeniIspiti.push(ispit);
    }
    let rez = (polozeniIspiti.length * 100) / potrebniIspiti.length;
    document.getElementById("podaci").innerHTML = `
    <h3>Prolaznost za ${deoIspita} za predmet ${
      predmet.nazivPredmeta
    } je ${rez.toFixed(2)}</h3>`;
  }
  najlaksiProfesorPoNacinuPolaganja(): void {
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
      else kolRez[ispit.predmet.imeProfesora] = 1;
    }
    for (let ispit of polozeniTeorija) {
      if (kolTeorija[ispit.predmet.imeProfesora])
        kolTeorija[ispit.predmet.imeProfesora]++;
      else kolTeorija[ispit.predmet.imeProfesora] = 1;
    }
    let tempRez = Object.entries(kolRez);
    let rez1 = tempRez[0];
    for (let item of tempRez) {
      if (item[1] > rez1[1]) rez1 = item;
    }
    let tempKol = Object.entries(kolTeorija);
    let rez2 = tempKol[0];
    for (let item of tempKol) {
      if (item[1] > rez2[1]) rez2 = item;
    }
    document.getElementById(
      "podaci"
    ).innerHTML = ` 	<h3>Profesor sa najlaksim teoretskim ispitom je ${rez1[0]} sa ukupno ${tempRez.length} polozenih ispita.</h3>
        	<br>
        	<h3>Profesor sa najlaksim kolokvijumom je  ${rez2[0]}  sa ukupno ${tempKol.length} polozenih kolokvijuma.</h3>`;
  }
  polozeniPredmet(predmet: Predmet) {
    let predmeti = this.ispiti.filter(
      (item) => item.predmet.nazivPredmeta === predmet.nazivPredmeta
    );
  }
  // U klasi Fakultet Implementirati metodu polozenPredmet. Dodati odgovarajuce dugme na html (hardcodirati u html).

  // 		Metoda polozenPredmet, prima parametar predmet:Predmet i nema povratnu vrednost.
  // 		Metoda za prosledjeni predmet pronalazi studente koji su polozili predmet, odnosno polozili i teoriju i kolokvijum (pri cemu zbir bodova polozene teorije i kolokvijuma treba da bude veci od 50).
  // 		Za pronadjene studente tj. pronadjene ispite ispisuje u tabelu po istom formatu kao metoda refresh ispis.

  // 		U funkciji wireEvents povezati klik na odgovaracuje dugme sa metodom polozenPredmet.
}
