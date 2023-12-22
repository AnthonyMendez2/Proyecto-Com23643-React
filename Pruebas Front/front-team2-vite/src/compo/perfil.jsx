
import React, { useState } from 'react';

const UserProfile = () => {
  // Estado para manejar la edición de datos
  const [isEditing, setIsEditing] = useState(false);

  // Datos de perfil
  const [userData, setUserData] = useState({
    imagenPerfil: 'url_de_la_imagen',
    nombre: 'Nombre',
    apellido: 'Apellido',
    mail: 'correo@dominio.com',
    descripcion: 'Descripción del perfil',
  });

  // Estado para la URL de la nueva imagen
  const [newImage, setNewImage] = useState('');

  // Función manejo la edición de datos
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Función para los campos editables
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Función para manejar la edición de la imagen de perfil
  const handleImageChange = (e) => {
    setNewImage(e.target.value);
  };

  // Función para guardar cambios, incluyendo la imagen
  const handleSaveChanges = () => {
    setIsEditing(false);
    // Actualizar la imagen solo si se proporciona una nueva URL
    if (newImage) {
      setUserData({
        ...userData,
        imagenPerfil: newImage,
      });
    }
  };

  // Renderización condicional del contenido
  return (
    <div className="perfil">
      <div className="perfil-header">
        <div className='perfil-header-2'>
              
            <img className='img-perfil' src={userData.imagenPerfil} alt="Imagen de perfil" />
            {isEditing ? (
              <div className='div-editable-perfil'>
                <label className='text-perfil' htmlFor="imagenPerfil">URL de la imagen de perfil:</label>
                <input
                  type="text"
                  id="imagenPerfil"
                  name="imagenPerfil"
                  value={newImage}
                  onChange={handleImageChange}
                  className='input-perfil'
                />

                <label className='text-perfil' htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={userData.nombre}
                  onChange={handleInputChange}
                  className='input-perfil'
                />
                <label className='text-perfil' htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={userData.apellido}
                  onChange={handleInputChange}
                  className='input-perfil'
                />
                <label className='text-perfil' htmlFor="descripcion">Descripción:</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={userData.descripcion}
                  onChange={handleInputChange}
                  className='input-perfil textarea-perfil'
                ></textarea> 
              </div>
            ) : (
              <div className='div-text-perfil'>
                <h3>{userData.nombre} {userData.apellido}</h3>
                <p>{userData.mail}</p>
                <p>{userData.descripcion}</p>
              </div>
            )}
            
          </div>

          <div className='div-btn-perfil '>
              <button className="btn-editar-perfil " onClick={isEditing ? handleSaveChanges : handleEdit}>   {isEditing ? 'Guardar cambios' : 'Editar datos'}
              </button>
            </div>

        </div>
      </div>
  );
};

export default UserProfile;