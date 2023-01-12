
export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {

    const respuesta = confirm('Deseas eliminar este paciente?');

    if(respuesta){
      eliminarPaciente(id)
    }
    
  }

  return (
    <div className="bg-gray-300 m-3 shadow-md px-5 py-10 space-y-3 rounded ">
        <p className="font-bold text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between">
          <button 
            type="button" 
            className="px-8 py-2 bg-indigo-600 hover:bg-indigo-900 uppercase rounded text-white font-bold transition-colors"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button 
            type="button" 
            className="px-8 py-2 bg-red-600 hover:bg-red-900 uppercase rounded text-white font-bold transition-colors"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}
