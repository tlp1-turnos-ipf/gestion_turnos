import { createContext, useReducer } from "react";
import { ListReducer } from "../reducers/listReducer";
import { typeList } from "../types/type";
import { fetchPatient } from "../api/patientApi";

export const PatientContext = createContext(null);

export const ContextPatient = ({ children }) => {
  //UseReducer para almacenar
  const [patients, dispatchPatient] = useReducer(ListReducer, []);

  const handleDone = (id) => {
    dispatchPatient({
      type: typeList.LIST_DELETE,
      payload: id,
    });
  };

  const agregatePatient = (data) => {
    dispatchPatient({
      type: typeList.LIST,
      payload: data,
    });
  };
  const findPatient = (data) => {
    dispatchPatient({
      type: typeList.LIST_FIND_ONE,
      payload: data,
    });
  };

  const editPatient = (id) => {
    dispatchPatient({
      type: typeList.LIST_UPDATE,
      payload: id,
    });
  };

  const createPatients = (data) => {
    dispatchPatient({
      type: typeList.LIST_ADD,
      payload: data,
    });
  };

  const fetchData = async () => {
    try {
      const data = await fetchPatient("api/pacientes/activos", "GET");
      agregatePatient(data);
      console.log(patients);
    } catch (error) {
      console.error("Error al obtener datos del servidor:", error);
    }
  };

  return (
    <PatientContext.Provider
      value={{
        dispatchPatient,
        patients,
        handleDone,
        agregatePatient,
        editPatient,
        createPatients,
        fetchData,
        findPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
