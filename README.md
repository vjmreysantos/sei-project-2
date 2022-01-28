## Using NPM

`npm run start` or `npm run dev`  to run the development server

`npm run build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project 2 - SCRAN
Link: https://sei-scran.netlify.app/

Instructions
Clone or download the repo
npm i - Install dependencies
npm run dev - Start the development server

Overview and Concept
This app is our second project and was made by our team of three people, James Guppy, Tomas Hedberg and Victor Reysantos. The concept is to generate a random dish from anywhere in the world along with its recipe using the API from The Meal DB (https://www.themealdb.com/api.php). Our plan was more complex which included a lot of functionalities such as filter cuisine based on the country etc. Unfortunately, we hit a bit of a snag and didn’t have a lot of time so the team decided to go for a much simpler app functionality.

The team worked together initially via pair programming then later on worked on different tasks. I focused mainly on the Categories page while my other group members handled the show page for the random meal and the styling.

Brief
The task is to create a frontend React app that implements a third party API of our choice. The requirements include wireframes and multiple pages that need to be done within 48 hours. Our group consisted of three members, myself, James Guppy and Tomas Hedberg.

Technologies Used
React.js 
Axios 
JavaScript
Bulma CSS

Approach taken
We started by choosing the type of API that we were going to use and ended up going for a food API which is very common and easily accessible online. I then did a rough wireframe sketch of our initial idea for the app which included filter searches.

We came across a lot of food APIs but some aren’t the right fit for the app or had issues getting them to work. One of which we found was The Meal DB which has a Random Meal API. With limited time remaining, James proposed we change the concept of the app and go for the API available and do a much simpler functionality. We all agreed, so we worked on the main framework together then jumped to individual tasks after; James worked on fetching the random recipe API and I worked on getting the API for the categories page while Tomas worked on the styling. We kept checking on each other’s work and helped with minor issues when needed.

The home page has a button that when clicked will generate a random meal. You can choose to refresh and generate another random meal or if you’re interested, click on ‘scran-it’ and it will take you to the show page of the meal’s recipe. There is also a link on the nav bar that will take you to the ‘Categories’ page where it gives you all types of food and all the information about it. I used the API provided by The Meal DB and fetched data using axios.



Visuals
<img width="501" alt="Screenshot 2022-01-28 at 11 38 18" src="https://user-images.githubusercontent.com/86128330/151540812-00c4320f-5582-4e13-8c3d-a808b9dcb9a5.png">
![project2-wireframe](https://user-images.githubusercontent.com/86128330/151541048-85d6eed8-6110-4d02-ab5b-cec15036afe1.png)
<img width="1403" alt="Screenshot 2021-09-20 at 23 02 29" src="https://user-images.githubusercontent.com/86128330/151540967-06cc860f-607e-46a2-8b6f-bfc28f6990a1.png">
<img width="1385" alt="Screenshot 2021-09-20 at 23 02 49" src="https://user-images.githubusercontent.com/86128330/151540980-6d2b7b03-e8a6-450e-a44b-17bc88ce524d.png">
<img width="1389" alt="Screenshot 2021-09-20 at 23 03 01" src="https://user-images.githubusercontent.com/86128330/151540987-df5d7105-a9fa-4d9e-a24c-ebc2a9abb857.png">
<img width="707" alt="Screenshot 2021-09-20 at 23 04 08" src="https://user-images.githubusercontent.com/86128330/151540993-cca929ac-9c1a-4ffa-8113-e8b90429ddd1.png">



Wins
Being able to build the app successfully using a third party API despite initial setbacks.
Being able to fulfil the requirements in time using React for the first time.
The experience of working in a group for the first time which helped improve our communication and people skills as well as working under pressure.

Challenges
Searching for the right API to achieve our initial plan took up most of our time. Maybe we could’ve done more like better styling and more functionalities if we had decided earlier on to change the plan and make a simpler app by using an API that’s available and work our way around it.

Future Content
Apply the filter functionality from our initial plan.
The ability for users to create an account to like and save recipe favourites.
Add consistency and better styling on all pages.

Key Learnings
It was a great experience doing a project within a group for the first time. It was important to connect with the team and work efficiently to achieve our common goal. I personally learnt a lot with communication and making tough decisions which helped me with my projects and group sessions later on.
