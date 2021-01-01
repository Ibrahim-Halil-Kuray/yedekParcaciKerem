
let yedekParcalar = ["ay23na", "f2ar", "can2t", "lastik"];
let envanter = [];

//Parca isimleri büyük harflere cevrilecektir.
function toCapitalize(cList) {
    let result = String(cList).toUpperCase();
    return result;
}

//Parca isimlerinden sayilar cikartilacaktir.
function deleteNumber(nList) {
    let result = String(nList).replace(/[0-9]/g, "");
    return result;
}

//Parca isimleri tersine cevrilecektir.
function reverseNumber(rList) {
    let result = String(rList).split("").reverse().join("");
    return result;
}

function envanterOlustur(cList) {
    let result = toCapitalize(cList);
    let nList = deleteNumber(result);
    let rList = reverseNumber(nList);
    return rList;
}

let cikti = envanterOlustur(yedekParcalar);
let ciktiDizisi = cikti.split(",")

//Her  parca icin tarih ve sirket markasi eklendi.

for (let index = 0; index < ciktiDizisi.length; index++) {
    envanter = "KEREMAG_" + ciktiDizisi[index] + " " + new Date;
    console.log(envanter);
}