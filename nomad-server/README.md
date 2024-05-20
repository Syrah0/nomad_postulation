# Prueba Técnica Nomad

En este repositorio encontrará la solución realizada para la parte de backend de la tarea técnica entregada.

El stack utilizado contempla **FastApi.**

## Requerimientos
Además, debe contar con [poetry](https://python-poetry.org/docs/). La versión utilizada para este proyecto fue la **versión 1.5.1**.

Por último, el proyecto fue creado utilizando **Python 10**.

## Correr proyecto

Una vez cuente con los requerimientos podrá ejecutar el proyecto de la siguiente manera. 

Es importante señalar que backend y frontend deben ser levantados en terminales diferentes, de forma que ambas plataformas esten levantadas al mismo tiempo.

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
