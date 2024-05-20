# Prueba Técnica Nomad

En este repositorio encontrará la solución realizada para la tarea técnica entregada.

El stack utilizado contempla **VueJS (con quasar) + FastApi.**

## Requerimientos
Es necesario contar con [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Además, debe contar con [poetry](https://python-poetry.org/docs/). La versión utilizada para este proyecto fue la **versión 1.5.1**.

Por último, el proyecto fue creado utilizando **Python 10** y **Node 18**. Si no cuenta con Node 18 puede ejecutar el siguiente comando para cambiar la versión en caso de tener instalado [nvm](https://github.com/nvm-sh/nvm).

```bash
nvm use 18
```

## Correr proyecto

Una vez cuente con los requerimientos podrá ejecutar el proyecto de la siguiente manera. Es importante señalar que backend y frontend deben ser levantados en terminales diferentes, de forma que ambas plataformas esten levantadas al mismo tiempo.

### Levantar Backend

Para esto debe ir a la carpeta **nomad-server** en la terminal, utilizando el comando:

```bash
cd nomad-server
```

Posicionado en la carpeta deberá ejecutar los siguientes comandos para levantar el backend en el puerto 8000

```bash
poetry shell
```
```bash
poetry install
```
```bash
fastapi run main.py
```

Este comando debiese desplegar lo siguiente:

```bash
INFO:     Started server process [280793]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
```

### Levantar Frontend

Para esto debe ir a la carpeta **nomad-ui** en otra terminal, utilizando el comando:

```bash
cd nomad-ui
```

Posicionado en la carpeta deberá ejecutar los siguientes comandos para levantar el frontend en el puerto 9000

```bash
npm install -g @quasar/cli
npm install
```
```bash
quasar dev
```
Este comando debiese desplegar lo siguiente:

```bash
App • Opening default browser at http://localhost:9000/

[ESLint] Found 0 error and 0 warning

[vue-tsc] Found 0 errors. Watching for file changes.
```
Y desplegará la página en el browser

## Acceso a la página web

Una vez levantados el backend y el frontend podrá acceder a la plataforma web en el browser de su preferencia utilizando la url **localhost:9000**.

## Supuestos realizados

Solo se consideró como supuesto que la impresión en back de carrito de compra final se haría en un único log, por tanto se imprimió el arreglo correspondiente al carrito de compra final con la información solicitada por producto.

Además de eso, se consideró para la elección del carrito de compra en la web un id aleatorio entre 1 y 20 para realizar la búsqueda con la api de dummyJson. Esto debido que el total de carritos son 20.

Por último, para backend se consideró la request a la api de dummyJson paginada de tal forma que no dependa del total de productos totales de api (esto fue únicamente para hacer una request más genérica).
