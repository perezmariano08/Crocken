const products = [
    {
        id: 1,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Crocken'", 
        description: "Pan de papa , mayonesa Crocken ahumada, pechuga Crocken , lechuga, tomate y cebolla colorada encurtida.",
        price: 2139,
        img: "burguer-crocken.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {   
        id: 2,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Hot Spicy'", 
        description: "Pan de papa, mayonesa Crocken picante, pechuga Crocken y ajies en conserva.",
        price: 2149,
        img: "burguer-hot-spicy.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.4
    },
    {
        id: 3,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Crunchy'", 
        description: "Pan de papa, mayonesa Crocken, pechuga Crocken, coleslaw, pepinos en escabeche y salsa agridulce.",
        price: 2239,
        img: "burguer-crunchy.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.8
    },
    {
        id: 4,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Original'", 
        description: "Pan de papa, mayonesa Crocken , pechuga Crocken y queso cheddar.",
        price: 2279,
        img: "burguer-original.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 5,                                                        
        type: "burguer",
        name: "Sandwich de Pollo Frito 'De la Casa'", 
        description: "Pan de papa, mayonesa Crocken, rúcula, pechuga Crocken, queso parmesano, morrón asado y mostaneza Crocken con miel.",
        price: 2829,
        img: "burguer-de-la-casa.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 6,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Americano'", 
        description: "Pan de papa, mayonesa Crocken, pechuga Crocken, queso cheddar, panceta ahumada, cebolla caramelizada y barbacoa.",
        price: 2459,
        img: "burguer-americano.jpg",
        cantidad: 1,
        title: "la mas caliente",
        stars: 4.5
    },
    {
        id: 7,
        type: "burguer",
        name: "Sandwich Veggie", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2089,
        img: "burguer-veggie.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 8,
        type: "combo-1",
        name: "Combo Crocken Mini", 
        description: "Combo de 3 piezas Crocken (alitas y pechuga) con acompañamiento y salsa a elección.",
        price: 2199,
        img: "combo-crocken-mini.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 9,
        type: "combo-1",
        name: "Combo Crocken Junior", 
        description: "Combo de 4 piezas Crocken (alitas y pechuga) con acompañamiento y salsa a elección.",
        price: 2309,
        img: "combo-crocken-jr.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 10,
        type: "combo-1",
        name: "Combo Crocken Medium", 
        description: "Combo de 5 piezas Crocken (alitas y pechuga) con acompañamiento y salsa a elección.",
        price: 2479,
        img: "combo-crocken-medium.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 11,
        type: "combo-1",
        name: "Combo Crocken Senior", 
        description: "Combo de 6 piezas Crocken (alitas y pechuga) con acompañamiento y salsa a elección.",
        price: 2879,
        img: "combo-crocken-senior.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 12,
        type: "combo-1",
        name: "Combo de 3 Alitas Crocken", 
        description: "Combo de 3 Alitas Crunch con acompañamiento y salsa a elección.",
        price: 1679,
        img: "combo-3alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 13,
        type: "combo-1",
        name: "Combo de 4 Alitas Crocken", 
        description: "Combo de 4 Alitas Crunch con acompañamiento y salsa a elección.",
        price: 1789,
        img: "combo-4alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 14,
        type: "combo-1",
        name: "Combo de 5 Alitas Crocken", 
        description: "Combo de  5 Alitas Crunch con acompañamiento y salsa a elección",
        price: 1959,
        img: "combo-5alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 15,
        type: "combo-1",
        name: "Pop´s Crocken", 
        description: "Combo de 10 piezas Pop´s de Alita con acompañamiento y salsa a elección.",
        price: 1869,
        img: "pops-crocken.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 16,
        type: "combo-1",
        name: "Combo de Pechugas Crocken Individual", 
        description: "Combo de pechugas Crocken rebozadas , con acompañamiento y salsa a elección.",
        price: 2829,
        img: "combo-pechugas-crocken.webp",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 17,
        type: "combo-2",
        name: "Combo Crocken Duo", 
        description: "Combo de 8 piezas Crocken (alitas y pechuga) mas 2 acompañamientos y 2 salsas a elección.",
        price: 4199,
        img: "combo-crocken-duo.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 18,
        type: "combo-2",
        name: "Combo Crocken Senior Duo", 
        description: "Combo de 10 piezas Crocken (alitas y pechuga)  con 2 acompañamientos y 2 salsas a elección.",
        price: 4709,
        img: "combo-crocken-senior-duo.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 19,
        type: "combo-2",
        name: "Combo de 10 Alitas Crunch", 
        description: "Combo de 10 alitas con 2 acompañamientos y dos salsas a elección.",
        price: 3429,
        img: "combo-10alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 20,
        type: "combo-2",
        name: "Pop´s Crocken para Compartir", 
        description: "Combo de 20 piezas Pop´s  de alitas con 2 acompañamientos y 2 salsas a elección.",
        price: 3099,
        img: "pops-crocken-p-compartir.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 21,
        type: "combo-2",
        name: "Combo de Pechugas Crocken para Compartir", 
        description: "Combo de piezas de pechuga Crocken rebozadas para compartir, con acompañamientos y salsas a elección.",
        price: 5239,
        img: "combo-pechugas-crocken-p-compartir.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 22,
        type: "picadas",
        name: "Picada Crocken para 2 Personas (Pican 3)", 
        description: "Alitas, pechugas y Pop´s Crocken mas 1 porcion de aros, 1 porcion de papas y 2 salsas.",
        price: 4419,
        img: "picada-crocken.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 23,
        type: "picadas",
        name: "Picada Planeta  Crocken para 4 Personas", 
        description: "Dos hamburguesas dobles de carne vacuna personalizables, porcion de Alitas Crunch y Pechugas Crocken con doble porcion de papas fritas, chips de vegetales y aros de cebolla con dos salsas a elección.",
        price: 8509,
        img: "picada-planeta-crocken-4-personas.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 24,
        type: "ensaladas",
        name: "Ensalada Coleslaw", 
        description: "Apio, Manzana, Nueces, Mostaneza.",
        price: 1319,
        img: "ensalada-coleslaw.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 25,
        type: "ensaladas",
        name: "Ensalada Waldorf", 
        description: "Repollo Blanco y Colorado, Zanahoria, Mostaza.",
        price: 1379,
        img: "ensalada-waldorf.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 26,
        type: "ensaladas",
        name: "Ensalada Caesar", 
        description: "Lechuga, queso parmesano, pan tostado, salsa Caesar y Pechuga de Pollo.",
        price: 1509,
        img: "ensalada-caesar.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 27,
        type: "wraps",
        name: "Veggie Wrap", 
        description: "Tortilla de trigo con rúcula, queso parmesano, mayonesa crocken verde, nueces, huevo a la plancha, cebolla Colorada y repollo.",
        price: 1849,
        img: "veggie-wrap.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 28,
        type: "wraps",
        name: "Crocken Wrap", 
        description: "Tortilla de trigo con pollo desmenuzado, morrón, zanahoria, mostaneza, queso crema y ciboullete.",
        price: 1869,
        img: "crocken-wrap.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 29,
        type: "wraps",
        name: "Crunchy Wrap", 
        description: "Tortilla de trigo con sticks crocken, cebolla caramelizada, salsa Barbacoa, cheddar, repollo colorado y cebolla de verdeo.",
        price: 2229,
        img: "crunchy-wrap.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 30,
        type: "acompañamientos",
        name: "Papas Fritas", 
        description: "Papas fritas Premium",
        price: 799,
        img: "papas-fritas.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 31,
        type: "acompañamientos",
        name: "Chips de Vegetales", 
        description: "Mix de vegetales crocantes. Ñam Ñam!",
        price: 689,
        img: "chips-vegetales.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 32,
        type: "acompañamientos",
        name: "Papas fritas con Parmesano", 
        description: "Papas fritas Premium.",
        price: 1249,
        img: "papas-fritas-parmesano.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 33,
        type: "acompañamientos",
        name: "Papas fritas con Cheddar", 
        description: "Papas fritas Premium.",
        price: 1189,
        img: "papas-fritas-cheddar.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 34,
        type: "acompañamientos",
        name: "Papas fritas con Salsa Barbacoa", 
        description: "Papas fritas Premium.",
        price: 1299,
        img: "papas-fritas-barbacoa.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 35,
        type: "bebidas",
        name: "Lata de Mirinda 354 Cc.", 
        description: "Bebida sabor Naranja.",
        price: 300,
        img: "mirinda.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 36,
        type: "bebidas",
        name: "Lata de Pepsi 354 Cc.", 
        description: "Bebida sabor Cola.",
        price: 300,
        img: "pepsi.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    }
]

const appState = {
    activeFilter: 'burguer',
}