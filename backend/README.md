// Vite + Express App with Clerk Integration
## General
- Note that docker is running, it just isn't shown in the terminal
- If a file is in the gitignore but isn't greyed out, try the following:
    1. delete and then retype a letter of the filename in the gitignore, save the gitignore file.
    2. No luck? Reload the developer window.
    3. No luck? The .env is probably in the staging area of git. Unstage it.
    4. Still no luck? Look it up or ask for help. (sorry lol)
- Note that a git repo has been initialized in the root directory of your project!


## Frontend
#### Notes
- I added a user with auth object to the request object in the backend by declaring it in the global.d.ts file. 
    You may need to go into the ./utils/global.d.ts file and delete a line, then add it back in and save the file in order for 
    the global type to be recognized.
- If you want to use process.env.[secret], you will need to define it in the vite.config.ts file under where I've defined the API_URL.
- IF USING SHADCN: to add a new component run `npx shadcn-ui@latest add <component_name>`

#### To run frontend:
1. In terminal: npm run dev
    - Note that you have errors in the console and the brower page is blank.
    - Follow the steps below in the Clerk section to fix this.

#### Clerk
- You need to go to the clerk website and create a new project.
- Then add the project's publishable key and secret key to the .env file.

#### To connect to your backend:
1. Add your backend's url to the frontend .env file
2. Add this to your package.json: "proxy": "backend url",

## Backend
#### To run backend: 
1. Go to package.json
2. Add this script: "start": "nodemon index.ts"
3. In terminal: npm run start

#### Clerk
- Add your project secret key to the .env. You can find this key in your Clerk dashboard under the API Keys section.

#### To connect to your frontend:
1. In the app.ts file add your frontend's url as an origin in the cors object

## Resources
- Clerk: https://clerk.com/docs/
- Express: https://expressjs.com/en/guide/routing.html
- Docker: https://docs.docker.com/guides/
- Vite: https://vitejs.dev/guide/
- Prisma: https://www.prisma.io/docs
- Tailwind: https://tailwindcss.com/docs
- DaisyUI: https://daisyui.com/docs
- Shadcn UI: https://ui.shadcn.com/docs
