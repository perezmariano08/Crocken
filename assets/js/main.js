// Elementos DOM
// Iconos
const iconCart = document.querySelector(".cart-icon")
const iconMenu = document.querySelector(".icon-menu")
const iconCloseMenu = document.querySelector(".icon-close-menu")
const iconCloseCart = document.querySelector(".icon-close-cart")

// Categorias
const categoriesContainer = document.querySelector(".categories")
const categoriesList = document.querySelectorAll(".category")

// Carrito
const cartCount = document.querySelector(".cart-count") 
const cartMenu = document.querySelector(".cart")
const productsCart = document.querySelector(".cart-container")
const cartTotal = document.querySelector("#total-cart")
const buyBtn = document.querySelector(".btn-buy")


const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".navbar-responsive")
const overlay = document.querySelector(".overlay")

// Productos
const productsContainer = document.querySelector(".products-container")
let productModal = ''
const boxes = document.querySelectorAll(".box")

//  Modal
const successModal = document.querySelector(".add-modal")

// LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || []

const saveCart = () =>{
    localStorage.setItem("cart", JSON.stringify(cart))
}

const animationBoxes = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si el elemento es visible
    if (entry.isIntersecting) {
        // Agrega una clase para animar el elemento
        entry.target.classList.add('animate-boxes');
    } else {
        // Si el elemento ya no es visible, remueve la clase de animación
        entry.target.classList.remove('animate-boxes');
    }
    });
});


// Scroll
const scroll = () => {        
    let scrollPos = window.scrollY
    if (scrollPos > 39) {
        
    }
    else {
        
    }
}

// Crear estructura HTML de las Cards
const createProductTemplate = (product) => {
    const {id, name, description, price, img, cant, title, stars} = product
    return `
        <div class="product">
            <div class="product-modal" data-id="${id}"></div>
            <div class="product-img">
                <img src="./assets/img/products/${img}" alt="" srcset="">
                <div class="product-stars">
                    <i class="fa-solid fa-star star"></i>
                    <p class="stars-number">${stars}</p>
                </div>
                <p class="product-ingredients">${description}</p>
            </div>
            <div class="product-info">
                <div class="product-title">
                    <span class="new">¡${title}!</span>
                    <span class="title">${name}</span>
                </div>
                <div class="product-description">
                    <span class="product-price">$${price}</span>
                    <button class="btn-container">
                        <i class="btn-add btn-orange btn-circle fa-solid fa-plus" data-id="${id}"
                        data-name="${name}"
                        data-price="${price}"
                        data-img="${img}"></i>
                    </button>
                </div>
            </div>
        </div>
        `
        
}

// Renderizar productos
const renderProducts = (productsList) => {
    productsContainer.innerHTML =  productsList.map(createProductTemplate).join("")
    
}

const toggleCart = () => {
	cartMenu.classList.toggle("open-cart");
	overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
	menu.classList.toggle("open-menu");
	overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
	cartMenu.classList.remove("open-cart");
    menu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
    cartMenu.classList.remove("open-cart");
    menu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

// Función para verificar el tamaño de la pantalla y realizar acciones correspondientes
const verificarTamañoPantalla = () => {
    var anchoPantalla = window.innerWidth;
    if (anchoPantalla < 768) {
        // Acciones para dispositivos móviles

    } else {
        // Acciones para escritorio
        closeOnOverlayClick()
    }
}

// Funcion que pregunta por el filtro (Validacion)
const isInactiveFilterBtn = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    )
}

// Funcion que cambia el estilo del boton al filtrar
const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList]
    categories.forEach((category) => {
        if (category.dataset.category !== selectedCategory) {
            category.classList.remove("active")
            return
        }
        category.classList.add("active")
    })
}

// Funcion que cambia el filtro
const changeFilterState = (btn) => {
    appState.activeFilter =  btn.dataset.category  
    changeBtnActiveState(appState.activeFilter)  
}

// Renderiza los productos filtrados
const renderFilteredProducts = () => {
    const filteredProducts = products.filter((product) => {
        return product.type === appState.activeFilter
    })
    renderProducts(filteredProducts)
}

// Aplicar filtros
const applyFilter = ({target}) => {
    var button = target.closest("button")
    // Chequear que sea boton y no esté activo
    if (!isInactiveFilterBtn(button)) {
        return
    }
    // Cambiar el estdo del filtro
    changeFilterState(button)

    // Si hay filtro activo, renderizo productos
    productsContainer.innerHTML = ''
    if (appState.activeFilter) {
        renderFilteredProducts()
        productModal = document.querySelectorAll(".product-modal")
        return
    }
    
}

// CARRITO

const createCartProductTemplate = (cartProduct) => {
    const {id, name, price, img, cantidad} = cartProduct
    return `
    <div class="cart-item">
        <div class="item-img">
            <img src="./assets/img/products/${img}" />
        </div>
        <div class="item-info">
            <div class="item-info-text">
                <h3 class="item-title">${name}</h3>
                <span class="item-description">+ Papas Fritas (sin cargo)</span>
                <span class="item-price">$${price}</span>
            </div>
            <div class="item-handler">
                <i class="item-edit fa-solid fa-pen-to-square"></i>
                <span class="quantity-handler down" data-id="${id}">-</span>
                <span class="item-quantity">${cantidad}</span>
                <span class="quantity-handler up" data-id="${id}">+</span>
                <i class="item-trash fa-solid fa-trash-can" data-id="${id}"></i>
            </div>
        </div>
    </div>
    `
}

