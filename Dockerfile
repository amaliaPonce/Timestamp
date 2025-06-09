# Use official Node.js LTS image
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production || true

COPY . .

ENV PORT=3000

CMD ["npm", "start"]
