import { AxiosMock, AxiosMockRequest, MockCreated } from '../mocks';
import Data from '../Mocks/Card/clothesCard.json'

MockCreated.onGet("/clothes").reply(200, {
    clothes: Data,
  });
// MockCreated.onGet("/clothes").reply((config)=>{
// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
// resolve([200, {clothes: Data,}])
//   }, 2000)
// })
// }
//   );

  export const clothesApi = AxiosMockRequest.get("/clothes");






  // mock.onGet("/product").reply(function (config) {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       if (Math.random() > 0.1) {
  //         resolve([200, { id: 4, name: "foo" }]);
  //       } else {
  //         // reject() reason will be passed as-is.
  //         // Use HTTP error status code to simulate server failure.
  //         resolve([500, { success: false }]);
  //       }
  //     }, 1000);
  //   });