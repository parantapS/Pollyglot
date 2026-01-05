# Use official Node image as the base image
FROM node:24.12.0-alpine3.22

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json .

# installs devDependencies (nodemon)
RUN npm install

# Copy rest of the app
COPY . .

EXPOSE 3000

# Uses your exact script name for production start
CMD ["npm", "run", "start"]