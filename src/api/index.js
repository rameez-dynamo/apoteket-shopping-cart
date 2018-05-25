
export default class ApoteketApi {
  static getProductList() {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/products').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static addItemToCart(item) {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
         method: 'GET',
         headers: new Headers({
           'X-Key': 'qwerty',
           'Content-Type': 'application/json',
         }),
       body: JSON.stringify(item)
       }).then(response => {
            return response.json();
          }).catch(error => {
            return error;
          });
  }

  static getCart() {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
         method: 'GET',
         headers: new Headers({
           'X-Key': 'qwerty',
         }),
       // body: 'A=1&B=2'
     }).then(response => {
       return response.json();
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
       return response.json();
     }).catch(error => {
       return error;
     });
  }
}
