const products = [
   { id:'1', name:'Cafe Colombiano', price: 1500, categoria: 'Tostado', img: 'https://www.periodicodigitalgratis.com/gratis/img/34636/34636_0225056001589506103.jpg', stock: 10, description:'Descripcion Cafe Colombiano'},
   { id:'2', name:'Cafe Brasilero', price: 2000, categoria: 'Torrado', img: 'https://www.excelenciasgourmet.com/sites/default/files/styles/slideshow_large/public/2020-02/xCaf,PC3,PA9.jpg,qitok=neI9CADb.pagespeed.ic.j5rtqB3mOz.webp', stock: 12, description:'Descripcion Cafe Brasilero'},
   { id:'3', name:'Cafe Turco', price: 3500, categoria: 'Intenso', img: 'https://www.excelenciasgourmet.com/sites/default/files/inline-images/765x510xTaza-de-origen-que-hace-especial-cafe-colombiano.jpg.pagespeed.ic.UMMOd10w68.webp', stock: 15, description:'Descripcion Cafe Turco'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() =>{
            resolve(products)
        },2000)
    })
}