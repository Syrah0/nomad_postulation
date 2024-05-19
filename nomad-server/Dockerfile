# Stage 1 - Instalando dependencias (build)
FROM python:3.9.6-alpine AS builder

WORKDIR /app
ENV PATH="$HOME/.poetry/bin:$PATH"
ARG BUILD_DEPS="build-base postgresql-dev gcc musl-dev python3-dev cargo libffi-dev openssl-dev git curl"
ARG POETRY_VERSION=1.5.1

RUN apk add --no-cache ${BUILD_DEPS} \
    && pip install --upgrade pip \
    && pip install --no-cache-dir "poetry==$POETRY_VERSION" \
    && python3 -m venv .venv \
    && poetry config virtualenvs.in-project true \
    && .venv/bin/pip install --no-cache-dir -U pip setuptools

COPY pyproject.toml .
COPY poetry.lock .

RUN poetry install --no-dev --no-interaction \
    && find /app/.venv \
        \( -type d -a -name test -o -name tests \) \
        -o \( -type f -a -name '*.pyc' -o -name '*.pyo' \) \
        -exec rm -rf {} \+

COPY api /app/api

# Stage 2 - Aplicación en modo producción
FROM python:3.9.6-alpine

WORKDIR /app
ARG RUNTIME_DEPS="libcrypto1.1 libssl1.1 libpq"
RUN apk add --no-cache ${RUNTIME_DEPS}

COPY --from=builder /app /app

COPY main.py /app/main.py

ENV PATH="/app/.venv/bin:$PATH" \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1
