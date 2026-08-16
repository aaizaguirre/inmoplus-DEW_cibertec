# InmoPlus Perú
Plataforma web inmobiliaria desarrollada como proyecto final del curso **Desarrollo de Entornos Web** en **Cibertec**.

## Descripción

**InmoPlus Perú** es una plataforma web diseñada para facilitar la búsqueda y visualización de propiedades inmobiliarias, ofreciendo opciones de **alquiler, compra y venta**.

El proyecto busca proporcionar una experiencia sencilla para que los usuarios puedan explorar propiedades, aplicar filtros según sus necesidades y conocer más sobre la inmobiliaria.

## Funcionalidades

- Carrusel de imágenes en la sección principal.
- Visualización de propiedades inmobiliarias.
- Filtro de propiedades por:
  - Tipo de operación: alquiler o compra.
  - Distrito.
  - Rango de precio.
- Sección de propiedades disponibles.
- Sección de testimonios de clientes.
- Opciones relacionadas con alquiler, compra y venta.
- Sección **Nosotros** con información sobre la inmobiliaria.
- Gestión de datos mediante una base de datos local utilizando **JSON Server**.
- Posibilidad de contacto con la inmobiliaria.

## Tecnologías utilizadas

- **React** – Desarrollo de la interfaz y componentes.
- **JavaScript** – Lógica y funcionalidad de la aplicación.
- **JSX** – Estructura de los componentes de React.
- **CSS** – Diseño y estilos de la plataforma.
- **JSON Server** – Simulación de una API y gestión de datos.
- **React Router** – Navegación entre las diferentes vistas de la aplicación.

## Gestión de datos

Durante el desarrollo se utilizaron dos métodos para gestionar la información de las propiedades:

- **JSON Server:** parte de las propiedades se almacenan en un archivo `db.json` y se consultan mediante una API local.
- **Datos dentro de componentes:** otra parte de las propiedades se encuentra directamente en `Compra.jsx`.

Esta implementación se realizó con fines académicos, permitiendo practicar dos formas diferentes de gestionar información dentro de una aplicación web.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/aaizaguirre/inmoplus-DEW_cibertec.git
```
Ingresar al proyecto: 
```bash
cd inmoplus-DEW_cibertec
```
Instalar las dependencias: 
```bash
npm install
```
## Ejecución
Para iniciar la aplicación: 
```bash
npm run dev
```
Si se utiliza JSON Server, iniciar también el servidor de datos:
```bash
npx json-server --watch db.json --port 3001
```
Luego, abrir en el navegador la dirección proporcionada por Vite.