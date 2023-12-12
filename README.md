# Final_project
Command to used in Final_project

# Run user-page 
  ## command run fron-end user-page
    cd user-page
    npm i
    npm run dev
  
# Run admin-page 
  ## command run front-end admin-page
    cd admin-page
    npm i
    npm run dev

# Run server (back-end)
  ## before build prisma and docker
    cd server
    npm i
  
  ## build prisma to database (phpmyadmin)
    npx prisma format
    npx prisma generate
    npx prisma migrate dev --name init
    
  ## [Docker](https://docs.mikelopster.dev/c/basic/intro)  
  ## build and run docker image together
    docker-compose up -d --build
  ## down service
    docker-compose down

