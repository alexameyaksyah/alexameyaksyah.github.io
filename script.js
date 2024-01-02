function hitung() {
  var alas = parseFloat(document.getElementById('alas').value);
  var tinggi = parseFloat(document.getElementById('tinggi').value);
  var sisi = parseFloat(document.getElementById('sisi').value);

  if (!isNaN(alas) && !isNaN(tinggi) && !isNaN(sisi)) {
    var luas = 0.5 * alas * tinggi;
    var keliling = alas + tinggi + sisi;
    
    document.getElementById('luas').innerHTML = 'Luas: ' + luas.toFixed(2);
    document.getElementById('keliling').innerHTML = 'Keliling: ' + keliling.toFixed(2);
  } else {
    alert('Masukkan angka yang valid untuk semua input.');
  }
}

function reset() {
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('sisi').value = '';
  document.getElementById('luas').innerText = 'Luas: ';
  document.getElementById('keliling').innerText = 'Keliling: ';
}
