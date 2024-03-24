import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("location not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  // it's kinda always advisable to camelize this way, incase our API wanna add some extra keyword to the existing ones.
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  // const { viewport } = geometry.viewport;

  return { lat, lng, viewport: geometry.viewport };
};
