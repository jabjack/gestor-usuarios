import { useState } from "react"

const useFormulario = (inicial) => {

    const [formulario,setFormulario] = useState(inicial)

  //creo la funcion handleChange

  const handleChange = (e) => {
    setFormulario({

      ...formulario,
      [e.target.name]: e.target.value

    })

}

//agrego la funcion de reset

const reset = () => {

setFormulario(inicial)


}

return [formulario, handleChange, reset]

}

export default useFormulario