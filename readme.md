# Callback & Asynchronus

## Apa itu callback? 
Callback adalah sebuah metode pemanggilan suatu function pada javascript, dimana suatu function dipanggil / di-eksekusi pada function lain dan menjadi sebuah paramater
<br>
<br>

```js
testFunction(callbackFunction1) 
// parameter disini adalah sebuah function yang dipassing sebagai parameter yang disebut callback, functionnya tidak ditrigger disini melainkan didalam function testFunction
```

## Asynchronus
Kalian ingkatkan kalau node js itu terkenal dengan proses Asynchronous nya ? Nah apa sih proses Asynchronous itu ?
<br>
<br>
Proses asyncrhonous adalah proses pengeksekusian kode yang tidak harus sesuai dengan urutan yang ada atau bisa disebut menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.
<br>
<br>
Contoh proses Synchronus
```js
console.log('1. Kevin datang ke restoran')
console.log('2. Kevin pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan kevin siap')
console.log("==============================");
console.log('1. Bambang datang ke restoran')
console.log('2. Bambang pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan bambang siap')
// kode diatas merupakan kode synchronus, akan terprint di terminal sesuai urutan nomor 1,2,3
```

<br>
<br>
Contoh proses Asynchronus

```js
console.log('1. Kevin datang ke restoran')
console.log('2. Kevin pesan makanan')
console.log('3. Koki menyiapkan pesanan')
setTimeout(() => {
    console.log('4. Pesanan kevin siap')
},3000)
console.log("==============================");
console.log('1. Bambang datang ke restoran')
console.log('2. Bambang pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan bambang siap')

// kode diatas mengandung proses asynchronus (setTimout, berguna untuk mendelay suatu proses). **Pesanan kevin siap** akan terprint di terminal dengan urutan terakhir 
```
