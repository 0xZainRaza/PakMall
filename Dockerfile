# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application code to the container
COPY . .

# Expose the application's port (adjust if needed)
EXPOSE 4000

# Start the application
CMD ["node", "app.js"]
