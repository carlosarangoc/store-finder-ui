import axios from "axios";

export const findStores = async (longitude, latitude) => {
  try {
    const response = await axios.get(
      `https://store-finder-api-xsilgukcba-uc.a.run.app/stores?lon=${longitude}&lat=${latitude}&size=5`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default findStores;
