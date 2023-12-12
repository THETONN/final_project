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
  
  ## build prisma for database (phpmyAdmin)
    npx prisma format
    npx prisma generate
    npx prisma migrate dev --name init
    
  ## build docker-composer for run back-end
    docker-compose up -d --build

