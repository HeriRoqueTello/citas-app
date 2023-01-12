import { useEffect, useState } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, addPacientes, paciente, setPaciente }) => {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);
  


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;

  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }
    
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    } 

    if(paciente.id){
      objetoPaciente.id = paciente.id;
      
      const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      addPacientes(pacienteActualizado);

      setPaciente({})
      
    }else{
      objetoPaciente.id = generarId();
      addPacientes([ ...pacientes, objetoPaciente]);
    }


    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }; 

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-4 text-center mb-8">
        Agrega pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-gray-300 shadow-md rounded py-10 px-5 space-y-4 mb-8">
        {
          (error) && <Error mensaje='Todos los campos son obligatorios.' />
        }
        <div>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="mascota">
              Nombre Mascota
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-indigo-800 rounded-md" 
            type="text" 
            placeholder="Nombre de la mascota"
            id="mascota"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="propietario">
              Nombre Propietario
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-indigo-800 rounded-md" 
            type="text" 
            placeholder="Nombre del propietario"
            id="propietario"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="email">
              Email
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-indigo-800 rounded-md" 
            type="email" 
            placeholder="Email del propietario"
            id="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="alta">
              Alta
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-indigo-800 rounded-md" 
            type="date" 
            id="alta"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="sintomas">
              Sintomas
          </label>
          <textarea 
            placeholder="Describe los sintomas" 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-indigo-800 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-colors" 
        />

      </form>
    </div>
  )
}
