# Stage 1: Instalando dependencias (build)
FROM python:3.10.14-slim-bookworm as builder

WORKDIR /app

ENV PATH="$HOME/.poetry/bin:$PATH"
ARG BUILD_DEPS="libpq-dev gcc python3-dev"
ARG POETRY_VERSION=1.5.1

RUN apt update && apt install -y ${BUILD_DEPS} \
    && python3 -m pip install --upgrade pip \
    && python3 -m pip install --no-cache-dir "poetry==$POETRY_VERSION" \
    && python3 -m venv .venv \
    && poetry config virtualenvs.in-project true \
    && .venv/bin/pip install --no-cache-dir -U pip setuptools

COPY pyproject.toml .
COPY poetry.lock .

RUN poetry install --no-interaction \
    && find /app/.venv \
        \( -type d -a -name test -o -name tests \) \
        -o \( -type f -a -name '*.pyc' -o -name '*.pyo' \) \
        -exec rm -rf {} \+

# Stage 2: Aplicación en modo de desarrollo
FROM python:3.10.14-slim-bookworm

WORKDIR /app
ARG RUNTIME_DEPS="libpq-dev"
RUN apt update && apt install -y --no-install-recommends ${RUNTIME_DEPS}
COPY --from=builder /app /app

ENV PATH="/app/.venv/bin:$PATH" \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1
