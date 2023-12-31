const markers = [
    {
        name: "Ponmaree",
        lat: "13.650878",
        lng: "100.496752",
        time: "06:30-20:00",
        Tag: "Bakery",
        dayoff: "",
        ImageIcon:"/images/MarkerBakery.png",
        popupImg:"/images/Ponmaree.jpg",
    },
    {
        name: "สยาม นู้ดเดิ้ล",
        lat: "13.650780",
        lng: "100.496707",
        time: "08:00-20:30",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerNoodles.png",
        popupImg:"/images/SiamNoodles.jpg",
    },
    {
        name: "More Story",
        lat: "13.650534",
        lng: "100.496716",
        time: "08:00–17:30",
        Tag: "Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerDrink.png",
        popupImg:"/images/MoreStory.jpg",

    },
    {
        name: "เครปยักษ์",
        lat: "13.650365",
        lng: "100.496675",
        time: "11:30–21:30",
        Tag: "Food,Dessert",
        dayoff: "",
        ImageIcon:"/images/MarkerKrep.png",
        popupImg:"/images/Krep.jpg",
    },
    {
        name: "จิ๊กกี้ก๋วยเตี๋ยวลูกชิ้นปลาทำเอง",
        lat: "13.650303",
        lng: "100.496686",
        time: "10:00–19:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerNoodles.png",
        popupImg:"/images/jikky.jpg",
    },
    {
        name: "TOAST BEAR",
        lat: "13.650088",
        lng: "100.496640",
        time: "10:30–19:30",
        Tag: "Drink,Food",
        dayoff: "Saturday",
        ImageIcon:"/images/MarkerFood.png",
        popupImg:"/images/ToastBear.jpg",
    },
    {
        name: "สุริยะ บะหมี่-เกี๊ยว หมูแดง",
        lat: "13.6499633371413",
        lng: "100.49663726350778",
        time: "10:00–20:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerNoodles.png",
        popupImg:"/images/Suriya.jpg",
    },
    {
        name: "FIIKA",
        lat: "13.649941",
        lng: "100.496621",
        time: "10:00–22:00",
        Tag: "Cafe",
        dayoff: "",
        ImageIcon:"/images/MarkerCafe.png",
        popupImg:"/images/Fika.jpg",
    },
    {
        name: "กะเพราขุนช้าง",
        lat: "13.649459",
        lng: "100.496521",
        time: "10:00–23:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
        popupImg:"/images/Kapow.jpg",
    },
    {
        name: "แชมป์หมูกระทะประชาอุทิศ",
        lat: "13.649309957484583",
        lng: "100.49653624725111",
        time: "10:00–23:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
        popupImg:"/images/Champ.jpg",
    },
    {
        name: "ปังเว่ย 100",
        lat: "13.648242",
        lng: "100.496306",
        time: "07:30–20:30",
        Tag: "Bakery",
        dayoff: "",
        ImageIcon:"/images/MarkerBakery.png",
        popupImg:"/images/100.jpg",
    },
    {
        name: "นาย 9 ราดหน้าประชาอุทิศ",
        lat: "13.648169",
        lng: "100.496315",
        time: "16:30–00:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
        popupImg:"/images/9.jpg",
    },
    {
        name: "เก่า สังคมนิยม โกปี",
        lat: "13.647991",
        lng: "100.496289",
        time: "16:30–03:00",
        Tag: "Food,Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
        popupImg:"/images/Gopi.jpg",
    },
    {
        name: "ลานปูน",
        lat: "13.651712",
        lng: "100.496947",
        time: "",
        Tag: "",
        dayoff: "",
        ImageIcon:"/images/MarkerLanPoon.png",
        popupImg:"/images/LanPoon.jpg",
    },
    {
        name: "ก๋วยเตี๋ยวเรืออยุธยา",
        lat: "13.652349",
        lng: "100.496883",
        time: "08:00-17:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerNoodles.png",
    },
    {
        name: "THE TIGER FIRE",
        lat: "13.652668",
        lng: "100.496994",
        time: "11:30:21:30",
        Tag: "Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerDrink.png",
    },
    {
        name: "หมาล่าปีชง",
        lat: "13.652702",
        lng: "100.497018",
        time: "17:00-21:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerMhaRa.png",
    },
    {
        name: "เรือนไม้ ลาบยโสธร",
        lat: "13.652839582626761",
        lng: "100.49710489301775",
        time: "12:00-20:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "แม่ทัพแซลมอน",
        lat: "13.653266966812026",
        lng: "100.49724304084327",
        time: "11:00-21:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "มุมนั่ง",
        lat: "13.653353744145567",
        lng: "100.49731145886838",
        time: "08:30-16:30",
        Tag: "Food,Drink,Halal",
        dayoff: "Sunday",
        ImageIcon:"/images/MarkerHalal.png",
    },
    {
        name: "MANDARIN",
        lat: "13.65345471422748",
        lng: "100.49736415142957",
        time: "12:00-22:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "อาม่า โภชนา",
        lat: "13.653499029277233",
        lng: "100.49737705625947",
        time: "14:00-21:00",
        Tag: "Food",
        dayoff: "Sunday",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "41 กาแฟสด by เล็กนุ้ย",
        lat: "13.653510140326215",
        lng: "100.49744932823081",
        time: "08:30-18:00",
        Tag: "Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerDrink.png",
    },
    {
        name: "ราชาบะหมี่-เกี๊ยว-หมูแดง",
        lat: "13.65354188620819",
        lng: "100.49746502801504",
        time: "18:00–1:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerNoodles.png",
    },
    {
        name: "โจ๊กสามย่าน",
        lat: "13.653911",
        lng: "100.497680",
        time: "05:00-01:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerKowtom.png",
    },
    {
        name: "คอฟฟี่เอฟ",
        lat: "13.650742",
        lng: "100.496489",
        time: "08:30-18:30",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "KOFFEE ",
        lat: "13.650665969322867",
        lng: "100.49651484640388",
        time: "08:00–19:00",
        Tag: "Cafe",
        dayoff: "",
        ImageIcon:"/images/MarkerCafe.png",
    },
    {
        name: "จิฟุ้ง",
        lat: "13.650583",
        lng: "100.496478",
        time: "10:00–20:30",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "ครัวคุณโรส",
        lat: "13.650512230023793",
        lng: "100.49647772125599",
        time: "08:00-20:30",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "CHUBBY CHIILD CAFÉ",
        lat: "13.650163",
        lng: "100.496413",
        time: "09:00–19:30",
        Tag: "Cafe",
        dayoff: "",
        ImageIcon:"/images/MarkerCafe.png",
    },
    {
        name: "MANPUKU RAMEN",
        lat: "13.650069",
        lng: "100.496417",
        time: "11:30–21:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "ครัวอีสาน",
        lat: "13.649980238707144",
        lng: "100.49638306565075",
        time: "11:00–21:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "BLK BOBA",
        lat: "13.649864864973829",
        lng: "100.49635852466963",
        time: "10:00-19:30",
        Tag: "Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerDrink.png",
    },
    {
        name: "ครัวพี่ต๊อด",
        lat: "13.649481198186251",
        lng: "100.49633260383108",
        time: "17:00–3:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "โอชิน สุกี้ยากี้",
        lat: "13.649349557348888",
        lng: "100.49623438495522",
        time: "07:00–20:00",
        Tag: "Food",
        dayoff: "Sunday",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "โจ้กบางกอก",
        lat: "13.648196",
        lng: "100.496135",
        time: "05:00–10:00,15:00–22:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerKowtom.png",
    },
    {
        name: "ร้านขนมเบื้อง",
        lat: "13.651579431677476",
        lng: "100.49668915652268",
        time: "10:30-17:00",
        Tag: "Dessert",
        dayoff: "Sunday",
        ImageIcon:"/images/MarkerKanomBerng.png",
    },
    {
        name: " ร้านกล้วยทอด",
        lat: "13.651599381819153",
        lng: "100.49669408578058",
        time: "09:00-17:00",
        Tag: "Dessert",
        dayoff: "Saturday,Sunday",
        ImageIcon:"/images/MarkerBanana.png",
    },
    {
        name: "The FIRST Korean Dessert Cafe",
        lat: "13.651794231373824",
        lng: "100.49665836893428",
        time: "10:00–22:00",
        Tag: "Cafe",
        dayoff: "",
        ImageIcon:"/images/MarkerCafe.png",
    },
    {
        name: "ร้านชา",
        lat: "13.651955126979638",
        lng: "100.49668058565261",
        time: "06:00-16:00",
        Tag: "Drink",
        dayoff: "Saturday,Sunday",
        ImageIcon:"/images/MarkerDrink.png",
    },
    {
        name: "NOBI CHA",
        lat: "13.65205143108178",
        lng: "100.49670174378579",
        time: "9:00–19:30",
        Tag: "Drink",
        dayoff: "Thursday",
        ImageIcon:"/images/MarkerDrink.png",
    },
    {
        name: "ร้านเจ้จิ๋ม",
        lat: "13.652102",
        lng: "100.496704",
        time: "08:30-21:00",
        Tag: "Food",
        dayoff: "Public holidays",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "พรนมสด",
        lat: "13.65214759315605",
        lng: "100.49669623255397",
        time: "10:00-22:00",
        Tag: "Dessert",
        dayoff: "",
        ImageIcon:"/images/MarkerToast.png",
        popupImg:"/images/PornNomSod.jfif",
        
    },
    {
        name: "มีข้าวเตี๋ยว",
        lat: "13.652220653216649",
        lng: "100.49667040212121",
        time: "08:00-16:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "Motto crepe&Tea bar ",
        lat: "13.652319882704443",
        lng: "100.49668041078135",
        time: "13:00–1:00",
        Tag: "Food,Drink,Dessert",
        dayoff: "",
        ImageIcon:"/images/MarkerMotto.png",
        popupImg:"/images/Motto crepe&Tea bar.jpg",
    },
    {
        name: "Gugu chicken",
        lat: "13.652283925945824",
        lng: "100.49667755518999",
        time: "9:00–21:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerGuGuChicken.png",

    },
    {
        name: "หลีก๋วยเตี๋ยวเป็ด",
        lat: "13.652300581020244",
        lng: "100.49667602562506",
        time: "09:00-17:30",
        Tag: "Food",
        dayoff: "Sunday",
        ImageIcon:"/images/MarkerNoodles.png",
    },
    {
        name: "ลานไม้",
        lat: "13.652631",
        lng: "100.496715",
        time: "",
        Tag: "",
        dayoff: "",
        ImageIcon:"/images/MarkerLanmai.png",
    },
    {
        name: "สุวิชย์ จุฬา ลาบเป็ดยโส",
        lat: "13.653486",
        lng: "100.497173",
        time: "11:00-23:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    
    {
        name: "ตามสั่ง ก๋วยเตี๋ยวเรืออยุธยา",
        lat: "13.653581405265543",
        lng: "100.497200389554",
        time: "10:00-17:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerNoodles.png",
    },
    {
        name: "ปราณี ขนมจีน&ข้าวซอย",
        lat: "13.649540",
        lng: "100.490492",
        time: "10:30-20:00",
        Tag: "Food",
        dayoff: "Sunday",
        ImageIcon:"/images/MarkerNoodles.png",
    },
    {
        name: "ข้าวต้มปลา 164",
        lat: "13.64965286492891",
        lng: "100.49032204298089",
        time: "11:00-21:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerKowtom.png",
    },
    {
        name: "หลงนมคาเฟ่",
        lat: "13.649617480297948",
        lng: "100.49017267775201",
        time: "11:00-21:00",
        Tag: "Cafe",
        dayoff: "",
        ImageIcon:"/images/MarkerCafe.png",
    },
    {
        name: "ใอ้ซ่างหม่าล่าสายพาน",
        lat: "13.649387518544591",
        lng: "100.48999595867289",
        time: "12:00-22:40",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerMhaRa.png",
    },
    {
        name: "Susco",
        lat: "13.650927328461522",
        lng: "100.48870045588764",
        time: "",
        Tag: "",
        dayoff: "",
        ImageIcon:"/images/MarkerSusco.png",
    },
    {
        name: "ยโสธรอ้วนลาบเป็ด",
        lat: "13.650923",
        lng: "100.488156",
        time: "12:00-23:00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "Inthanin",
        lat: "13.650930163531939",
        lng: "100.48813462103067",
        time: "06:15–18:00",
        Tag: "Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerDrink.png",
    },
    {
        name: "strangers again",
        lat: "13.650960",
        lng: "100.488094",
        time: "11.00-20.00",
        Tag: "Food,Drink",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "ฉวนล่า หม้อไฟ",
        lat: "13.650871",
        lng: "100.487900",
        time: "12.00-21.00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerHotpot.png",
    },
    {
        name: "กาแฟพันธุ์ไทย",
        lat: "13.65085457767805",
        lng: "100.48778896427703",
        time: "09.00-17.00",
        Tag: "Cafe",
        dayoff: "",
        ImageIcon:"/images/MarkerCafe.png",
    },
    {
        name: "ร้านวรรณ",
        lat: "13.651043137713756",
        lng: "100.48778109847251",
        time: "11.00-20.00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerSomTum.png",
    },
    {
        name: "ไอ้หยาหม่าล่า & แซลม่อนย่างเนย",
        lat: "13.651049387949739",
        lng: "100.48776315200413",
        time: "14.00-20.00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerMhaRa.png",
    },
    {
        name: "ครัวยายเรียม",
        lat: "13.6510748007338",
        lng: "100.48770481396072",
        time: "11.00-20.00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    {
        name: "ครัวเชฟบาส",
        lat: "13.650941220684398",
        lng: "100.48773230660187",
        time: "10.00-19.00",
        Tag: "Food",
        dayoff: "",
        ImageIcon:"/images/MarkerFood.png",
    },
    
];
export default markers;