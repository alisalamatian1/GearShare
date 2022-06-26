# GearShare

## Inspiration

The trend of sharing in the last decade. More and more companies are allowing products to be shared instead of being bought and manufactured. And, when we thought about summer, we immediately thought about the great outdoors. We wanted to make exploration available to anyone - whether they owned a small apartment, didn't have the money to buy expensive outdoor, or just wanted to lower their ecological footprint. With Gearshare, we wanted to create a platform for improving the climate while also letting outdoor enthusiasts like us to get out inexpensively and easily.

## What it does

Gearshare allows users to register for an account. After getting registered, they are able to see the 'Rent' and 'Post' sections of our website. There, they can post gear they want to share that are then stored in our MongoDB database. Our 'Rent' section loads the gear from our database. Clicking on an item loads a modal that then displays the contact information of the poster. From there, the poster and potential renter can discuss how they want to rent the gear. 

## How we built it

We built GearShare using MongoDB, Node.js, React.js, Express, HTML/CSS.

## Challenges we ran into

 We had different experiences with React, so we had to improvise and find ways to integrate functional components with class-based components.  We also ran into some technical issues when operating on a feature branch due to naming and unintentional pushing of certain files. 

## Accomplishments that we're proud of

We are proud of how we worked as a team to learn each others' skillsets quickly and collaborate so that our code would work together.

## What we learned

Some of us were complete newcomers to working with backend code and learned a lot by integrating the frontend with the backend. We also learned about web design and making our UI look nice. 

## What's next for GearShare

We plan to implement GearShare affiliate marketing program with Instagrammers and TikTok influencers to promote the brand and bring more awareness to the concept of sharing in modern living. We also plan to integrate a machine learning algorithm for sorting the list of items in the rent page to display more relevant content to users. Furthermore, we plan to have a built-in chat for the renter and renter. Finally, with the advent of Web3.0, we plan to make our app run on blockchain and have a leaderboard where top renters have a custom NFT that goes up in price as their position in the sharing leaderboard goes up. This will incentivize sharing.
<br>
<br>

# Running the program

Note: For the purposes of demonstrating the app, a config.env file was included in the commit. The second last step of the following section can be ignored.

To set up this program locally:
- First, clone (**git clone https://github.com/hijifiji/GearShare**) this repository to a desired location. 
- The **frontend** branch is the most up to date at the time of this writing. To switch to the frontend branch, change your terminal directory to the folder containing the repoisitory. Then run **git checkout frontend**.
- In **/backend**, run **npm i** to install node modules
- In **/backend**, create **config.env** and set **PORT = 8000**, set **MONGO_URI = *your_custom_mongodb_uri*** 
- In **/local-app**, run **npm i** to install node modules

To run this program:

- You will need two terminals running simultaneously for this step.
- In **/backend**, run **node .** to start up index.js, this will run on port 8000. If this is successful, "Server running on port 8000" and "MongoDB connected" should be logged to the console.
- In **/local-app**, run **npm start**. The app is now deployed on port 3000! You can now view the app running by visiting **localhost:3000** in a browser.