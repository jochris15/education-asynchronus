// console.log('1. Kevin datang ke restoran')
// console.log('2. Kevin pesan makanan')
// console.log('3. Koki menyiapkan pesanan')
// console.log('4. Pesanan kevin siap')
// console.log("==============================");
// console.log('1. Bambang datang ke restoran')
// console.log('2. Bambang pesan makanan')
// console.log('3. Koki menyiapkan pesanan')
// console.log('4. Pesanan bambang siap')
// // kode diatas merupakan kode synchronus, akan terprint di terminal sesuai urutan nomor 1,2,3

console.log('1. Kevin datang ke restoran')
console.log('2. Kevin pesan makanan')
console.log('3. Koki menyiapkan pesanan')
setTimeout(() => {
    console.log('4. Pesanan kevin siap')
}, 3000)
console.log("==============================");
console.log('1. Bambang datang ke restoran')
console.log('2. Bambang pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan bambang siap')
// kode diatas mengandung proses asynchronus (setTimout, berguna untuk mendelay suatu proses). **Pesanan kevin siap** akan terprint di terminal dengan urutan terakhir 