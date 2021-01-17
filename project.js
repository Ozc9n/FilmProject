const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");

//UI başalatma
const ui = new UI();
// Event yükleme
eventListener();
//Storage'da depolamak 
const storage = new Storage();

function eventListener(){
    form.addEventListener("submit",addFilm);
    //Sayfa yeniden yüklense bile Storagedeki filmleri listeleme
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
}

function addFilm(e){
    //Film ekleme 
    const title=titleElement.value;
    const url=urlElement.value;
    const director=directorElement.value;

    if(title==="" || url==="" || director===""){
        //Hata Mesajı
        ui.displayMessages("Lütfen tüm alanları doldurunuz ...","danger");
        
    }
    else{
        //Yeni Film
        const newFilm= new Film(title,director,url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film başarıyla eklendi ","success");
    }


    ui.clearInputs(urlElement,titleElement,directorElement);
    e.preventDefault();
}