import { typeList } from "../types/type";

export const EspecialityReducer = (especilities, action) => {
  switch (action.type) {
    //Carga el estado
    case typeList.LIST:
      return action.payload;

    case typeList.LIST_ADD:
      return [...especilities, action.payload];

    //Cambia el estado de true a false
    case typeList.LIST_DELETE:
      return especilities.filter(
        (especiality) => especiality.especialidad_id !== action.payload
      );
    case typeList.LIST_UPDATE:
      return especilities.map((item) => {
        if (item.id == action.payload.id) {
          item = {
            ...item,
            ...action.payload,
          };
          return item;
        }

        return item;
      });

    default:
      return especilities;
  }
};
