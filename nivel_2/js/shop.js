//If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
 // Array with products (objects) added directly with push(). Products in this array are repeated.
 var cartList = [];
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 let carts=[];
 
 var total = 0;
 
 // var repetidos=[];
 
 // Exercise 1
//  function buy(id) {
//      // 1. Loop for to the array products to get the item to add to cart
//      // 2. Add found product to the cartList array
//      let producto;
     
//      for(let i=0;i<products.length;i++){
//          if(products[i].id==id){
//              producto=products[i];
//          }
//      }
//      cartList.push(producto);
//  }
 
 //Exercise 2
 function cleanCart() {
     // document.getElementById("clean").addEventListener("click", cleanCart, false);
     cart.length=0;
     carts.length=0;
     document.getElementById("total").innerHTML=0;
     printCart();
    
 }
 
 
 
 // Exercise 3
 function calculateTotal() {
     // Calculate total price of the cart using the "cartList" array
 
     let suma=0;
    
     for(let i=0;i<cart.length;i++){
   
         if(cart[i].subtotalWithDiscount!=null){
             suma+=cart[i].subtotalWithDiscount;
         }else{
             suma+=cart[i].subtotal;
         }
      
    }
 
    return suma;
 }
 
 
 // Exercise 4
//  function generateCart() {
    
//      var temp=[];
//      let repetidos=[];
//      cartList.sort(((a, b) => a.id - b.id));
 
  
//  let cont=1;
//   cart=[];
 
 
//      for(let i=0;i<cartList.length;i++){
     
//          if(cartList[i+1]==cartList[i]){

//              cont++;
            
//          }else{
//              cart.push(cartList[i]);
//              repetidos.push(cont);
//              cont=1;
//          }
//      }
  
 
//       for(let i=0;i<repetidos.length;i++){
//          cart[i]['quantity'] = repetidos[i];
//          cart[i]['subtotal'] = repetidos[i]*cart[i].price;
   
//      }
//  }
 
 // Exercise 5
 function applyPromotionsCart() {
// Apply promotions to each item in the array "cart"
  let priceDiscountOil=10;
  let priceDiscountCake=66.67;
     for(let i=0;i<cart.length;i++){
       
         if(cart[i].name=="cooking oil" && cart[i].quantity>=3){
  
             cart[i]['subtotalWithDiscount'] = cart[i].quantity*priceDiscountOil;
               
         }if(cart[i].name=="Instant cupcake mixture" && cart[i].quantity>=10){
             cart[i]['subtotalWithDiscount'] = (cart[i].subtotal*priceDiscountCake)/100;
         }
     }
 }
 
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {

    let cont =1;
    let producto;
     
     for(let i=0;i<products.length;i++){
         if(products[i].id==id){   
             producto=products[i];  
         }
     }
    
     carts.push(producto);
     carts.sort(((a, b) => a.id - b.id));
 
    
 
     for(let i=0;i<carts.length;i++){
         if(carts[i+1]==carts[i]){
 
           carts[i]['quantity'] =cont;
           carts[i]['subtotal'] = cont*carts[i].price;
           cont++;
        
            
     }else{
         carts[i]['quantity'] =cont
         carts[i]['subtotal'] = cont*carts[i].price;
         cont=1;
     }

 }
 

 cart = carts.filter((item,index)=>{
     return carts.indexOf(item) === index;
   })


 document.getElementById("count_product").innerHTML=carts.length;
 applyPromotionsCart();


 }
 
 // Exercise 8
 function removeFromCart(id) {

    let sum=0;
  
    if( cart[id].quantity>1){

    cart[id].quantity=cart[id].quantity-1;

    }else{

        cart.splice(id, 1); 
    }

    

    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i].quantity;
    }

     document.getElementById("count_product").innerHTML=sum;
     printCart();
     
 }
 
 // Exercise 9
 function printCart() {

   total=calculateTotal();
  
   tbody=document.querySelector("table tbody");
   tbody.innerHTML='';
 
   for(var i=0;i<cart.length;i++){
       var row=tbody.insertRow(i),
        nameGrid=row.insertCell(0),
        priceGrid=row.insertCell(1);     
        quantityGrid=row.insertCell(2);   
        subtotalGrid=row.insertCell(3);
        subtotalDiscGrid=row.insertCell(4);
        nameGrid.innerHTML=cart[i].name;
        priceGrid.innerHTML=cart[i].price;
        quantityGrid.innerHTML=cart[i].quantity;
        subtotalGrid.innerHTML=cart[i].subtotal;
 
        if(cart[i].subtotalWithDiscount!=null){
          subtotalDiscGrid.innerHTML=cart[i].subtotalWithDiscount;
        }
   }

   document.getElementById("total").innerHTML=total;
   let sum=0;

    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i].quantity;
    }

    document.getElementById("count_product").innerHTML=sum;

 }