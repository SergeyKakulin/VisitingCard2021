var txt = {
    en: {
        'ks':'Kakulin Sergey',
        "birth":"Date of Birth: January 31, 1994",
        "place":"Place of Birth: Kazakhstan, Kokshetau city",
        "married":"Marital Status: Married",
        "email":"E-Mail: sergey.kakulin@gmail.com",
        "links":"Links to my pages",
        "education":"Education",
        "education2":"2012-2016: Sh. Ualikhanov Kokshetau university",
        "education3":"2021: Training in Soth Galaxy G1 & SurvX 4.0",
        "work":"Work experience",
        "work2":'2015-now: "Kokshe Ground" LLP',
        "hobbi":"Hobbies",
        "hobbi1":"- Lirning html, css, JavaScript",
        "hobbi2":"- Reading of books",
        "hobbi3":"- Comics",
        "hobbi4":"- Mixing & mastering tracks",
        "hobbi5":"- Photoshop",
        "favorites":"Favorites",
        "f1":"Book authors",
        "f2":"Stephen King",
        "f3":"Joanne Rowling",
        "f4":"George Martin",
        "f5":"Books",
        "f6":"Flowers for Algernon",
        "f7":"Harry Potter",
        "f8":"The Green Mile",
        "f9":"Games",
        "f10":"Counter-Strike: Global Offensive",
        "f11":"Assassin's creed franchise",
        "f12":"Grand Theft Auto franchise",
        "f13":"Movies",
        "f14":"Home Alone, 1990",
        "f15":"Spider-Man, 2002",
        "f16":"The Lion King, 1994",

},
    ru: {
        'ks':'Какулин Сергей',
        'birth':'Дата рождения: 31 января 1994',
        'place':"Место рождения: Казахстан, город Кокшетау",
        "married":"Семейное положение: Женат",
        "email":"Эл. почта: sergey.kakulin@gmail.com",
        "links":"Ссылки на мои страницы",
        "education":"Образование",
        "education2":"2012-2016: Кокшетауский университет им. Ш. Уалиханова",
        "education3":"2021: Обучение Soth Galaxy G1 и ПО SurvX 4.0",
        "work":"Опыт работы",
        "work2":'2015-по настоящее время: ТОО "Kokshe Ground"',
        "hobbi":"Увлечения",
        "hobbi1":"- Изучение html, css, JavaScript",
        "hobbi2":"- Чтение книг",
        "hobbi3":"- Комиксы",
        "hobbi4":"- Сведение и мастеринг треков",
        "hobbi5":"- Фотошоп",
        "favorites":"Избранное",
        "f1":"Авторы книг",
        "f2":"Стивен Кинг",
        "f3":"Джоан Роулинг",
        "f4":"Джордж Мартин",
        "f5":"Книги",
        "f6":"Цветы для Элджернона",
        "f7":"Гарри Поттер",
        "f8":"Зеленая миля",
        "f9":"Игры",
        "f10":"Counter-Strike: Global Offensive",
        "f11":"Франшиза Assassin's creed",
        "f12":"Франшиза Grand Theft Auto",
        "f13":"Фильмы",
        "f14":"Один дома, 1990",
        "f15":"Человек-Паук, 2002",
        "f16":"Король Лев, 1994",



    }
};

document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
document.getElementById('e-lang-ru').addEventListener('click', setLang.bind(null,'ru'));
  
function setLang(lang){
    var p;
    if( !txt.hasOwnProperty(lang)) return;
    if( window.hasOwnProperty('localStorage'))
       window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
      document.getElementById(p).innerText = txt[lang][p];
    }
}
  
var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);