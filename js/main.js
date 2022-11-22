const contenedorProductos = document.getElementById('productos')


function renederizarProductos() {

    products.forEach((product) =>{

        console.log(product.nombre);
        const card = document.createElement('div')
        card.classList.add('card')
    
        contenedorProductos.appendChild(card)
        
        card.innerHTML = `<div>
        <h3>${product.nombre}</h3>
        <img class='img-producto' src='${product.image}'/>
        <h4 class='producto-precio'>$${product.precio}</h4>
        <p>${product.description}</p>
        <div class='contenido-boton'>
        
        <button class='boton'>Lo Quiero</button>
        </div>

        </div>
        
        </div>`
       
    
    })
}
renederizarProductos()