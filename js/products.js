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
                    '<img class="imgProducts" src="'+data.images[0]+'">'+
                    '<a href="#MDL01" class="btn modal-trigger red"  onclick="fillModal('+'\''+String(data.name)+'\''+')">'+data.name+'</a>'+
                    '<p class="priceProducts">'+data.price+'</p>'+
                '</div>'+
            '</td>'+
        '</tr>';

    } else {

        let row_product = this.document.getElementById("products-info-"+counter);
        row_product.innerHTML +=              
            '<td class="tdTable">'+
                '<div class="containerProducts">'+
                    '<img class="imgProducts" src="'+data.images[0]+'">'+
                    '<a href="#MDL01" class="btn modal-trigger red"  onclick="fillModal('+'\''+String(data.name)+'\''+')">'+data.name+'</a>'+
                    '<p class="priceProducts">'+data.price+'</p>'+
                '</div>'+
            '</td>';
    }
}

function fillModal(name) {

    let title;
    let body;
    let price;
    let owner_name;
    let phone;

    const db = firebase.firestore();
    const productsRef = db.collection('products');

    const product = productsRef.where('name', '==', name);

    product.get()
    .then(products => {
        products.forEach(doc => {
            data = doc.data()

            title = data.name;
            body = data.description;
            price = data.price;
            
            if (data.owner) {
                
                data.owner.get()
                .then(owner_item => { 
                    owner_info = owner_item.data();

                    owner_name = owner_info.name;
                    phone = owner_info.phone;

                    document.getElementById("modal-title").innerHTML = title;
                    document.getElementById("modal-body").innerHTML = body;
                    document.getElementById("modal-price").innerHTML = price;
                    document.getElementById("modal-owner").innerHTML = owner_name;
                    document.getElementById("img-0").src = data.images[0];
                    document.getElementById("img-1").src = data.images[1];
                    document.getElementById("img-2").src = data.images[2];
                    document.getElementById("wpp-link").href = 
                    "https://api.whatsapp.com/send?phone=+57"+phone+"&text=Hola, me interesa un producto que vi en el bazar ancestral. "+
                    "Producto: "+title;

                })
                .catch(err => console.error(err));
            }

        });
    })

   

}
