
export const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-600 text-gray-100 p-2 text-center font-bold uppercase text-sm rounded">
      <p>
        {mensaje}
      </p>
    </div>
  )
}
