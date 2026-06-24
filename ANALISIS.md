Elementos de React
Componente
Props
Estado(useState)
Renderizado de listas (.map+key)
Renderizado condicional

¿Donde Lo usas en este problema?
-Componente: Lo usare para separar la app en partes como EventoCard ListaEventos y FiltroTipo.
-JSX: Lo usare para mostrar la estructura visual de la agenda, las tarjetas,flitros y mensajes.
-Props:Las usare para enviar los datos de cada evento desde ListaEventos hacia EventoCard.
-Estado(UseState):Lo usare en App.jsx para guardar el texto de busqueda y el tipo seleccionado en el filtro.
-Renderizado de listas .map + key:Lo usare en ListaEventos para recorrer el array de eventos y mostrar una tarjeta por cada evento usando key con el id.
-Renderizado condicional:Lo usare para mostrar el mensaje "No hay eventos que coincidan" y para destacar los eventos gratuitos.



¿por que es el adecuado?
-Componente:Es adecuado porque ayuda a ordenar el codigo y evita escribir todo en un archivo.
-JSX: Es adecuado porque permite escribir la interfaz con una forma parecida a HTML dentro de React
-Props:Son adecuadas porque permiten pasar informacion desde un componente.
-EstadoUseState:Es adecuado porque esos datos cambian cuando el usuario escribe o selecciona una opcion. 
-Renderizado de listas .map + key:Es adecuado porque los datos vienen en una lista y React necesita una key unica para identificar cada elemento.
-Renderizado condicional:Es adecuado porque permite mostrar contenido solo cuando se cumple una condicion.


1.Dividir la agenda en componentes ayuda a que el codigo quede mas ordenado y facil de mantener.

2.Las props son datos que un componente recibe desde otro y el estado de informacion puede cambiar dentro de la app


  




