# Stage 1
FROM node:18

RUN mkdir -p /app
WORKDIR /app
# 
COPY package.json .
RUN npm install --verbose
COPY . .
EXPOSE 3000
CMD ["npm", "start"]