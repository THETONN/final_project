# final_project
Final_project

# for command to used this project
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
    
  ## build and run docker image together
    [Docker](https://docs.mikelopster.dev/c/basic/intro)
    docker-compose up -d --build
  ## down service
    docker-compose down

