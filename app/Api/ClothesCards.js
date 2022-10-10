import { AxiosMock, AxiosMockRequest, MockCreated } from '../mocks';
import Data from '../Mocks/Card/clothesCard.json'

MockCreated.onGet("/clothes").reply(200, {
    clothes: Data,
  });

  export const clothesApi = AxiosMockRequest.get("/clothes")