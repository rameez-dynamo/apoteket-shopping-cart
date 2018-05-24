
export default class ApoteketApi {
  static getProductList() {
    return fetch('http://apoteket-uppgift-fe.ginzburg.it/api/products').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
