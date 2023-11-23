import { createContext, useReducer } from "react";
import { typeList } from "../types/type";
import { EspecialityReducer } from "../reducers/especialityReducer";
import { fetchPatient } from "../api/patientApi";

export const EspecialityContext = createContext(null);

export const ContextEspeciality = ({ children }) => {
  //UseReducer para almacenar
  const [especialities, dispatchEspeciality] = useReducer(
    EspecialityReducer,
    []
  );

  const deleteEsp = (id) => {
    dispatchEspeciality({
      type: typeList.LIST_DELETE,
      payload: id,
    });
  };

  const agregateEspeciality = (data) => {
    dispatchEspeciality({
      type: typeList.LIST,
      payload: data,
    });
  };
  const findEspeciality = (data) => {
    dispatchEspeciality({
      type: typeList.LIST_FIND_ONE,
      payload: data,
    });
  };

  const editEspeciality = (id) => {
    dispatchEspeciality({
      type: typeList.LIST_UPDATE,
      payload: id,
    });
  };
  const createEspeciality = (data) => {
    dispatchEspeciality({
      type: typeList.LIST_ADD,
      payload: data,
    });
  };

  const fetchGetAllEspeciality = async () => {
    try {
      const data = await fetchPatient("api/especialidad", "GET");
      agregateEspeciality(data);
      console.log(especialities);
    } catch (error) {
      console.error("Error al obtener datos del servidor:", error);
    }
  };

  return (
    <EspecialityContext.Provider
      value={{
        dispatchEspeciality,
        especialities,
        deleteEsp,
        agregateEspeciality,
        editEspeciality,
        createEspeciality,
        fetchGetAllEspeciality,
        findEspeciality,
      }}
    >
      {children}
    </EspecialityContext.Provider>
  );
};
