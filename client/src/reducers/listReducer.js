import { typeList } from "../types/type";

export const ListReducer = (patients, action) => {
  switch (action.type) {
    //Carga el estado
    case typeList.LIST:
      return action.payload;

    case typeList.LIST_ADD:
      return [...patients, action.payload];

    //Cambia el estado de true a false
    case typeList.LIST_DELETE:
      return patients.filter(
        (patient) => patient.Usuario.usuario_id !== action.payload
      );
    case typeList.LIST_UPDATE:
      return patients.map((item) => {
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
      return patients;
  }
};
