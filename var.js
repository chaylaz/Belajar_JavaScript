let iceCream = 20;
console.log(iceCream);

iceCream = 7;
console.log(iceCream); // let bisa buat lebih dari satu variabel

const yoghurt = 15;
console.log(yoghurt); // const cuma bisa buat satuu variabel, gaboleh di panggil lagi (constanta = variabel yg segitu gitu aja dan gaboleh dirubah)

let angka = 5; // sekarang tipe data number
angka = "lima"; // jadi tipe data string
angka = true; // sekarang tipe data boolean
console.log(typeof angka); // buat liat angka tuh tipe datanya apa, pake yang paling terakhir di tulis yaitu boolean


// Operator
iceCream = 2 + 3;
console.log(iceCream);

iceCream = 6 % 3;
if (iceCream == 3) console.log(iceCream);
else console.log("iceCream tidak sama dengan 5");

iceCream = 6 % 5;
if (iceCream > 3) console.log(iceCream);
else console.log("iceCream nilainya lebih kecil dari 2");


// logikal operator (harus true) baru keluar di konsol
let sayaSukaMakan = true;
let sayaSukaJajan = true;

if (sayaSukaMakan && sayaSukaJajan)
    console.log("saya suka makan dan jajan");

// gatau lupa namanya apa
sayaSukaMakan = "love sekebon";
sayaSukaJajan = "love segarden";

console.log("love sekebon" + "love segarden"); // outputnya bakal = love sekebonlove segarden

sayaSukaMakan = "love sekebon";
sayaSukaJajan = "love segarden";

console.log("love sekebon" + " " + "love segarden"); // outputnya bakal = love sekebon love segarden

sayaSukaMakan = "love sekebon";
sayaSukaJajan = "love segarden";

console.log(`${sayaSukaMakan} ${sayaSukaJajan}`); // outputnya bakal = love sekebon love segarden


// ahai, maksud saya array 
let namaPacarku = ["Fadhlan", "Lin Yi", "Zhou Yiran", "Chen Zhe Yuan"];
console.log(namaPacarku); // ngitungnya dari 0, kayanya ini bedanya pake tanda []

namaPacarku = ["Fadhlan", "Lin Yi", "Zhou Yiran", "Chen Zhe Yuan"];
console.log(namaPacarku[0]); // outputnya Fadhlan
console.log(namaPacarku.length); // jumlah pacarku ada berapa, yahaha

// perulangan pada array 
namaPacarku.forEach(function (item, index, array) {
    console.log(item, index, array);
}); 
// outputnya : Fadhlan 0 (4) ['Fadhlan', 'Lin Yi', 'Zhou Yiran', 'Chen Zhe Yuan']
//             Lin Yi 1 (4) ['Fadhlan', 'Lin Yi', 'Zhou Yiran', 'Chen Zhe Yuan']
//             Zhou Yiran 2 (4) ['Fadhlan', 'Lin Yi', 'Zhou Yiran', 'Chen Zhe Yuan']
//             Chen Zhe Yuan 3 (4) ['Fadhlan', 'Lin Yi', 'Zhou Yiran', 'Chen Zhe Yuan']

namaPacarku.push("Xing Zhaolin");
console.log(namaPacarku); // nambahin nama pacar

namaPacarku.pop();
console.log(namaPacarku); // ngehapus dari yang paling akhir alias bang zhaolin

namaPacarku.shift();
console.log(namaPacarku); // ngehapus pacar paling awal alias si Fadhlan, iya buang aja diamah (jangan deng)

console.log(namaPacarku.indexOf("Lin Yi")); //  pacar ke berapa sih beb linyi

namaPacarku = namaPacarku.slice();
namaPacarku.pop();
console.log("Nama pacar lamaku :", namaPacarku);

console.log(
    namaPacarku.reduce(function (acc, pacar, ke) {
        acc[pacar] = `Pacar ke ${ke + 1}`;

        return acc;
    })
)

