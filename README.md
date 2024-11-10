# Haciendo tareas con REDUX

En este ejercicio, vamos a trabajar con Redux para administrar una lista de tareas. 
Será una lista de tareas vacia de inicio en la que iremos añadiendo tareas y a su vez un botón eliminar tarea.
A continuación, se detalla lo que hay que hacer en cada parte del ejercicio:

## Parte 1: Configuración inicial

1. Crea una carpeta llamada `redux` en tu proyecto.OK!
2. Dentro de la carpeta `redux`, crea un archivo llamado `store.js`. OK!
3. En `store.js`, importa las dependencias necesarias para trabajar con Redux. OK!
4. Crea un estado inicial para la lista de tareas. OK!
5. Define una función `reducer` que actualice el estado en función de las acciones recibidas. OK!

## Parte 2: Crear acciones

1. Crea un archivo llamado `todosSlice.js` dentro de la carpeta `redux`. OK!
2. Define las acciones necesarias para agregar una tarea y eliminar una tarea. OK!
3. Exporta las acciones para poder utilizarlas en otros archivos. OK!

## Parte 3: Crear componentes

1. Haz que se que muestre la lista de tareas en `App.jsx`. OK!
2. Importa las acciones necesarias desde `todoSlice.js`. OK!
3. Conecta el componente `App.jsx` al estado y a las acciones de Redux. OK!

## Parte 4: Integrar Redux en la aplicación

1. En el archivo principal de tu aplicación `main.jsx`, importa el store de Redux desde `store.js`.
2. Envuelve tu aplicación con el componente `Provider` de Redux, pasándole el store como prop.
3. Utiliza el componente `App.jsx` en tu aplicación para mostrar la lista de tareas.