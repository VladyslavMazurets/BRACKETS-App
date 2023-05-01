# Live site: https://star-wars-app-eight.vercel.app/

This program works with the SWAP API to display characters and information about them from the Star Wars universe. 
- The initial page of the program shows a list of all heroes provided by the API. 
- By clicking on the selected hero, we will go to the page with information about this hero.
- This program also implements the search for heroes, also using filters (planets, films, vehicles, etc.). These filters allow us to search for heroes depending on the selected filter. 
- For example, if you select the Planets filter and write one of the names of the planets (Alderaan), we will get heroes whose homeworld it is, if you select the Vehicles filter and write the name of the vehicle (AT-ST), we will get heroes who drive this vehicle, and so on.

In this program, I use the Redux Toolkit to store data about heroes and use it later in searches. I also store this data in localStorage to limit API requests as they have limits.

### In this project, i used:

- ReactJS and TypeScript
- Using Tailwindcss, React Router, React Icons, Redux Toolkit, ESLint & Prettier
- Fetching data from using Rest API.

Setup: run npm i && npm start - to start the development server
