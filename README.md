# final_project
final_project

# for command to used this project
# Run user-page (front-end)
  cd user-page
  npm i
  npm run dev
  
# Run admin-page (front-end)
  cd admin-page
  npm i
  npm run dev

# Run server (back-end)
  cd server
  npm i
  ## build prisma for database (phpmyAdmin)
    npx prisma format
    npx prisma generate
    npx prisma migrate dev --name init
  ## build docker-composer for run back-end
    docker-compose up -d --build

