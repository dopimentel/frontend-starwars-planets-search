# Use uma imagem base com Node.js
FROM node:16.14-alpine

# Crie e configure o diretório de trabalho
WORKDIR /app-frontend

# Copie os arquivos necessários para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

VOLUME [ "/app-frontend/src" ]

# Exponha a porta 80 para o ambiente externo
EXPOSE 3000

# Inicie o servidor web
ENTRYPOINT ["npm", "run"]

CMD ["start"]
