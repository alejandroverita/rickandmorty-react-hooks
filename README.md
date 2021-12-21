# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### UseState: estado en componentes creados como funciones

![UseHooks](https://static.platzi.com/media/user_upload/Como%20funciona%20el%20hook%20useState%20y%20como%20usarlos%20con%20Arrays%20y%20Objetos%20y%202%20p%C3%A1ginas%20m%C3%A1s%20-%20Personal%20Microsoft%20Edge-c10a5e20-e0e2-4086-af1a-8fccb444aff9.jpg "UseHooks")

### UseEffect: Olvidar los ciclos de vida

![UseEffect](https://static.platzi.com/media/user_upload/useEffect%2C%20el%20hook%20de%20efecto%20de%20React%20-%20Ciclos%20de%20vidas%20en%20componentes%20funcionales%20y%202%20p%C3%A1ginas%20m%C3%A1s%20-%20Personal%20Microsoft%20Edge-36c4355d-3e1e-4684-ac71-400f495b8837.jpg)

DarkMode view

![darkMode.png](https://static.platzi.com/media/user_upload/darkMode-bfb3fe75-d8d8-4667-bdf1-826975130d58.jpg)

### useReducer

Recibimos dos parámetros:

- state: el estado de nuestro componente antes de realizar algún cambio.
- action: un objeto con estos otros dos elementos.
  – type el nombre del evento que cambiará nuestro estado.
  – payload: es opcional, lo podemos utilizar para enviar información extra a la actualización de estado.

En esta función vamos a definir todos los eventos de nuestro componente utilizando un switch.

![ReducerwithFav](https://static.platzi.com/media/user_upload/useReducer-5d4d610f-55ac-4b92-88cf-3d5fc117dac1.jpg)

### useRef

use ref nos sirve para obtener un elemento del DOM construido por React de tal forma que podamos acceder a sus atributos de una forma imperativa

Creación de la referencia

`const refContainer = useRef(initialValue);`

Uso de la referencia

        <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        />

### UseCallback

- Cada vez que hacemos un render se vuelve a construir las referencias a las funciones
- La solución para este problema es usar useCallback el cual solo genera una referencia para una función
- Es decir que memoriza la funcion a través de la lista de dependencias que mandamos cuando lo generamos, estamos indicando cuando debe volver a memorizar esa función, es decir cuando cambien esos valores
- Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarios

  const memoizedCallback = useCallback(
  () => {
  doSomething(a, b);
  },
  [a, b],
  );

### Custom Hooks

Reglas de los hooks

- No invocar hooks desde loops, condicionales o funciones anidadas.
- Todo custom hook debe iniciar por la palabra use
- 2 componentes compartiendo el mismo hook no comparten el mismo estado
- Un hook puede invocar a otro hook
- Los hook solo deben usarse en componentes funcionales
- Deben utilizarse en el nivel superior de los componentes
