import React from 'react'
import '../../styles/formadd.css'
import Sidebar from '../../components/Sidebar'

const AddProducts = () => {
  return (
    <section className='add_form'>
        <Sidebar/>
        <h1>Crear un nuevo usuario</h1>
        <form action="" className='form'>
          <label htmlFor="">Ingrese curso</label>
          <input type="text" placeholder='Nombre del curso...'/>
          <label htmlFor="">Color curso</label>
          <input type="text" placeholder='Color del curso...'/>
          <button type='submit'>Crear Registro</button>
        </form>
    </section>
  )
}

export default AddProducts
