import React from 'react'
import Testimonio from './components/Testimonio'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'

function App() {

  const testimonios=[{
    id: 0,
    nombre:'Ana García',
    texto: 'Desde que empecé a usar React, el desarrollo de interfaces web ha sido mucho más sencillo y eficiente. Me encanta cómo puedo reutilizar componentes para crear aplicaciones complejas con menos código. Además, el ecosistema de herramientas alrededor de React, como Redux y React Router, ha facilitado la creación de aplicaciones escalables y bien estructuradas. Sin duda, es la biblioteca que más ha transformado mi flujo de trabajo como desarrolladora, mejorando mi productividad y capacidad de resolución de problemas.',
    imagen: '/Ana.jpg',
    altImagen: 'Foto de perfil de Ana García',
  },

  {
    id: 1,
    nombre: 'Carlos Pérez',
    texto: 'React me ha permitido crear aplicaciones web interactivas de forma rápida y sencilla. La modularidad de sus componentes hace que el código sea fácil de mantener y escalar, lo cual es crucial cuando trabajo en proyectos grandes con varios desarrolladores. Además, el uso de hooks ha revolucionado mi forma de manejar el estado y los efectos secundarios en mis proyectos, proporcionando una manera más clara y eficiente de escribir código. Me sorprende lo versátil que es React para diferentes tipos de proyectos.',
    imagen: '/Carlos.jpg',
    altImagen: 'Foto de perfil de Carlos Pérez',
  },

  {
    id: 2,
    nombre: 'Luisa Fernández',
    texto: 'Al principio, aprender React fue un desafío, pero una vez que entendí los conceptos básicos como el estado y las props, todo encajó. Ahora puedo desarrollar interfaces dinámicas y personalizadas mucho más rápido que con otros frameworks. Lo que más me gusta es la capacidad de React para actualizar el DOM de manera eficiente gracias a su virtual DOM, lo que garantiza un rendimiento fluido incluso en aplicaciones grandes y complejas. React ha hecho que mi código sea más legible y fácil de mantener a largo plazo.',
    imagen: '/Luisa.jpg',
    altImagen: 'Foto de perfil de Luisa Fernández',
  },

  {
    id: 3,
    nombre: 'Pedro González',
    texto: 'Gracias a React, el desarrollo frontend se ha vuelto mucho más modular y eficiente. Me ha permitido crear aplicaciones altamente dinámicas sin sacrificar el rendimiento, lo que es crucial cuando se trabaja con grandes volúmenes de datos en tiempo real. La comunidad de desarrolladores es increíblemente activa, lo que significa que siempre hay nuevas herramientas y técnicas que puedo incorporar en mis proyectos. Además, la extensa documentación de React me ha ayudado a seguir aprendiendo y mejorando mis habilidades como desarrollador.',
    imagen: '/Pedro.jpg',
    altImagen: 'Foto de perfil de Pedro González',
  }
  ]

  return (
    <>
      <Container>
      <Grid container spacing={2} justifyContent="center">
        {testimonios.map((testimonio) => (
          <Grid item key={testimonio.id}>
            <Testimonio
              nombre={testimonio.nombre}
              texto={testimonio.texto}
              imagen={testimonio.imagen}
              altImagen={testimonio.altImagen}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  )
}

export default App
