#  HERE WE HAVE NODE VERSION ALPINE USED AS BUILD MODE 
FROM node:22-alpine AS build

#  CREATE A APP DIR
WORKDIR /app

# CPOYING ALL PACKAGE.JSON FROM CURRENT DIRECTORY 
COPY package*.json ./

#  INSTALL ALL DEPENDENCIES AND NODE_MODULES 
RUN npm install

#  COPYNG CUURENT DIR TO OUR APP ONE WHICH WE WE HAVE MADE 
COPY . .

# THIS IS USED FOR BUILDING DIST FOLDER INSIDE OUR FRONTEND
RUN npm run build

#  PRODUCTION CODE DOCKER 
FROM node:22-alpine

#  CREATE A APP DIR 
WORKDIR /app

# Installs the serve package globally inside the Docker container
# serve is a Node tool used to serve static frontend files
# It is commonly used to deploy Vite/React production builds
RUN npm install -g serve

# Without this, sometimes Docker can’t run serve even if installed
ENV PATH="/usr/local/bin:$PATH"

# --from=build means:
# → Copy files from the first build stage named build
# /app/dist is where Vite creates the production build
# ./dist is where we copy that folder into the final runtime image
COPY --from=build /app/dist ./dist

#  WE RUN OUR APP IN 3000(CLINET) WE EXPOSE IT AT THIS PORT
EXPOSE 3000

# Start a server to show the built frontend files on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
