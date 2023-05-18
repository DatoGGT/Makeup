const root=document.querySelector("#mainjs")

const url =
`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`


const fetchData = async () => {

try {
const response = await fetch(url);

return response.json();

} catch (error) {
    console.error(error);
}
};


const drwadata=async()=>{
    const makeup = await fetchData()
    makeup.forEach(e =>{
        if(e.rating===null){
            e.rating=5
        }
        })
    
    makeup.forEach((makeup) => {
    const makeupi= `<article id="mainjs">
    <div class="cont">
        <figure>
            <img src= ${makeup.image_link}>
        </figure>
        <div class="forp">
        <h1>${makeup.name}</h1>
        <h2> <a href="${makeup.website_link}" class="hrefi">  ${makeup.brand}</a> </h2>
        <p>${makeup.description} </p>
        </div>
        <div class="color">
            <div class="colors"> <h2>Colors </h2>
            <p class="divebi"> </p> </div>
            
            <p> Rating <br>${makeup.rating}</p>
        </div>
        <div class="price">
            <p class="pricedo">Price ${makeup.price}</p>
            <div class="buy">
            <h2><a href="${makeup.product_link}" class="link">Buy Now</a></h2>
        </div>
        </div>
        </div>
</article>
`
root.innerHTML+=makeupi

})


const colordiv=document.querySelectorAll(".divebi")

makeup.forEach((elem,indx)=>{
    
    
    if(elem.product_colors.length===0){
        const newdiv=  document.createElement("div")
        colordiv[indx].appendChild(newdiv)
        newdiv.textContent= "None"
}
else{
    for(let i=0;i<elem.product_colors.length;i++){
        console.log(  elem.product_colors[i].hex_value)
    
        const colorss=document.createElement("div")
        colorss.style.width="30px"
        colorss.style.height="30px"
        colorss.style.borderRadius="20px"
        colorss.style.flex
        colorss.style.backgroundColor=elem?.product_colors[i]?.hex_value
        colordiv[indx].appendChild(colorss)
    }
}
}

)}    



drwadata()
