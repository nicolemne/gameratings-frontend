# GG Ratings Frontend

### **Welcome to GG Ratings Frontend README.**

I grew up in a family where gaming was a big part of our lives. One of my earliest gaming memories is playing Pokémon Red on my Gameboy. Other times, my dad would hook up the Gameboy through the Nintendo 64 to the TV so we could enjoy our games on a bigger screen together and battle each other on Pokémon Stadium. I watched my mom play Sonic on our Sega, and later we would switch to Spyro on the PlayStation 1 or Super Mario 64 on the Nintendo. I spent countless hours immersed in games like Tekken 3, Crash Bandicoot, and Gran Turismo, and that love for gaming has stayed with me ever since.

This lifelong passion led me to create GG Ratings as my final project—a space for gamers to come together and share their thoughts, reviews, and love for games. Whether a discovery or an old favorite, GG Ratings is a place to share the love for gaming and inspire others to try something new.

When planning my final portfolio project for Code Institute, I knew I wanted to combine my passion for gaming with the fullstack development skills I had learned. GG Ratings became the perfect opportunity for me to create a platform where the gaming community can interact, rate games, and share their reviews.

I hope you enjoy the website!

![amiresponsive](/src/assets/amiresponsive.png)

**View Frontend Site**:
[GG Ratings Frontend](https://gameratings-frontend-2c9d8978da10.herokuapp.com/)

**View API**:
[GG Ratings API](https://gameratings-api-d04888e8239b.herokuapp.com/)


## **CONTENTS**
* [Project management](#project-management)
  * [Objective](#objective)
    * [Site user goal](#site-user-goal)
    * [Site owner goal](#site-owner-goal)
  * [Agile Methodology](#agile-methodology)
  * [User Stories](#user-stories)
  * [Future Implementations](#future-implementations)
  * [Custom Reusable React Components](#custom-reusable-react-components)
  * [Design](#design)
    * [Wireframes](#wireframes)
    * [Colour Scheme](#colour-scheme)
    * [Imagery](#imagery)
    * [Typography](#typography)

* [Features of the GG Ratings Frontend](#features-of-the-gg-ratings-frontend-website)

* [Technologies](#technologies)
  * [Languages](#languages)
  * [Frameworks](#frameworks)
  * [Programs, Platforms, and Services](#programs-platforms-and-services)
  * [Libraries and Dependencies](#libraries-and-dependencies)

* [Testing](#testing)

* [Deployment & Local Development](#deployment--local-development)
  * [Local Development](#local-development)
    * [GitHub and Gitpod](#github-and-gitpod)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-fork)
  * [Create a Django REST Framework project](#create-a-django-rest-framework-project)
  * [PostgreSQL Code Institute](#postgres-code-institute)
  * [Setting up Environment Variables](#setting-up-environment-variables)
  * [Heroku](#heroku)

* [Credits](#credits)
  * [References and Resources](#references-and-resources)
  * [Content](#content)
  * [Acknowledgments](#acknowledgments)

---

# Project management

## Objective

The goal of this project was to create the fifth portfolio for Code Institute's Fullstack Developer course. The project had to follow the course requirements and be built using React, JSX (HTML, JavaScript, and CSS), along with other useful libraries. It also needed to connect and fetch data from a backend API. The website needed to have full CRUD which would allow users to create, read, update, and delete data from the API through the front-end.

### Site user goal
The goal of GG ratings is for people to come together and share their love for games. Here they can upload posts with their reviews of a game they've played, and share their thoughts and opinions about it. 

### Site owner's goal
The goal of the GG Ratings website is to provide a platform where users can engage with the gaming community by sharing their thoughts and opinions. The objective for me is to have an interactive space where users can upload their game reviews, rate games, and discover new titles through the shared reviews of others. 

**Key functionalities include**:

- User Authentication: Users can sign up, log in, and log out to access features such as posting reviews and saving games.
- Create, Read, Update, Delete (CRUD) Operations: Users can create, edit, and delete their game reviews, as well as read and interact with reviews from others.
- Game Reviews and Ratings: Users can upload posts with their reviews, rate games, and browse reviews by other members of the community.
- Save Favorite Games: Logged in users can save games to their "My Games" collection for easy access later.
- Search Options: Users can search for specific game posts by genre, developer, platform, and more.
- Responsive Design: The website is fully responsive, ensuring a smooth experience across different devices and screen sizes.


## Agile Methodology

The GG Ratings Frontend project is managed using Agile methodology. The following tools and practices are used to ensure efficient project management:

- [Project Kanban Board](https://github.com/users/nicolemne/projects/8/views/1): The Kanban board helps us see the project's progress. It shows tasks in different stages like "To Do," "In Progress," and "Done," making it easy to track work and spot any issues.
- [Milestones](https://github.com/nicolemne/gameratings-frontend/milestones): Milestones are major goals and deadlines for the project. Each milestone represents a big step or deliverable that needs to be finished by a certain date.
- [Issues](https://github.com/nicolemne/gameratings-frontend/issues): Issues are used to keep track of bugs, improvements, and other tasks. Each issue has a description and labels.


## User Stories

View all user stories [here.](https://github.com/nicolemne/gameratings-frontend/issues?q=is%3Aopen+is%3Aissue+label%3A%22user+story%22+sort%3Acreated-asc)

✔ Navigation & Authentication
------------------------------------
- US01. Navigation: As a user, I can use a navbar so that I can navigate between pages on the website easily
- US02. Routing: As a user, I can click on different pages in the navbar so that I can view pages without having to refresh
- US03. Authentication; Sign up: As a new user I can register an account so that I can access all features for logged-in users
- US04. Authentication; Sign in: As a user, I can sign in to the website so that I can access all functionality for logged-in users
- US05. Authentication; Sign out: As a user, I can sign out from the website so that my account is secure when logged in publicly
- US06. Authentication; Navbar Username & Avatar: As a user, I can see my username and avatar in the navbar so that I can easily identify if I'm logged in and to what account
- US07. Authentication; Refreshing access tokens: As a user, I can keep my logged-in status until I choose to log out so that I don't have to log in while I'm still using the website


✔ Profiles & Following
------------------------------------
- US08. Profile; User Avatars: As a user, I can see another user's avatar so that I can identify different users of the application
- US09. Edit profile: As a logged-in user I can edit my profile so that I can update my profile avatar and biography content
- US10. Edit username and password: As a logged-in user I can update my username and password so that I can change my username and keep my profile secure
- US11. View profiles: As a user, I can view other user's profiles so that I can see their posts and profile biography
- US12. Most followed profiles: As a user, I can see a list of the most followed users so that I can see which users are the most popular reviewers
- US13. Follow/Unfollow: As a logged-in user I can follow and unfollow other users so that I can see more of my favorite users reviewing content
- US14. Most liked post (review): As a user, I can visit another user's profile and see their top 3 reviewed games with the most likes so that I can see their most popular reviews


✔ Likes
------------------------------------
- US15. Like a post: As a logged-in user I can like a post so that I can show appreciation for the content I am viewing
- US16. Unlike a post: As a logged-in user I can unlike a post so that I can change my mind about liking a post
- US17. View liked posts: As a logged-in user I can view the posts I liked so that I can find them easily at another time


✔ Comments
------------------------------------
- US18. View comments: As a user, I can view comments on posts so that I can read what other users think about the posts
- US19. Create a comment: As a logged-in user I can add comments to a post so that I can share my thoughts and opinions about the post and the reviewed game
- US20. Delete comments: As an owner of a comment I can delete my comment so that I can change my mind about commenting on a post
- US21. Edit a comment: As an owner of a comment I can edit my comment so that I can update my existing comment


✔ Posts
------------------------------------
- US22. View Post list: As a user, I can view a list of posts ordered by most recent first so that I can get an overview of what people are posting
- US23. View Post detail: As a user, I can view the details of a single post so that I can learn more about the game the user has reviewed and also like and/or comment if I'm signed in
- US24. Create post: As a logged-in user I can create a post with a title, content, game, image, and my star rating so that I can share my content
- US25. Delete post: As post owner, I can delete my post so that it is no longer available to view
- US26. Edit post: As a post owner I can edit the text and image of my post so that I can update my post after it is created
- US27. Filter list: As a user, I can filter and view a list of posts ordered by name of the game, highest star rating, genre, or platform
- US28. Search Posts: As a user, I can search for posts with keywords such as game name, platform, and genre so that I can find the games and reviews that I am most interested in
- US39: As a user, I can keep scrolling through the images that are loaded automatically so that I don't have to click on "next page"


✔ Games
------------------------------------
- US29. Select Game: As a signed-in user I can create a post and choose to select a game from the database with all the information already there so that I can review that same game
- US30. Add Game: As a signed-in user I can add a new game with a title, release year, platform, genre, and image to the database when I'm creating a review post so that I can review a new game that hasn't been added yet
- US31. Game Information in Post: As a user, I can see information about the game I have selected to review so that I know it's the correct game and platform I'm reviewing and posting
- US32. Game detail: As a user, I can click on the game title so that I can view that specific game information and its average star rating


✔ Saved Games
------------------------------------
- US33. Save Game: As a signed-in user I can save a game from a post or the game detail page so that I can keep a library of my saved games I want to review or already have reviewed
- US34. Library: As a signed-in user I can view my library of saved games so that I can see which games I have saved and what progress status they have
- US35. Status: As a signed-in user I can assign a status to my saved games in my library so that I can see if a game I've saved is In progress, on my Wishlist, or Completed
- US36. Quick view status: As a signed-in user I can see a status icon on all games so that I can quickly see if a game is already saved to my library or not, and what status it currently has
- US37. Delete Saved game: As a signed-in user I can delete a saved game so that I can remove it from my library

## Future Implementations

Here are some of the features I would like to add in the future to increase the user experience. Additional future implementations and fixes are mentioned in [TESTING.md](TESTING.md).

- A Games Page where all the games in the database are listed, as well as a feature to add new games directly from this page.
- Filtering
- Image caching
- Character number limitations to comments and profile biography. 
- Tags
- Quick view status, for users to see if a game is already saved to their 'My Games' and what status it currently has
- Game Detail page
- See top 3 most liked posts on a user's profile
- Access the Django admin page from the frontend
- Access for admins to remove posts and comments directly from the frontend
- More statuses for saved games in 'My Games'

## Custom Reusable React Components 

Each code file includes in-depth comments explaining the structure, functionality, and usage of the components. I have only commented on and mentioned the Hooks, Contexts and Components that are not included in the walkthrough project 'Moments'.

### Hooks

**[useSaveGame](/src/hooks/useSaveGame.js)**

- The useSaveGame hook manages the functionality of saving a game to the 'My Games' page. It handles the API request to store the game data, allowing users to keep track of their gaming progress.

**[useSearch](/src/hooks/useSearch.js)**

- The useSearch hook enables users to search for specific items within a dropdown menu. This functionality enhances user experience by allowing quick access to games or other objects without scrolling through long lists.

**[useSelectedGame](/src/hooks/useSelectedGame.js)**

- The useSelectedGame hook lets you select a game from a list and display its details. When you call the handleSelectGame function with a game ID, it finds the game in the provided list and sets it as the currently selected game. It then organizes the game’s information, like title, platform, and developer, into an easy-to-use format.

### Contexts

**[AllGamesContext](/src/contexts/AllGamesContext.js)**

- The AllGamesContext provides a global state for managing and accessing the list of all games in the application. It fetches data from an API endpoint and makes it available to various components.

### Components

**[AddGame](/src/components/AddGame.js)**

- The AddGame component is a modal that appears when users want to add a new game while creating a post. It provides input fields for entering game details and handles the submission process to save the new game to the database.

**[GameInfo](/src/components/GameInfo.js)**

- The GameInfo component displays detailed information about a specific game. It showcases various fields like title, platform, developer, genre, release year, multiplayer option, average rating, and the game cover image.


## Design

The design part of this project has been super fun and I especially love the moments when I can be creative and design something visually appealing for my projects. 

### Wireframes

The wireframe provided was how I envisioned the design and layout of the website, similar to the design of the walkthrough project 'Moments', but with my touch and additions.

![Wireframes](/src/assets/gg-ratings-wireframe.png)

### Colour Scheme

The colour scheme of this project is based on one of the images I made in Canva for the project, which is used as the default post image and the Navbar banner.

![Colour Palette](/src/assets/colour-palette.png)

![GG Ratings](/src/assets/Gameratings.png)

### Imagery

All images related to the website and its development have been created by me in [Canva](https://www.canva.com/en/). Images related to Posts and Games have been taken from Google.

The following images are made by me: 

- [The GG Logo](/src/assets/logo_main.png)
- [The Navigation Banner](/src/assets/nav_banner.png)
- [404 Page not found](/src/assets/no-results.png)
- [Sign up Hearts](/src/assets/signup_hearts.png)
- [Sign in Stars](/src/assets/signin_stars.png)
- [Post Default image](/src/assets/default_post.jpg)
- [Game Default image](/src/assets/gg_default_new_game_yellow.jpg)
- [Avatar Default image](/src/assets/gg_default_profile2.jpg)

### Typography

The fonts used in this project are Roboto, Pixelify Sans, Patrick Hand, and Kalam. All fonts come from [Google Fonts](https://fonts.google.com/).

![Roboto](/src/assets/roboto.png)

![Pixelify Sans](/src/assets/pixelify-sans.png)

![Patrick Hand](/src/assets/patrick-hand.png)

![Kalam](/src/assets/kalam.png)

---

# Features of the GG Ratings Frontend Website

## Navigation

GG Ratings has a navbar that is present on all pages of the site, in both desktop and mobile view. Logged in users have access to the pages 'New Post', 'Feed', 'Liked Posts', 'My Games' and their profile page, whereas logged out users can access 'Discover', 'Sign Up' and 'Log In'.

**Logged In**

The logged in navigation bar includes more links to pages the user can visit, as well as their profile image and username which allows the user to easily see if they are logged in and to what account. The 'Log Out' button is also present when the user is logged in.

![Navbar - logged in](/src/assets/navbar-logged-in.png)

**Logged Out**

![Navbar - logged out](/src/assets/navbar-logged-out.png)

## Authentication

**Sign Up**

A user who is new to the website and wants to access all the features of GG Ratings will need to create an account. To create an account, the user has to click on 'Sign Up' in the navbar and fill in the desired username and password, as well as a password confirmation. After submitting valid data, the user is redirected to the Login page. The Sign Up page also features a link to the Login page if the user already has an account. 

![Sign Up](/src/assets/sign-up.png)

Error handling when a user tries to submit an empty or invalid form. It also handles errors such as; an already existing username and password too short or too similar to the username.

![Sign Up - Error handling](/src/assets/sign-up-alerts.png)

**Log In**

When a user has created an account on the website, they can log in by filling in the login form. After submitting valid data, they are redirected to the home page. The login page also features a link to the Sign Up page if the user has not yet created an account. 

![Log In](/src/assets/log-in.png)

Error handling when a user tries to submit an empty or invalid form.

![Log In](/src/assets/log-in-alerts.png)

## Home page (Discover)

The Home page (Discover) displays all user posts, with the newest posts shown at the top. As you scroll down, older posts are automatically loaded through infinite scrolling, allowing you to explore more, and older content.

Logged in users can interact with a post in the feed in multiple ways; 

- Click on the post image to be redirected to the post detail page.
- Click on the comment icon to be redirected to the posts comment section.
- Click on the post owner's profile image to be redirected to their profile page. 
- Save a game to their 'My Games' page directly from the home page.
- Follow/unfollow users from the 'Most Popular Profiles'.
- Like a post by clicking on the half-empty heart.
- Unlike a post by clicking the full heart. 

### Search bar

The Discover page also features a search bar at the top, allowing users to search for posts by entering keywords like game titles, platform names, or usernames.

![Home Page - Logged in](/src/assets/homepage-logged-in.jpg)

Unlike logged in users, logged out users have limited access to the features in the feed. However, they can still:

- Click on the post image to be redirected to the post detail page.
- Click on the comment icon to be redirected to the posts comment section.
- Click on the post owner's profile image and/or name to be redirected to their profile page. 

![Home Page - Logged out](/src/assets/homepage-logged-out.jpg)

### Most followed profiles

The 'Most Followed Profiles' section highlights users with the largest follower count, helping others discover interesting new content. This section is fully responsive, adapting for both large and small screens. By clicking the 'Follow' button, the user's posts will appear in the 'Followed' section.

Desktop View

![Most Followed Profiles - Desktop](/src/assets/most-followed-profiles-desktop.png)

Mobile View

![Most Followed Profiles - Mobile](/src/assets/most-followed-profiles-mobile.png)

### Follow - Followed

Clicking the 'Follow' button (in the 'Most Followed Profiles' section or a user's profile), allows users to follow each other's content. To unfollow a profile, simply click 'Unfollow', and you will stop following that user. The number of followers and the users a person is following is displayed in their profile stats.

![Follow - Followed](/src/assets/following-count.png)

## New Post

Logged in users can access the 'New Post' page to create their game review. The 'New Post' page features;

- Uploading (and changing) an image
- A form to enter a title
- A textarea to write content about the game they are reviewing
- Radio buttons to enter their personal rating
- A button to select a game from the list of pre-existing games in the database

![New Post](/src/assets/add-post.png)

Error handling is in place to prevent form submission if the user has not selected an image or if the image has an incorrect file type or size, and also for missing a title or rating.

![Error Handling: Game](/src/assets/select-game-error-handling.png)

![Error Handling: Rating](/src/assets/select-game-error-handling-2.png)

![Error Handling: Image](/src/assets/select-game-error-handling-3.png)

### Selecting a Game

When a user clicks on the 'Select Game' button, a dropdown appears with the list of existing games. The user can then select a game they want to review.

![Select a Game](/src/assets/select-game.png)

If the user cannot find the game they want to review, they can search for it in the search bar inside the dropdown.

![Search for a Game](/src/assets/add-game-search.png)

### New Game

If a user wants to review a game that is not yet in the database, they can click the 'New Game' button within the 'Select Game' dropdown. This opens a modal where they can fill in details such as the game’s title, game developer, release year, genre (with a searchable dropdown), platform (also with a searchable dropdown), image, and indicate whether the game has multiplayer features or not. After submitting valid data, the new game is saved to the database and will be added to the list of games in the 'Select Game' dropdown.

![Add Game Modal](/src/assets/add-game-modal.png)

Error handling is in place to prevent form submission if the user has not selected an image, if the image has an incorrect file type or size, or if required fields like game title, genre, platform, or release year are missing or incorrectly formatted. There is also error handling in place in case a user tries to add a game that already exists with the same platform. New games with a unique platform can be added.

![Add Game Modal - Error Handling](/src/assets/add-game-modal-error-handling.png)

Here is what it looks like when a game is selected for the post: all the game details are displayed along with a small image of the chosen game.

![Selected Game](/src/assets/add-game-selected-game.png)

After successfully submitting the new post, the user will be redirected to that post's detail page.

## Post Detail Page

In the Post Detail Page, logged in users can view all the details of the post and interact with the like/unlike and save game button, just as they can on the home page. Additionally, signed in users have the option to add comments. While logged out users can view existing comments, they need to sign in before they can leave their comments. If a user is the owner of a post, they can click the three dots in the upper right corner to edit or delete the post.

![Post Detail Page](/src/assets/post-detail.jpg)

Comment section

![Comment Field](/src/assets/comment-field.png)

Comment dropdown to edit or remove a comment.

![Comment Dropdown](/src/assets/comment-dropdown.png)

Comment edit field

![Comment Edit](/src/assets/edit-comment.png)

## Edit Post Detail Page

If a post owner wants to edit their post, they need to navigate to the Post Detail Page and click on the three white dots. From there, they can select 'Edit Post', which will take them to the edit page. All fields will be pre-populated with the original post details, making it easy for them to make changes. After submitting the edits, the user will be redirected back to the Post Detail Page, where the updated information will be displayed.

![Edit Post Detail Page](/src/assets/edit-post.jpg)

## Feed

The Feed Page works similarly to the Discover page but displays only the posts from users that the current user has followed. It retains the same features as the home page feed, such as liking, commenting, and navigating to post details. Additionally, users can search for posts within their followed feed using keywords related to game titles, platforms, or usernames to quickly find relevant content.

![Feed Page](/src/assets/feed-posts.jpg)

## Liked Posts

The Liked Posts page shows all the posts the user has previously liked. Similar to the Feed and Discover pages, users can interact with the posts by unliking, commenting, or viewing post details. The page also includes a search bar that allows users to search through their liked posts by entering keywords related to game titles, platforms, or usernames, helping them quickly find specific posts they have liked.

![Liked Page](/src/assets/liked-posts-posts.jpg)

## Like - Unlike

The Like/Unlike feature allows users to interact with posts by showing appreciation for the content they enjoy. Logged in users can click the half-empty heart button on any post to like that particular post, and the post will be added to their Liked Posts page. If a user changes their mind, they can click the full heart button to remove the like, and the post will no longer appear in their Liked Posts.

The number of likes a post has received is displayed next to the Like button, and this count updates automatically when a post is liked or unliked. 

A full heart indicates that a post has been liked by the user.

![Liked](/src/assets/liked.png)

Half-empty heart indicating that a post has not yet been liked by the user.

![Unliked](/src/assets/unliked.png)

Error when a logged out user tries to like a post, prompting them to log in.

![Login to Like](/src/assets/login-to-like.png)

## Star Rating

The Star Rating feature allows users to give a personal rating to any game they review. When submitting a review, users can set their rating out of five stars to reflect their opinion of the game. This rating is then saved and added to the overall ratings for that game. In the Game Detail window, all user ratings are collected and averaged to display an Average Star Rating, giving users an easy way to see how the game is generally perceived by the community.

![Rating](/src/assets/rating.png)

In the above image, we can see that the owner of this review has given this game a 5 out of 5 rating, however, another user has given the same game a rating of 4 in their review, and the average rating for this game has been calculated to 4.5.

## My Games

The 'My Games' page allows logged in users to save and track their favorite games. Users can view game details and set the progress status of each game to 'Completed', 'In Progress', or 'Wishlist'. They can also remove games from their saved list if they no longer wish to track them. Additionally, there is an Add Game button with a search functionality that allows users to quickly find and add new games to their saved list. An error message will be displayed if the user already has saved a specific game to their 'My Games' library, and a success message will be displayed after a user has added a new game.

![My Games](/src/assets/my-games.png)

![My Games - Add](/src/assets/my-games-search-add.png)

Games can also be saved directly from any game detail window on the website whilst logged in, making it easy to add games as you explore and review.

![Save Game Button](/src/assets/save-game-button.png)

If a user has not yet saved any games, a message will be displayed, prompting them to save games to this page.

![My Games](/src/assets/my-games-no-games.png)

## Profile

In the Profile Page users can view their username and biography, the number of posts they've made, and their following and follower counts. Profile owners can customise their profile through the Edit option found in the three dots menu. This allows them to write/edit their biography, upload a profile image, and make any other necessary changes to their profile details, such as changing their username or password.

![Profile](/src/assets/profile-page.jpg)

![Profile Dropdown](/src/assets/profile-edit-dropdown.png)

## Edit Profile

When a user navigates to the Edit Profile page, all fields will be pre-populated with their existing information. This allows users to easily update only the sections they wish to change without needing to re-enter all their details.

![Profile Edit](/src/assets/edit-profile.jpg)

## 404 Page

If a user tries to access a page that doesn't exist, they will encounter a 404 Error Page.

![404 Page](/src/assets/404-page.png)

# Technologies and Credits

## Languages
- HTML - Content and structure
- CSS - Styling
- JavaScript - Interactive elements
- JSX - HTML-like syntax for React components
- Git - Version control

## Frameworks
- React - Frontend components
- React Bootstrap - CSS framework for responsive design
- Node.js - Backend runtime environment for JavaScript

## Programs, Platforms, and Services
- Cloudinary - Image hosting
- Heroku - Cloud application platform for deployment
- GitHub - Version control and collaboration platform
- PostgreSQL from Code Institute - Database management system
- Canva - Design tool for graphics and social media
- Balsamiq - Wireframes tool for UI design
- Favicon - Small icon for the website
- Coolors - Color palette generator

## Libraries and Dependencies

- Axios - HTTP client for API requests
- npm - Package manager for JavaScript libraries
- jwt-decode - Library for decoding JSON Web Tokens


# Testing

For full extensive testing and documentation, please see: [TESTING.md](TESTING.md)

# Deployment & Local Development

#### **GitHub & Gitpod**
My GitHub repository gameratings-frontend was created using the following template: [Code-Institute-Org/ci-full-template](https://github.com/Code-Institute-Org/ci-full-template). I've used Gitpod as my cloud-based IDE (integrated development environment) which operates entirely online.

1. Install the Gitpod extension for Google Chrome. This extension enables you to launch a workspace directly from your GitHub repository by clicking the "Open with Gitpod". 
2. Once the workspace is opened through GitHub (first time), continue accessing and running the project from Gitpod's interface on their website for subsequent coding sessions.

When working with Git, make frequent and small commits. Use these commands for committing changes:
- `git add .`: stages all modified files
- `git commit -m "A message explaining your commit"`: commits the changes to the local repository
- `git push`: pushes the committed changes to your GitHub repository

#### **How to Fork**

1. Login (or sign up) to GitHub.
2. Go to the repository for this project [here](https://github.com/nicolemne/gameratings-frontend)
3. Click the Fork button in the top right corner.

#### **How to Clone**

If you wish to clone my project, please see the following steps below:

1. Navigate to GitHub: https://github.com/nicolemne/gameratings-frontend
2. Select the 'Clone' button
3. Copy the URL or download it as a ZIP file
4. Use git clone + the URL in your terminal, or unpack the ZIP containing the project

### **Create a React Project**
1. Install Django along with supporting libraries such as Gunicorn, Cloudinary, psycopg2, Pillow, and Allauth.
2. Create a project: `django-admin startproject project_name`
3. Similarly, create an app: `python manage.py startapp app_name`
4. Create a file for requirements: `pip freeze --local > requirements.txt` 
   - Remember to repeat this step every time you install a new library or dependency
5. Add your apps to `INSTALLED_APPS` in settings.py file: `'app_name',`
6. Follow the steps in [Setting up Environment Variables](#setting-up-environment-variables) to set up your:
   - DEV
   - SECRET_KEY
   - DATABASE_URL
   - ALLOWED_HOSTS
   - CLOUDINARY_URL
7. Migrate changes: `python manage.py migrate`
8. Run server locally: `python manage.py runserver`

### **Heroku**
1. Sign in to Heroku or create an account if you don't already have one.
2. Click 'New' to create a new Heroku app. Choose a name for your app and choose your region (e.g., Europe).
3. Go to the app settings tab and click on 'Reveal Config Vars'.
4. Add a configuration variable named DATABASE_URL and paste your database URL (same as the one in your env.py).
5. Add a SECRET_KEY configuration variable with the secret key from your env.py file.
6. In the deploy tab, use GitHub as the deployment method. Find your repository by name and connect. Deploy the main branch from the manual deployment section.

### PostgreSQL from Code Institute
I've used the PostgreSQL database provided by Code Institute. If you're a Code Institute student, you can follow the below steps to set up your database for your project.

1. Navigate to [PostgreSQL from Code Institute](https://dbs.ci-dbs.net/) 
2. Enter the email address you use to sign in to the LMS
3. Wait for an email from the Code Institute Bot
4. The DATABASE_URL will be provided inside the email for you to copy into your project env.py and Heroku
5. Read the email for further instructions on how to manage your databases


# Credits

## References and Resources

#### React 

- [React Forms](https://reactjs.org/docs/forms.html)
- [React useState Hook](https://reactjs.org/docs/hooks-state.html)
- [Conditional Rendering](https://legacy.reactjs.org/docs/conditional-rendering.html)
- [Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
- [React Radio Buttons](https://react-bootstrap.github.io/forms/checks-radios/)
- [Handling Radio Buttons in React](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
- [React Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)

#### Bootstrap 

- [React-Bootstrap Documentation: Forms, Navbar](https://react-bootstrap-v4.netlify.app/getting-started/introduction/)
- [Bootstrap Documentation: Forms, Navbar & Flex](https://getbootstrap.com/docs/4.0/utilities/flex/)
- [Using CSS Modules In React App](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87)


#### Other

- [Change color of NavBar toggle button](https://stackoverflow.com/questions/61282091/how-to-change-the-line-color-in-the-navbar-toggle-button-in-react-bootstrap)
- [Using CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [CSS text-fill-color Property](https://www.w3docs.com/learn-css/text-fill-color.html)
- [CSS background-clip text](https://mgearon.com/css/css-background-clip-text/)
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [JavaScript find Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)



## Content
I have personally developed all the code in this project, demonstrating my dedication and commitment to its creation. While working on this project, I utilized various resources, including those acknowledged in the References and Resources, which provided valuable insights and inspiration. Additionally, I have incorporated some code from the Learning DRF-API and Moments walkthrough projects to enhance the functionality and quality of this project.

## Acknowledgments
I would like to thank and acknowledge the following people, who have shown invaluable support throughout my fifth project:

- Dan Ford, not only as my boyfriend but also as my biggest supporter. His unwavering encouragement and belief in my abilities have been a constant source of motivation and inspiration. I am truly grateful to have him by my side throughout this journey.
- Antonio Rodriquez, my new mentor at Code Institute. Antonio has been incredibly helpful, showing great patience and providing informative guidance throughout the project. His expertise and support have made a significant impact on my learning and development.
- Joseph Doble has offered valuable assistance with sourcing relevant information and explaining the intricacies of various concepts. His help has been greatly appreciated.
- Tutor Support, their patience, and willingness to address my endless questions have been instrumental in my learning process and growth.
- Student Care, for their understanding and help.