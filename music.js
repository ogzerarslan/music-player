class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Aman Güzel Yavaş Yürü", "Halodayı-Azer Bülbül","1.jpg","1.mp3"),    
    new Music("Prezeden Gülümsemeler", "Halodayı","2.jpg","2.mp3"),    
    new Music("Daha Nasıl Sevebilirim", "Gülden Karaböcek","3.jpg","3.mp3")    
];
