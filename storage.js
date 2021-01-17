//Storage Yapıcı Metodu
function Storage(){

}
Storage.prototype.addFilmToStorage=function (newFilm){
    //Allta oluşturduğumuz fonksiyonu çağırıyoruz.
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    //Stringe çevirip dizi içinde nesne saklamak için 
    localStorage.setItem("films",JSON.stringify(films));
    
}

Storage.prototype.getFilmsFromStorage=function(){
    //Sayfada önceden film olup olmadığını kontrol ediyoruz.
    let films;
    if(localStorage.getItem("films")===null){
        films=[];
    }
    else{
        films=JSON.parse(localStorage.getItem("films"));
    }

    return films;
}