const renderCart = () => {
    if (!cart.length) {
        productsCart.innerHTML = `<p class="none-products" >No hay productos en el carrito.</p>`
        return
    }
    productsCart.innerHTML = cart.map(createCartProductTemplate).join("")
}

const getCartTotal = () => {
    return cart.reduce((acc, val) => {
        return acc + Number(val.price) * val.cantidad
    }, 0)
}

const showCartTotal = () => {
    cartTotal.innerHTML = `$${getCartTotal().toFixed(2)}`
}

const createProductData = (product) => {
    const {id, name, price, img} = product
    return {id, name, price, img}
}

const isExistingCartProduct = (product) => {
    return cart.find((item) => {
        return item.id === product.id
    })
}

const addUnitToProduct = (product) => {
    cart = cart.map((cartProduct) => {
        return cartProduct.id === product.id
            ? {...cartProduct, cantidad: cartProduct.cantidad + 1}
            : cartProduct
    })
}   

const showSuccessModal = (msg, id) => {
    productModal.forEach((product) => {
        if (product.dataset.id === id) {
            product.classList.add("active-modal")
            product.textContent = msg
            setTimeout(() => {
                product.classList.remove("active-modal")
            }, 1500)
        }
    })
}

const createCartProduct = (product) => {
    cart = [
        ...cart,
        {
            ...product,
            cantidad: 1,
        },
    ]
}

const disableButton = (btn) => {
    if (!cart.length) {
        btn.classList.add("disabled")
    } else {
        btn.classList.remove("disabled")
    }
}

const renderCartCount = () => {
    cartCount.innerHTML = cart.reduce((acc, cur) => {
        return acc + cur.cantidad
    }, 0)
}

const updateCartState = () => {
    // Guardar carrito en LocalStorage
    saveCart()
    // Renderizar carrito
    renderCart()
    // Mostrar el total del carrito
    showCartTotal()
    // Chequear disable de Botones
    disableButton(buyBtn)
    // Render Burbuja del cart
    renderCartCount()
}

const addProduct = (e) => {
    if (!e.target.classList.contains("btn-add")) {
        return
    }
    const product = createProductData(e.target.dataset)
    // Si el producto ya existe
    if (isExistingCartProduct(product)) {
        // Agregamos unidad al producto
        addUnitToProduct(product)
        // Damos Feedbak
        showSuccessModal("Se agregó una unidad del producto al carrito", product.id)
    } else {
        // Si no existe, creamoe el card de productos
        // Creamos el nuevo producto en el array
        createCartProduct(product)
        // Damos feedback
        showSuccessModal("El producto se ha agregado al carrito", product.id) 
    }
    // Actualizamos data del carrito
    updateCartState()
}

const removeProductFromCart = (existingProduct) => {
    cart = cart.filter((product) => {
        return product.id !== existingProduct.id
    })
    updateCartState()
}

const substractProductUnit = (existingProduct) => {
    cart = cart.map((product) => {
        return product.id === existingProduct.id
            ? {...product,  cantidad: Number(product.cantidad) - 1}
            : product
    })
}


const handleMinusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id)
    if (existingCartProduct.cantidad === 1) {
        // Eliminar Producto
        if (window.confirm("¿Desea eliminar el producto del carrito?")) {
            removeProductFromCart(existingCartProduct)
        }
        return
    }    
    // Sacarle Unidad al producto
    substractProductUnit(existingCartProduct)
}

const handlePlusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id)
    addUnitToProduct(existingCartProduct)
}

const deleteProduct = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id)
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
        removeProductFromCart(existingCartProduct)
    }
}

const handleQuantity = (e) => {
    if (e.target.classList.contains("down")) {
        // Boton -
        handleMinusBtnEvent(e.target.dataset.id)
    } else if (e.target.classList.contains("up")){
        // Boton +
        handlePlusBtnEvent(e.target.dataset.id)
    } else if (e.target.classList.contains("item-trash")) {
        // Boton Delete
        deleteProduct(e.target.dataset.id)
        
    }
    // Actualizar estado del carrito
    updateCartState()
}

const init = () => {
    // Load
    window.addEventListener('load', verificarTamañoPantalla);
    document.addEventListener("DOMContentLoaded", renderCart)
    document.addEventListener("DOMContentLoaded", showCartTotal)
    // Resixe
    window.addEventListener('resize', verificarTamañoPantalla);
    // Scroll
    window.addEventListener('scroll', scroll);
    
    // Click
    iconCart.addEventListener('click', toggleCart)
    iconMenu.addEventListener('click', toggleMenu)
    categoriesContainer.addEventListener('click', applyFilter)
    productsContainer.addEventListener("click", addProduct)
    productsCart.addEventListener("click", handleQuantity)
    // window.addEventListener("scroll", closeOnScroll);
    overlay.addEventListener('click', closeOnOverlayClick)
    iconCloseCart.addEventListener("click", closeOnOverlayClick)
    iconCloseMenu.addEventListener("click", closeOnOverlayClick)
    //ForEachs
    boxes.forEach((box) => animationBoxes.observe(box))
    // Functions
    renderFilteredProducts()
    disableButton(buyBtn)
    renderCartCount()
    productModal = document.querySelectorAll(".product-modal")
}

init()
