/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 6. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 9.8, tr: '4 356 hangi sayılara tam bölünür?', en: 'Which numbers divide 4 356 exactly?',
      note: '4 356 sayısı 2, 3, 4, 5, 6, 9 ve 10’dan hangilerine tam bölünür? Bölme yapmadan anlayabilir miyiz?' },
    { scene: 2, start: 10.8, end: 16.6, tr: 'Katların son basamaklarına bakalım', en: 'Look at the last digits of the multiples',
      note: '10’un, 5’in ve 2’nin katlarını yazalım. Son basamaklarda bir örüntü görüyor musunuz? 10’un katları 0 ile, 5’in katları 0 ya da 5 ile, 2’nin katları çift rakamla biter.' },
    { scene: 2, start: 17.0, end: 22.4, tr: '4 350 zaten 10’un katı: karar 6’da', en: '4 350 is already a multiple of 10: the 6 decides',
      note: '4 356’yı 4 350 artı 6 diye ayıralım. 4 350, 10’un katı; 2’ye de 5’e de bölünür. Geriye yalnızca birler basamağı kalır.' },
    { scene: 2, start: 22.6, end: 27.8, tr: '6 çift: 2’ye bölünür, 5’e ve 10’a bölünmez', en: '6 is even: divisible by 2, not by 5 or 10',
      note: 'Birler basamağı 6, çift bir rakam. Sayı 2’ye bölünür; ama 0 ya da 5 olmadığı için 5’e ve 10’a bölünmez.' },
    { scene: 3, start: 28.2, end: 34.2, tr: 'Varsayım: 4 için de son basamak yeter mi?', en: 'Guess: is the last digit enough for 4 too?',
      note: 'Bir varsayım deneyelim: son basamak 4’e bölünüyorsa sayı da 4’e bölünür mü? 14 ile sınayalım: 14’ün son basamağı 4, ama 14, 4’e tam bölünmez. Varsayım tutmadı.' },
    { scene: 3, start: 34.6, end: 41.0, tr: '100, 4’ün katı: son iki basamak karar verir', en: '100 is a multiple of 4: the last two digits decide',
      note: '100, 4 çarpı 25. Yüzler ve daha büyük basamaklar hep 4’e bölünür. 4 356 = 4 300 + 56; karar 56’da. 56 = 4 × 14.' },
    { scene: 3, start: 41.2, end: 45.8, tr: '4 356, 4’e bölünür', en: '4 356 is divisible by 4',
      note: 'Son iki basamağı 4’ün katı olan sayı 4’e tam bölünür. 4 356, 4’e bölünür.' },
    { scene: 4, start: 46.6, end: 51.8, tr: '9’un katlarında rakamlar toplamı hep 9', en: 'In multiples of 9 the digits always add up to 9',
      note: '9’un katlarında rakamları toplayalım: 1 artı 8, 2 artı 7, 3 artı 6… Hepsi 9. İlginç bir örüntü!' },
    { scene: 4, start: 52.0, end: 56.4, tr: '10 = 9 + 1, 100 = 99 + 1: geriye rakamlar kalır', en: '10 = 9 + 1, 100 = 99 + 1: the digits are what’s left',
      note: 'Nedeni şu: 10, 9’un katından 1 fazla; 100 ve 1000 de öyle. Her basamaktan 9’a bölünmeyen kısım rakamın kendisi olur.' },
    { scene: 4, start: 56.8, end: 61.2, tr: '4 + 3 + 5 + 6 = 18', en: '4 + 3 + 5 + 6 = 18',
      note: '4 356’nın rakamlarını toplayalım: 18. 18 hem 9’un hem 3’ün katı.' },
    { scene: 4, start: 61.4, end: 65.8, tr: 'Toplam 3’ün katıysa 3’e, 9’un katıysa 9’a bölünür', en: 'Digit sum a multiple of 3 or 9: divisible by 3 or 9',
      note: 'Önermemiz: rakamları toplamı 3’ün katı olan sayı 3’e, 9’un katı olan sayı 9’a tam bölünür. 4 356 ikisine de bölünür.' },
    { scene: 5, start: 66.6, end: 71.8, tr: '2’ye ve 3’e bölünüyorsa 6’ya da bölünür', en: 'Divisible by 2 and by 3 means divisible by 6',
      note: '6, 2 çarpı 3. 4 356 hem 2’ye hem 3’e bölündüğü için 6’ya da bölünür.' },
    { scene: 5, start: 72.4, end: 76.0, tr: '4 356 kalem 9 kutuya eşit dağılır mı? Evet!', en: 'Can 4 356 pens go equally into 9 boxes? Yes!',
      note: 'Kurallar ne zaman işe yarar? 4 356 kalem 9 kutuya eşit dağılır mı? Rakamlar toplamı 18, demek ki evet: her kutuya 484 kalem.' },
    { scene: 5, start: 76.2, end: 79.8, tr: '7 için kısa bir kural yok: bölmeyi yaparız', en: 'No quick rule for 7: we just divide',
      note: 'Her sayı için böyle kısa bir kural yok. 7’ye bölünüp bölünmediğini anlamak için bölmeyi yapmak daha kolay.' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Son basamak, son iki basamak, rakamlar toplamı', en: 'Last digit, last two digits, digit sum',
      note: 'Aklında kalsın: 2, 5 ve 10 için son basamağa, 4 için son iki basamağa, 3 ve 9 için rakamlar toplamına bak. 6 için 2 ve 3 kuralı birlikte.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Bölmeden karar verebilirsin!', en: 'You can decide without dividing!',
      note: 'Artık birçok sayıda bölme yapmadan karar verebilirsin!' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
