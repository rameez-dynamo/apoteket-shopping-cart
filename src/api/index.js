
const xKey = 'qwerty'

export default class ApoteketApi {
  static getProductList() {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/products').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error getting products')
      }
    }).catch(error => {
      return error;
    });
  }

  static addItemToCart(item) {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
         method: 'POST',
         headers: new Headers({
           'X-Key': xKey,
           'Content-Type': 'application/json',
         }),
       body: JSON.stringify(item)
       }).then(response => {
         console.log('Add item cart response', response)
            if (response.ok) {
              return null;
            } else {
              throw new Error('Error adding item to cart')
            }
          }).catch(error => {
            return error;
          });
  }

  static getCart() {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
         method: 'GET',
         headers: new Headers({
           'X-Key': xKey,
         }),
       // body: 'A=1&B=2'
     }).then(response => {
       if (response.ok) {
         return response.json();
       } else {
         throw new Error('Error getting cart items')
       }
     }).catch(error => {
       return error;
     });
  }

  static clearCart() {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
         method: 'DELETE',
         headers: new Headers({
           'X-Key': 'qwerty',
         }),
     }).then(response => {
       if (response.ok) {
         return response.json();
       } else {
         throw new Error('Error clearing cart')
       }
     }).catch(error => {
       return error;
     });
  }
}
