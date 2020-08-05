# Dockerfile
FROM node:8.15

WORKDIR /app

# Instalamos paquetes necesarios para script download_latest_deploy_artifacts
RUN apt-get update && apt-get install -y unzip


# Instalamos las dependencias antes de copiar los fuentes para tenerlas cacheadas
#COPY package.json /app/package.json
COPY package.json /app

# Copia los archivos.
COPY . /app

RUN cd /app; npm install

# Inicia la aplicación.
CMD ["node", "app.js"]
EXPOSE 3010