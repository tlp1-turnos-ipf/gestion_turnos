import { typeList } from "../types/type";

export const DoctorReducer = (doctors, action) => {
  switch (action.type) {
    //Carga el estado
    case typeList.LIST:
      return action.payload;

    case typeList.LIST_ADD:
      return [...doctors, action.payload];

    //Cambia el estado de true a false
    case typeList.LIST_DELETE:
      return doctors.filter(
        (doctor) => doctor.Usuario.usuario_id !== action.payload
      );
    case typeList.LIST_UPDATE:
      return doctors.map((item) => {
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
      return doctors;
  }
};
