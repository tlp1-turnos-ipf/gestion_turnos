import { createContext, useReducer } from "react";

import { typeList } from "../types/type";
import { fetchPatient } from "../api/patientApi";
import { DoctorReducer } from "../reducers/doctorReducer";

export const DoctorContext = createContext(null);

export const ContextDoctor = ({ children }) => {
  //UseReducer para almacenar
  const [doctors, dispatchDoctors] = useReducer(DoctorReducer, []);

  const handleDoneDoctors = (id) => {
    dispatchDoctors({
      type: typeList.LIST_DELETE,
      payload: id,
    });
  };

  const agregateDoctors = (data) => {
    dispatchDoctors({
      type: typeList.LIST,
      payload: data,
    });
  };
  const findDoctors = (data) => {
    dispatchDoctors({
      type: typeList.LIST_FIND_ONE,
      payload: data,
    });
  };

  const editDoctor = (id) => {
    dispatchDoctors({
      type: typeList.LIST_UPDATE,
      payload: id,
    });
  };

  const createDoctors = (data) => {
    dispatchDoctors({
      type: typeList.LIST_ADD,
      payload: data,
    });
  };

  const fetchDataDoctor = async () => {
    try {
      const data = await fetchPatient("api/doctor/activo", "GET");
      agregateDoctors(data);
      console.log(doctors);
    } catch (error) {
      console.error("Error al obtener datos del servidor:", error);
    }
  };

  return (
    <DoctorContext.Provider
      value={{
        dispatchDoctors,
        doctors,
        handleDoneDoctors,
        agregateDoctors,
        editDoctor,
        createDoctors,
        fetchDataDoctor,
        findDoctors,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
