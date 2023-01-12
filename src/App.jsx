import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

export const App = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem('pacientes')) || [];
  };

  const [pacientes, setPacientes] = useState(init);

  const [paciente, setPaciente] = useState({});

  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])


  const eliminarPaciente = (id) => {
    
    const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id);
    console.log(`Eliminar paciente ${id}`);
    setPacientes(pacientesActualizado)
    
  }

  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="mt-8 md:flex">
        <Formulario pacientes={ pacientes } addPacientes={ setPacientes } paciente={ paciente } setPaciente={ setPaciente }/>
        <ListadoPacientes pacientes={ pacientes } setPaciente={ setPaciente } eliminarPaciente={ eliminarPaciente }/>
      </div>
    </div>
  )
}

``