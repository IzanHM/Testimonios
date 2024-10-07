import React from 'react'
import { useState } from 'react'
import { Card, CardContent, Typography, Avatar, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function Testimonio({nombre, texto, imagen, altImagen}) {

    const [meGusta, setMeGusta] = useState(false)

    function handleMeGustaClick() {
        setMeGusta(!meGusta);
    }

    return (
        <>
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardContent>
                <Avatar alt={altImagen} src={imagen} sx={{ width: 56, height: 56 }} />
                <Typography variant="h5">{nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {texto}
                </Typography>
                <IconButton onClick={handleMeGustaClick} aria-label="me gusta">
                    {meGusta ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardContent>
        </Card>
        </>
    )
}

export default Testimonio
