# Rick and Morty Router App

## Descripción
Esta aplicación está diseñada para ayudarte a aprender y practicar React Router y la integración de una API en una aplicación de React. Utilizamos la API de Rick and Morty para obtener y mostrar los personajes. La aplicación incluye navegación, carga de datos, manejo de estados y redireccionamiento programático.

## Instalación 
1. Clona el repositorio

``` bash
git clone https://github.com/tu-usuario/rick-and-morty-app.git
cd rick-and-morty-router

```
2. Instala las dependencias:
```bash 
npm install

```
3. inicia la app 
```bash 
npm run dev
```

## Funcionalidades

### Home
- Descripción: Página Principal con un botón que redirige a la lista de personajes.
- Hook usado : `useNavigate`.
- Funcionamiento: 
    - `useNavigate` permite la redirección programatica. En este caso , al hacer click en el botón, el usuario es redirifido a  `/characters`.

### Characters
- Descripción: Muestra una lista de personajes obtenidos de la Api de Rick and Morty.
- Hook usado : `useState` `useEffect`.
- Funcionamiento: 
    - `useState`maneja el estado de los personajes y el estado de carga.
    - `useEffect` se usa para realizar la solicitud a la AP al montar el componente.
    - Mientras se cargan los datos, se muestra un componente `Loader`.

### CharacterDetail
- Descripción: Muestra detalles de un personaje específico, incluyendo unaimagen a la izquierda y los datos a la derecha.
- Hook usado : `useParams` ,`useState`, `useEffect`.
- Funcionamiento: 
    - `useParams` se usa para obtener el ID del personaje desde la URL. 
    - `useState` maneja el estado del personaje y el estado de carga.
    - `useEffect` Realiza la solicitud a la API para obtener los datos del personaje específico.

### Loader 
- Descripción: Componente simple que muestra un spinner de carga mientras se obtienen los datos de la API.


## Conclusión 
Esta aplicación demuestra cómo usar React Router para crear una SPA (Single Page Application) con rutas dinámicas, redirección programática y manejo de parámetros en la URL. También se muestra cómo integrar una API externa y manejar estados de carga y datos utilizando hooks de React.



⌨️ con ❤️ por [Toffy Caluga](https://github.com/toffycaluga)


