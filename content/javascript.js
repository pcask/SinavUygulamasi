///*var degisken1 = 10;
//var degisken2 = 20;
//console.log("toplama sonucu " + (degisken1 + degisken2));
//console.log("çýkarma sonucu " +( degisken1 - degisken2));
//console.log("çarpma sonucu "+(degisken1 * degisken2));
//console.log("bölme sonucu "+(degisken1 / degisken2));
//var a;
//console.log(a);
//var b = 1;
//b = null;
//console.log(b);
//console.log("degisken1 ++ dan sonra " + (++degisken1))
//degisken1--;
//console.log(degisken1);
//var x = 5, y = 3, z = 3;
//var toplam1, toplam2;
//toplam1 = x + (++y);
//toplam2 = x + (z++);
//console.log("toplam1=>"+(toplam1));
//console.log("toplam2=>"+(toplam2));
//var bit5 = 3;
//var bit6 = 12;
//var bit56And = bit5 & bit6;
//console.log(bit56And);
//// JavaScript source code
//var i = 0;
//i++; 
//var deger=100;

//if (deger <= 100) {
//    deger *= 1.1;
//}
//else if (100 <= deger && deger < 150) {
//    deger += 10;
//}
//else if (150 <= deger && deger < 200) {
//    deger = (deger * 100 / 10) + deger + 10;

//}
//else {
//    deger = (deger * 20 / 100) + deger;
//}
//var k1=5;
//var k2=4;
//var k3=8;
//if (k1 + k2 > k3 && k1+k3>k2 && k2+k3>k1 ) {
//    console.log("ücgen olabilir");
//}
//else {
//    console.log("üçgen olamaz");
//}

//var a;
//var b;
//var c;
//*/
//var x ;
//var mod=2
//var f=1;
//if(x % mod==0 ){
//    for(i=0;i<=x;i++)
//        {
//        f*=i;
//}
//    console.log(i);
//    }
//    else {
//    f=i*i;
//    console.log(i);
//}

//var tsayi = parseInt(prompt("Kaç sayý gireceksiniz"));
//var sayi;
//var dizi = [];
//for (i = 0; i < tsayi; i++) {
//    sayi = parseInt(prompt((i + 1) + ". sayiyi giriniz"))
//    dizi.push(sayi);
//    if (sayi % 2 === 0) {
//        console.log("sayi çifttir");
//    }
//    else {
//        console.log("Sayi tektir")
//    }
//}
//console.log(dizi);
//var sayi = parseInt(prompt("1. sayi Giriniz"));
//var sayi2 = parseInt(prompt("2. sayi Giriniz"));
//if (sayi2 % 2 === 0) {
//    console.log(sayi * sayi2);
//}
//else {
//    console.log(sayi / sayi2);
//}
//var sayi = parseInt(prompt("1. sayi Giriniz"));
//var sayi2 = parseInt(prompt("2. sayi Giriniz"));
//if (sayi2 % 3 === 0) {
//    console.log(sayi * sayi2);
//}
//else if(sayi2 % 3 === 1) {
//    console.log(sayi / sayi2);
//}
//else {
//    console.log(sayi ** sayi2);
//}

//var sayi2 = parseInt(prompt("2.Sayýyý giriniz"));
//switch (sayi2 % 3) {
//    case 0: console.log(sayi * sayi2); break;
//    case 1: console.log(sayi / sayi2); break;
//    case 2: console.log(sayi ** sayi2); break;

//}
//var ctoplam = 0;
//var ttoplam = 0;
//for (i = 0; i <= 4; i++) {
//    var sayi1 = parseInt(prompt((i + 1) + ". sayiyi giriniz"));
//    if (sayi1 % 2 == 0) {
//        ctoplam = ctoplam + sayi1;
//    }
//    else {
//        ttoplam = ttoplam + sayi1;
//    }
//}
//console.log("tek sayýlarýn toplamý: "+ttoplam);
//console.log("çift sayýlarýn toplamý: "+ctoplam);

//function ivmeHesap(baslangicHizi, ivme, yolAldigiSure) {
//    toplamYol = 0;
//    var saatlikHiz = 0;
//    saatlikHiz = baslangicHizi;

    

//    for (var i = 1; i <= yolAldigiSure; i++) {
//        toplamYol += saatlikHiz;
//        saatlikHiz += ivme;

    
//    }
//    return toplamYol;

   
//}
//let 


//var baslangicHizi = parseInt(prompt("Bir sayý giriniz."));


//var ivme = parseInt(prompt("Bir sayý giriniz."));


//var yolAldigiSure = parseInt(prompt("Bir sayý giriniz."));


////ivmeHesap(baslangicHizi, ivme, yolAldigiSure);
////console.log(toplamYol);

//var sayi = "1111";
//function tahminbulma(tahmin, sayi) {
//    x = 0;
//    y = 0;
//    for (i = 0; i < 4; i++) {
//        for (j = 0; j < 4; j++) {
//            if (tahmin[i] == sayi[i]) {
//                if (i == j) {
//                    x = x + 1;
//                }
//                else {
//                    y--;
//                }
//                break;
//            }
//        }
//    }
//}

//for (i = 0; i <= 10; i++) {
//    tahmin = prompt("tahmin yapýnýz?")
//    if (tahmin = sayi) {
//        console.log("Tebrikler")
//    }
//    else

//}
var bir = "abc";
var iki = "123";
for (i = 0; i < 3; i++)
{
    var uc=[bir[i] + iki[i]];
    console.log(uc[i]);
}
