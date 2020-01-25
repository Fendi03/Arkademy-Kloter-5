function handshake(hadir) {
    let i=0;
    let jumlah=0;
    for(i;i<hadir;i++){
        jumlah +=i;
    }
   return jumlah;
}

console.log('Jumlah jabat tangan = ', handshake(6));