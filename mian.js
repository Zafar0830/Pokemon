var elWrapper=document.querySelector(".pokemon_container");

var Array=pokemons.slice(0,149);


function render(arr,List) {
    
    for (let i = 0; i < arr.length; i++) {
        var ColDiv=document.createElement("div");
        var CardDiv=document.createElement("div");
        var ImgDiv=document.createElement("img");
        var ColDivBody=document.createElement("div");
        var newCardTitle=document.createElement("h2");
        var newCardText=document.createElement("p");
        var newP1=document.createElement("p");
        var newP2=document.createElement("p");
        
        ColDiv.setAttribute("class","col my-3  ");
        CardDiv.setAttribute("class","card shadowCard");
        ImgDiv.setAttribute("class","card-img-top");
        ColDivBody.setAttribute("class","card-body");
        newCardTitle.setAttribute("class","title_h2");
        newCardText.setAttribute("class","Title_P");
        newP1.setAttribute("class","Title_P1");
        newP2.setAttribute("class","Title_P2")

        
        
        ColDivBody.appendChild(newCardTitle)
        ColDivBody.appendChild(newCardText)
        ColDivBody.appendChild(newP1)
        ColDivBody.appendChild(newP2)
        
        CardDiv.appendChild(ImgDiv)
        CardDiv.appendChild(ColDivBody)
        
        ColDiv.appendChild(CardDiv)
        
        
        List.appendChild(ColDiv)
        
        ImgDiv.src=arr[i].img
        newCardTitle.textContent=arr[i].name
        newCardText.textContent=arr[i].type
        newP1.textContent=arr[i].weight
        newP2.textContent=arr[i].height

    }
}
render(Array,elWrapper)