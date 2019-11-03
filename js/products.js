window.onload = function () {
    
    const app = firebase.app();

    let products_showcase = this.document.getElementById('tableProducts');
    const db = firebase.firestore();
    const productsRef = db.collection('products')

    productsRef.get()
            .then(products => {
                products.forEach(doc => {
                    data = doc.data()
                    products_showcase.innerHTML += 
                    '<tr id="products-info">'+
                        '<td class="tdTable">'+
                            '<div class="containerProducts">'+
                                '<img class="imgProducts" src="'+data.image+'">'+
                                '<h4 class="nameProducts">'+data.name+'</h4>'+
                                '<p class="priceProducts">'+data.price+'</p>'+
                            '</div>'+
                        '</td>'+
                    '</tr>';
                });
            })

}