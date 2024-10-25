import React from 'react'
import { useState } from 'react'
import { Card, CardContent, Typography, Avatar, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IzanHM } from 'milibreria'
import { MyButton } from 'milibreria'
import { MyFavorite } from 'milibreria'
import { MyFavoriteBorder } from 'milibreria'
import * as milibreria from 'milibreria'

function Testimonio({nombre, texto, imagen, altImagen}) { //Props que se pasan desde App.jsx

    const [meGusta, setMeGusta] = useState(false)
    const [mostrarCompleto, setMostrarCompleto] = useState(false)

    function handleMeGustaClick() {
        setMeGusta(!meGusta);
    }

    const handleMostrarCompletoClick = () => {
        setMostrarCompleto(!mostrarCompleto); 
      }

    return (
        <>
       <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>

      <IzanHM 
          nombre={nombre} 
          imagen={imagen} 
          altImagen={altImagen} 
          tamaño="medium" 
        />
        
        <Typography variant="body2" color="text.secondary">
          {mostrarCompleto ? texto : `${texto.substring(0, 100)}...`}
        </Typography>

        
        <MyButton
          text={mostrarCompleto ? 'Leer Menos' : 'Leer Más'}
          txtcolor="black"             
          bgcolor="#ffe08e"               
          bordercolor="black"           
          borderwidth="2px"            
          size="small"                 
          hoverTxtColor="blue"         
          hoverBgColor="white"         
          onClick={handleMostrarCompletoClick}
        />

                <IconButton onClick={handleMeGustaClick} aria-label="me gusta">
                        {meGusta ? <MyFavorite color="error" /> : <MyFavoriteBorder />}
                    </IconButton>
            </CardContent>
        </Card>
        </>
    )
}

export default Testimonio
