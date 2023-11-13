# Start from the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Add the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Add the rest of the code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]