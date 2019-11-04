window.onload = function () {
    
    const app = firebase.app();

    let products_showcase = this.document.getElementById('tableProducts');
    let counter = 1;
    const db = firebase.firestore();
    const productsRef = db.collection('products')

    productsRef.get()
            .then(products => {
                products.forEach(doc => {
                    data = doc.data()

                    setInfo(data, products_showcase, counter);

                    counter++;

                });
            })

}

function requestEspcificProduct(product) {

    let products_showcase = this.document.getElementById('tableProducts');
    products_showcase.innerHTML = '';
    let counter = 1;
    const db = firebase.firestore();
    const productsRef = db.collection('products')
    
    switch (product) {
        case 1:
        
        productsRef.get()
                .then(products => {
                    products.forEach(doc => {
                        data = doc.data()

                        setInfo(data, products_showcase, counter);
                        
                        counter++;
    
                    });
                })
            break;

        case 2:

            const collares = productsRef.where('category', '==','collar');
            collares.get()
                .then(products => {
                    products.forEach(doc => {
                        data = doc.data()

                        setInfo(data, products_showcase, counter);
                        
                        counter++;

                    });
                })
            break;

        case 3:

            const aretes = productsRef.where('category', '==','arete');

            aretes.get()
                .then(products => {
                    products.forEach(doc => {
                        data = doc.data()

                        setInfo(data, products_showcase, counter);
                        
                        counter++;

                    });
                })
            break;

        case 4:
            
            const manilla = productsRef.where('category', '==','manilla');
        
            manilla.get()
                .then(products => {
                    products.forEach(doc => {
                        data = doc.data()

                        setInfo(data, products_showcase, counter);
                        
                        counter++;

                    });
                })

            break;
        case 5:
            
            const mochilas = productsRef.where('category', '==','bolso');
            
            mochilas.get()
                .then(products => {
                    products.forEach(doc => {
                        data = doc.data()

                        setInfo(data, products_showcase, counter);
                        
                        counter++;

                    });
                })

            break;
    }
}

function setInfo(data, products_showcase, counter) {
    if (counter % 2) {
    
        products_showcase.innerHTML +=                   
        '<tr id="products-info-'+(counter + 1)+'">'+
            '<td class="tdTable">'+
                '<div class="containerProducts">'+
                    '<img class="imgProducts" src="'+data.image+'">'+
                    '<h4 class="nameProducts">'+data.name+'</h4>'+
                    '<p class="priceProducts">'+data.price+'</p>'+
                '</div>'+
            '</td>'+
        '</tr>';

    } else {

        let row_product = this.document.getElementById("products-info-"+counter);
        row_product.innerHTML +=              
            '<td class="tdTable">'+
                '<div class="containerProducts">'+
                    '<img class="imgProducts" src="'+data.image+'">'+
                    '<h4 class="nameProducts">'+data.name+'</h4>'+
                    '<p class="priceProducts">'+data.price+'</p>'+
                '</div>'+
            '</td>';
    }
}