const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json(
        [
            {
               "ilce": "MERKEZ",
               "semt": "ÜRGÜP",
               "mahalle": "ÜRGÜP MAH.",
               "cadde": "ÖRNEK CADDESİ",
               "enlem": "40.191584",
               "boylam": "29.095642",
               "bosparkyerisayisi": "17",
               "tarife": [
                  {
                     "otomobil": "5",
                     "kamyonet": "6",
                     "kamyon": "7",
                     "otobus": "8",
                     "diger": "9",
                     "aciklama": "1 Saate kadar"
                  },
                  {
                     "otomobil": "7",
                     "kamyonet": "8",
                     "kamyon": "9",
                     "otobus": "10",
                     "diger": "11",
                     "aciklama": "1-2 Saat"
                  },
                  {
                     "otomobil": "8",
                     "kamyonet": "9",
                     "kamyon": "10",
                     "otobus": "11",
                     "diger": "12",
                     "aciklama": "2-3 Saat"
                  },
                  {
                     "otomobil": "9",
                     "kamyonet": "10",
                     "kamyon": "11",
                     "otobus": "12",
                     "diger": "13",
                     "aciklama": "3-5 saat"
                  },
                  {
                     "otomobil": "5",
                     "kamyonet": "6",
                     "kamyon": "7",
                     "otobus": "8",
                     "diger": "9",
                     "aciklama": "Giriþ Kaydý Yok-Sadece Mudanya Ýçin"
                  },
                  {
                     "otomobil": "1",
                     "kamyonet": "2",
                     "kamyon": "3",
                     "otobus": "3",
                     "diger": "1",
                     "aciklama": "5 saat sonrasý her saat için ekstra ücret"
                  }
               ]
            },
            {
               "ilce": "MERKEZ",
               "semt": "ÜRGÜP",
               "mahalle": "ÜRGÜP MAH.",
               "cadde": "ÖRNEK CADDESİ",
               "enlem": "40.1915841",
               "boylam": "29.0956421",
               "bosparkyerisayisi": "17",
               "tarife": [
                  {
                     "otomobil": "5",
                     "kamyonet": "6",
                     "kamyon": "7",
                     "otobus": "8",
                     "diger": "9",
                     "aciklama": "1 Saate kadar"
                  },
                  {
                     "otomobil": "7",
                     "kamyonet": "8",
                     "kamyon": "9",
                     "otobus": "10",
                     "diger": "11",
                     "aciklama": "1-2 Saat"
                  },
                  {
                     "otomobil": "8",
                     "kamyonet": "9",
                     "kamyon": "10",
                     "otobus": "11",
                     "diger": "12",
                     "aciklama": "2-3 Saat"
                  },
                  {
                     "otomobil": "9",
                     "kamyonet": "10",
                     "kamyon": "11",
                     "otobus": "12",
                     "diger": "13",
                     "aciklama": "3-5 saat"
                  },
                  {
                     "otomobil": "5",
                     "kamyonet": "6",
                     "kamyon": "7",
                     "otobus": "8",
                     "diger": "9",
                     "aciklama": "Giriþ Kaydý Yok-Sadece Mudanya Ýçin"
                  },
                  {
                     "otomobil": "1",
                     "kamyonet": "2",
                     "kamyon": "3",
                     "otobus": "3",
                     "diger": "1",
                     "aciklama": "5 saat sonrasý her saat için ekstra ücret"
                  }
               ]
            }
         ]
    );
});
module.exports = app;