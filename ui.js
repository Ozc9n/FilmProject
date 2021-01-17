function UI(){

}
UI.prototype.addFilmToUI= function(newFilm){
   
    const filmList = document.getElementById("films");
    
    // Yeni bir filmi javascrip ile eklemek Subject Literal form
   filmList.innerHTML+= `
   <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
  
  `; 
}
UI.prototype.clearInputs=function(element1,element2,element3){//Ekledikten sonra yazı alanını temizlemek için 
    element1.value="";
    element2.value="";
    element3.value="";
}
UI.prototype.displayMessages=function(message,type){//Bilgilendirme mesajları için
  const cardBody =document.querySelector(".card-body");

  const div = document.createElement("div");

  div.className=`aler alert-${type}`;
  div.textContent=message;
  // En sona eklemek için
  cardBody.appendChild(div);
  // 2 saniye sonra silinmesi için 
  setTimeout(function (){
    div.remove();
  },2000);


}
UI.prototype.loadAllFilms=function (films){

  const filmList=document.getElementById("films");
  // Storage'deki filmleri listemek için forEach döngüsü 
  films.forEach(function(film){
    filmList.innerHTML+=`
    <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    `;
  });
}
UI.prototype.deleteFilmFromUI=function(element){
element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI =function(){

  const filmList = document.getElementById("films");

  while(filmList.firstElementChild !== null){
    filmList.firstElementChild.remove();
  }
}