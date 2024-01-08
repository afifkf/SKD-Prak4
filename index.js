// Fungsi untuk mengenkripsi teks
function encrypt(text, keyA, keyB) {
    return text.split('').map(char => {
      if (/[A-Z]/.test(char)) { // Cek apakah karakter adalah huruf kapital
        const charCode = ((keyA * (char.charCodeAt(0) - 65) + keyB) % 26 + 65); // Enkripsi huruf kapital
        return String.fromCharCode(charCode);
      } else if (/[a-z]/.test(char)) { // Cek apakah karakter adalah huruf kecil
        const charCode = ((keyA * (char.charCodeAt(0) - 97) + keyB) % 26 + 97); // Enkripsi huruf kecil
        return String.fromCharCode(charCode);
      } else {
        return char; // Jika bukan huruf, biarkan karakter tersebut tidak berubah
      }
    }).join('');
  }
  
  // Fungsi untuk mendekripsi teks
  function decrypt(text, keyA, keyB) {
    const aInv = [...Array(26).keys()].find(i => (keyA * i) % 26 === 1); // Menghitung invers kunci A
  
    return text.split('').map(char => {
      if (/[A-Z]/.test(char)) { // Cek apakah karakter adalah huruf kapital
        const charCode = (((aInv * (char.charCodeAt(0) - 65 - keyB)) % 26 + 26) % 26 + 65); // Dekripsi huruf kapital
        return String.fromCharCode(charCode);
      } else if (/[a-z]/.test(char)) { // Cek apakah karakter adalah huruf kecil
        const charCode = (((aInv * (char.charCodeAt(0) - 97 - keyB)) % 26 + 26) % 26 + 97); // Dekripsi huruf kecil
        return String.fromCharCode(charCode);
      } else {
        return char; // Jika bukan huruf, biarkan karakter tersebut tidak berubah
      }
    }).join('');
  }
  
  const plaintext = "AFIF KHALID FADHILLAH";
  const keyA = 8;
  const keyB = 3;
  
  const encryptedText = encrypt(plaintext, keyA, keyB);
  const decryptedText = decrypt(encryptedText, keyA, keyB);
  
  console.log("Plaintext: " + plaintext);
  console.log("kunci A: " + keyA);
  console.log("kunci B: " + keyB);
  console.log("Encrypted Text: " + encryptedText);