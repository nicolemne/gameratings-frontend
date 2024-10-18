# GG Ratings TESTING

View live site:
[GG Ratings](https://gameratings-frontend-2c9d8978da10.herokuapp.com/)

---

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
* [Code validation](#code-validation)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)

* [MANUAL TESTING](#manual-testing)
  * [Full Site Testing](#full-site-testing)
    * [Authentication - Logged Out User](#authentication---logged-out-user)
    * [Navigation - Logged In User](#navigation---logged-in-user)
    * [Post List Page: Logged Out User](#post-list-page-home-page-logged-out-user)
    * [Posts List Page: Logged In User](#post-list-page-home-page-logged-in-user)
    * [Search & Filtering: Home page](#search--filtering-home-page-logged-in--logged-out-user)
    * [Post Detail Page: Logged Out User](#post-detail-page-logged-out-user)
    * [Post Detail Page: Logged In User](#post-detail-page-logged-in-user)
    * [Add Post Page: Logged Out User](#add-post-page-logged-out-user)
    * [Add Post Page: Logged In User](#add-post-page-logged-in-user)
    * [Edit Post Page: Logged Out User](#edit-post-page-logged-out-user)
    * [Edit Post Page: Logged In User](#edit-post-page-logged-in-user)
    * [Feed Page: Logged Out User](#feed-page-logged-out-user)
    * [Feed Page: Logged In User](#feed-page-logged-in-user)
    * [Liked Posts Page: Logged Out User](#feed-page-logged-out-user)
    * [Liked Posts Page: Logged In User](#feed-page-logged-in-user)
    * [My Games Page: Logged Out User](#my-games-page-logged-out-user)
    * [My Games Page: Logged In User](#my-games-page-logged-in-user)
    * [Profile Page: Logged Out User](#profile-page-logged-out-user)
    * [Profile Page: Logged In User](#profile-page-logged-in-user)
    * [Edit Profile Page: Logged Out User](#edit-profile-page-logged-out-user)
    * [Edit Profile Page: Logged In User](#edit-profile-page-logged-in-user)
  * [Hooks](#hooks)
  * [Contexts](#hooks)
  * [Components](#components)

* [BUGS](#bugs)
  * [Known Bugs](#known-bugs)
  * [Future Fixes](#future-fixes)
  * [Fixed Bugs](#fixed-bugs)

---

## AUTOMATED TESTING

Few automated tests have been made in this project. Most if not all testing has been done manually.

## Code validation

### JSX
JSX code have been manually validated and adjusted throughout development via direct feedback from npm in the terminal. 

### CSS and React bootstrap
CSS and React bootstrap code have been manually validated and adjusted throughout development via direct feedback from npm in the terminal. 

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS. All pages of the website was tested and no errors or warnings were found. The only thing that was noted was a couple of trailing slashes in index.html, which I have ignored as they were added in by my beautify code extension.

![W3C No errors](/src/assets/w3c-home.png)

![W3C Trailing Slashes](/src/assets/w3c-info.png)

The CSS W3C found 1 error and several warnings, all of which are connected to the Bootstrap included in this project.

![W3C CSS](/src/assets/w3c-css.png)

- - -

### Lighthouse

I used Chrome Developer Tools Lighthouse to test performance, accessibility and best practices of the website. There is definitely room for improvements to increase the score in both Best Practices and Performance, however at the time of writing this code and submitting this project, further optimization is still something I have yet to learn in the future.

**Best Practices score**: 
- I found that the Best practices was underperforming due to authorization errors as well as some issues with Cookies.

**Performance score**: 
- The Desktop and Mobile performance is slightly underperforming due to image formats being either too large or not being fully optimized with next gen formats.

### Desktop Results

![Desktop Lighthouse](/src/assets/lighthouse-desktop.png)

### Mobile Results

![Desktop Lighthouse](/src/assets/lighthouse-mobile.png)

## Best Practices

![Desktop Lighthouse](/src/assets/best-practices-mobile.png)

---


# MANUAL TESTING

## Full Site Testing

### Authentication: Logged Out User

- ✓ Logged out users cannot access the `/feed/` page, and are redirected to the home page.
- ✓ Logged out users cannot access the `/liked/` page, and are redirected to the home page.
- ✓ Logged out users cannot access the `/posts/create/` page, and are redirected to the home page.
- ✓ Logged out users cannot access the `/posts/edit/` page, and are redirected to the home page.
- ✓ Logged out users cannot access the `/mygames/` page, and are redirected to the home page.
- ✓ Logged out users cannot access the `/profiles/edit/` page, and are redirected to the home page.
- ✓ Logged out users can see an image of three hearts in the `/signup/` page when viewing from a desktop, tablet and mobile. 
- ✓ Logged out users can see an image of three stars in the `/login/` page when viewing from a desktop, tablet and mobile.


### Navigation: Logged In User

- ✓ Clicking the logo directs the user to the home page
- ✓ Clicking the Discover link directs the user to the home page
- ✓ Logged in users cannot access the `/signup/` page, and are redirected back to the home page
- ✓ Logged in users cannot access the `/login/` page, and are redirected back to the home page.
- ✓ Logged in users cannot see the Log In button in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users cannot see the Sign Up button in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `Discover` link in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `New Post` link in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `Feed` in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `Liked Posts` link in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `My Games` link in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `Profile (username)` link in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the `Log Out` link in the navbar when viewing from a desktop, tablet and mobile.
- ✓ Clicking the `Discover` link in the navbar directs the user to the home page. 
- ✓ Clicking the `New Post` link in the navbar directs the user to the New Post page. 
- ✓ Clicking the `Feed` link in the navbar directs the user to the Feed page. 
- ✓ Clicking the `Liked Posts` link in the navbar directs the user to the Liked Posts page. 
- ✓ Clicking the `My Games` link in the navbar directs the user to the My Games page. 
- ✓ Clicking the `Profile (username)` link in the navbar directs the user to the Profile page. 
- ✓ Clicking the `Log Out` link in the navbar logs the user out and re-directs the user to home page. 
- ✓ Logged in users can see their own profile image in the navbar next to their username when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see their own profile name in the navbar next to their profile image when viewing from a desktop, tablet and mobile.
- ✓ Tablet and mobile users can see the hamburger menu from all pages.

### Post List Page (Home page): Logged Out User

- ✓ Logged out users can see the Popular Profiles component when viewing from a desktop, tablet and mobile.
- ✓ Logged out can not see the follow button under each Popular Profile when viewing from a desktop, tablet and mobile.
- ✓ When a logged out user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that user's profile page. 
- ✓ Logged out users can see all posts in 'Discover (home page)', with the posts related Title, Content, Image, Game and game details.  
- ✓ Logged out users can see the number of likes on each post.
- ✓ Logged out users cannot like a post. An overlay is displayed prompting the user to Log In to like the post.
- ✓ Logged out users can see the number of comment on each post.
- ✓ Logged out users cannot save a game. The Save game button is not visible to logged out users.
- ✓ Logged out users can see the rating which the post owner has given the game they have posted.
- ✓ When a logged out user clicks on a posts image, they are redirected to the selected posts detail page.
- ✓ When a logged out user clicks the comment icon on a post, they are redirected to the selected posts comment field.
- ✓ When a logged out user clicks the post owners profile image, they are redirected to the selected profiles page. 
- ✓ When a logged out user enters a keyword into the search field, posts are filtered to show results based off the keyword entered.

### Post List Page (Home page): Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Logged in users can see the Popular Profiles component when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the follow button under each Popular Profile when viewing from a desktop and tablet, but not on mobile.
- ✓ **When a logged in user clicks the follow button from one of the 'Most followed profiles', the button is changed to 'unfollow' and the current users following count increments with +1 and the followed users follower count increments with +1. 
- ✓ **When a logged in user clicks the unfollow button from one of the 'Most followed profiles', the button is changed to 'follow' and the current users following count decreases with -1 and the followed users follower count decreases with -1. 
- ✓ When a logged in user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that users profile page. 
- ✓ Logged in users can see all posts in 'Discover (home page)', with the posts related details such as Title, Content, Image, Game, including game details.  
- ✓ Logged in users can see the number of likes on each post.
- ✓ Logged in users can see the number of comments on each post.
- ✓ Logged in users can see the rating which the post owner has given the game they have posted.
- ✓ When a logged in user clicks on a posts image, they are redirected to the selected posts detail page.
- ✓ When a logged in user clicks the comment icon on a post, they are redirected to the selected posts comment field.
- ✓ When a logged in user clicks the post owners profile image, they are redirected to the selected profiles page. 
- ✓ When a logged in user enters a keyword into the search field, posts are filtered to show results based off the keyword entered.
- ✓ When a logged in user clicks the like button, posts like count increments with +1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the like button again (after having liked a post), posts like count decreases with -1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the 'Save' icon, the game will be saved to the users 'My Games' page and display a success alert message.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.

**Only tested on desktop and tablet.

### Search & Filtering (Home page): Logged in & Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Post title keyword in the search field will display all posts with the same keyword in the title.
- ✓ Username keyword in the search field will display all posts created by the same user.
- ✓ Game keyword in the search field will display all posts with the same game.
- ✓ Developer keyword in the search field will display all posts with the same developer.
- ✓ Genre keyword in the search field will display all posts with the same genre.
- ✓ Platform keyword in the search field will display all posts with the same platform.

### Post Detail Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Logged out users can view the 'Most followed profiles'.
- ✓ When a logged out user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that users profile page. 
- ✓ When a logged out user clicks the Post's owners Profile image in the post, they are redirected to that users profile page. 
- ✓ Logged out users can view all the details of a single post, such as Title, Content, Image, Game (including all game details), likes count, and comments count.  
- ✓ When a logged out user tries to like a post, an overlay is displayed prompting the user to Log In to like the post.
- ✓ Logged out users can read all the comments related to the post.
- ✓ Logged out users cannot comment on a post. The Comment form is not visible to logged out users.
- ✓ Logged out users cannot save a game. The Save game button is not visible to logged out users.
- ✓ Logged out users can see the rating which the post owner has given the game they have posted.

### Post Detail Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Logged in users can view the 'Most followed profiles'.
- ✓ When a logged in user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that users profile page. 
- ✓ When a logged out user clicks the Post's owners Profile image in the post, they are redirected to that users profile page. 
- ✓ Logged in users can view all the details of a single post, such as Title, Content, Image, Game (including all game details), likes count, and comments count.  
- ✓ When a logged in user clicks the like button, posts like count increments with +1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the like button again (after having liked a post), posts like count decreases with -1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the 'Save' icon, the game will be saved to the users 'My Games' page and display a success alert message.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.
- ✓ Logged in users can see the rating which the post owner has given the game they have posted.
- ✓ Logged in users can read all the comments related to a post.
- ✓ Logged in users can comment on a post. The Comment form is visible for logged in users.
- ✓ When a logged in user submits a comment on a post, the comment will be displayed at the top of the comments (newest comments displayed first).
- ✓ When a logged in user comments on a post, the comments count increments with +1.
- ✓ If the logged in user is the owner of a published comment, they can see the three dots in their comment, and clicking the three dots displays an edit/delete menu.
- ✓ Logged in users can delete their own comment via the three dot menu.
- ✓ When a logged in user deletes their comment on a post, the comments count decreases with -1.
- ✓ Logged in users can edit their own comment via the three dot menu.
- ✓ When a logged in user edits their comment on a post, the updated content of the comment will be displayed when clicking the 'save' button.
- ✓ If the logged in user is the owner of a post, they can see the three dots edit/delete menu next to the created at date.
- ✓ Logged in users that are the owner of a post can delete their own posts via the three dots edit/delete menu.
- ✓ When a logged in user deletes their post, the post will be removed from the database and the user redirected to their profile page.
- ✓ When a logged in user clicks on edit post, the user is redirected to the edit post page.
- ✓ When a logged in user edits their post, they can edit all fields such as; Title, Content, Game & Rating. 
- ✓ When a logged in user saves the changes to their edited post, they will be redirected to that posts detail page, and the updated details in the post will be displayed.

### Add Post Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged out user tries to access the Add Post Page, they will be redirected to the home page.

### Add Post Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a loggged in user clicks on 'New Post' they are redirected to the Add Post Page.
- ✓ Logged in users are able to upload an image to their post.
- ✓ Logged in users are able to change the selected image.
- ✓ Logged in users are able to enter a title for their post.
- ✓ Logged in users are able to enter content for their post.
- ✓ Logged in users are able to set a personal rating.
- ✓ Logged in users can select a pre-existing game from the 'Select Game' dropdown menu.
- ✓ Logged in users can search for a pre-existing game from the 'Select Game' dropdown menu.
- ✓ Logged in users can add a new game from within the 'Select Game' dropdown menu.
- ✓ Pressing the 'New Game' button from within the 'Select Game' dropdown menu opens up the 'New Game modal'.
- ✓ Logged in users are able to upload an image to the new game.
- ✓ Logged in users are able to change the selected image for the new game.
- ✓ Logged in users are able to enter a game title for their new game.
- ✓ Logged in users are able to enter game developer, release year and multiplayer for their new game.
- ✓ Logged in users are able to search and choose a genre from a dropdown list of pre-exisiting genres.
- ✓ Logged in users are able to search and choose a platform from a dropdown list of pre-exisiting platforms.
- ✓ Logged in users are able to set a personal rating.
- ✓ Logged in users can create a new post when all the criteria is met.
- ✓ Logged in users will be redirected to the newly created Post Detail page after creating a new post. 
- ✓ A selected game will show the games following fields: image, game title, platform, developer, genre, release year, multiplayer and average rating.
- ✓ When the post owner clicks on 'Create' they are redirected to the newly created posts Post Detail page.


Alert messages:

- ✓ Logged in users are unable to add a new game without adding an image - Warning alert displayed
- ✓ Logged in users are unable to add a new game without adding a game title - Warning alert displayed
- ✓ Logged in users are unable to add a new game without adding a release year in the YYYY format - Warning alert displayed
- ✓ Logged in users are unable to add a new game without selecting a genre from the dropwdown menu - Warning alert displayed
- ✓ Logged in users are unable to add a new game without selecting a platform from the dropwdown menu - Warning alert displayed
- ✓ Logged in users are unable to create a post without adding an image - Warning alert displayed
- ✓ Logged in users are unable to create a post without adding a title - Warning alert displayed
- ✓ Logged in users are unable to create a post without selecting a game - Warning alert displayed
- ✓ Logged in users are unable to create a post without adding a rating - Warning alert displayed
- ✓ When clicking the 'Save' icon, the game will be saved to the users 'My Games' page and display a success alert message.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.

### Edit Post Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged out user tries to access '/posts/#/edit', they will be redirected to the home page.

### Edit Post Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Post owners can view their post form pre-populated with the current post details.
- ✓ Post owners can select a new game.
- ✓ Post owners can add a new game.
- ✓ Post owners can change the uploaded image.
- ✓ Post owners can enter a new title.
- ✓ Post owners can enter new content.
- ✓ Post owners can select a new rating.

### Feed Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged out user tries to access '/feed', the 404 Not found page will be displayed.

### Feed Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Posts of users they follow will be displayed in the Feed Page.
- ✓ Logged in users can view all the details of a single post, such as Title, Content, Image, Game (including all game details), likes count, and comments count.  
- ✓ Logged in users can see the Popular Profiles component when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the follow button under each Popular Profile when viewing from a desktop and tablet, but not on mobile.
- ✓ **When a logged in user clicks the follow button from one of the 'Most followed profiles', the button is changed to 'unfollow' and the current users following count increments with +1 and the followed users follower count increments with +1. 
- ✓ **When a logged in user clicks the unfollow button from one of the 'Most followed profiles', the button is changed to 'follow' and the current users following count decreases with -1 and the followed users follower count decreases with -1. 
- ✓ When a logged in user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that users profile page.
- ✓ Logged in users can see the number of likes on each post.
- ✓ Logged in users can see the number of comment on each post.
- ✓ Logged in users can see the rating which the post owner has given the game they have posted.
- ✓ When a logged in user clicks on a posts image, they are redirected to the selected posts detail page.
- ✓ When a logged in user clicks the comment icon on a post, they are redirected to the selected posts comment field.
- ✓ When a logged in user clicks the post owners profile image, they are redirected to the selected profiles page. 
- ✓ When a logged in user enters a keyword into the search field, posts are filtered to show results based off the keyword entered.
- ✓ When a logged in user has not yet followed a user a 'No results' message will be shown in the Feed Page.
- ✓ When a logged in user clicks the like button, posts like count increments with +1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the like button again (after having liked a post), posts like count decreases with -1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the 'Save' icon, the game will be saved to the users 'My Games' page and display a success alert message.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.

### Liked Posts Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged out user tries to access '/liked', the 404 Not found page will be displayed.

### Liked Posts Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Posts which the user has liked will be displayed in the Liked Posts Page.
- ✓ Logged in users can view all the details of a single post, such as Title, Content, Image, Game (including all game details), likes count, and comments count.  
- ✓ Logged in users can see the Popular Profiles component when viewing from a desktop, tablet and mobile.
- ✓ Logged in users can see the follow button under each Popular Profile when viewing from a desktop and tablet, but not on mobile.
- ✓ When a logged in user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that users profile page.
- ✓ Logged in users can see the number of likes on each post.
- ✓ Logged in users can see the number of comment on each post.
- ✓ Logged in users can see the rating which the post owner has given the game they have posted.
- ✓ When a logged in user clicks on a posts image, they are redirected to the selected posts detail page.
- ✓ When a logged in user clicks the comment icon on a post, they are redirected to the selected posts comment field.
- ✓ When a logged in user clicks the post owners profile image, they are redirected to the selected profiles page. 
- ✓ When a logged in user enters a keyword into the search field, posts are filtered to show results based off the keyword entered.
- ✓ When a logged in user has not yet liked a post, a 'No results' message will be shown in the Liked Posts Page.
- ✓ When a logged in user clicks the like button, posts like count increments with +1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the like button again (after having liked a post), posts like count decreases with -1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the 'Save' icon, the game will be saved to the users 'My Games' page and display a success alert message.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.

### My Games Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged out user tries to access '/mygames', they will be redirected to the home page.

### My Games Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged in user has not yet saved a game, a 'No results' message will be shown in the My Games page.
- ✓ When a logged in user clicks the 'Add Game' button, they can select a game from a list of already existing games to add it to their saved games.
- ✓ When a logged in user clicks the 'Add Game' button, they can search for a game from a list of already existing games.
- ✓ When a logged in user has saved a game, from either a Post or from the 'Add Game' button, the game will be displayed in their saved games.
- ✓ A alert message will show when a user has successfully saved a game to their 'My Games' page.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.
- ✓ The saved game will display the game title, developer, release year, genre, platform, multiplayer and average rating. 
- ✓ When a logged in user clicks the 'X' button, the saved game will be removed from their 'My Games' page.
- ✓ When a logged in user clicks the status button under the game title, a dropdown menu will be shown, allowing the user to select a new status for the saved game.
- ✓ When a logged in user selects a new status, the status will change to reflect the new status choice. 
- ✓ When a logged in user enters a keyword into the search field, saved games are filtered to show results based off the keyword entered.

### Profile Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Logged out users can see the Popular Profiles component when viewing from a desktop, tablet and mobile.
- ✓ Logged out can not see the follow button under each Popular Profile when viewing from a desktop, tablet and mobile.
- ✓ When a logged out user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that user's profile page.
- ✓ Logged out users can view the number of posts the profile owner has posted.
- ✓ Logged out users can view the number of followers the selected profile has.
- ✓ Logged out users can view the number of other profiles the selected profile is following.
- ✓ Logged out users can view the profile owner's username.
- ✓ Logged out users can view the profile owner's biography.
- ✓ Logged out users can view the posts made by the selected profile.
- ✓ When a logged out user clicks on a posts image, they are redirected to the selected posts detail page.
- ✓ When a logged out user clicks the comment icon on a post, they are redirected to the selected posts comment field.
- ✓ Logged out users can see the number of likes on each post.
- ✓ Logged out users cannot like a post. An overlay is displayed prompting the user to Log In to like the post.
- ✓ Logged out users can see the number of comments on each post.
- ✓ Logged out users can see the rating which the post owner has given the game they have posted.
- ✓ Logged out users cannot save a game. The Save game button is not visible to logged out users.

### Profile Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Logged in users can see the Popular Profiles component when viewing from a desktop, tablet and mobile.
- ✓ Logged in can not see the follow button under each Popular Profile when viewing from a desktop, tablet and mobile.
- ✓ When a logged in user clicks the Profile image from one of the 'Most followed profiles', they are redirected to that user's profile page.
- ✓ Logged in users can view the number of posts the profile owner has posted.
- ✓ Logged in users can view the number of followers the selected profile has.
- ✓ Logged in users can view the number of other profiles the selected profile is following.
- ✓ Logged in users can view the profile owner's username.
- ✓ Logged in users can view the profile owner's biography.
- ✓ Logged in users can view the posts made by the selected profile.
- ✓ Logged in users can see the number of likes on each post.
- ✓ Logged in users can see the number of comments on each post.
- ✓ Logged in users can see the rating which the post owner has given the game they have posted.
- ✓ When a logged in user clicks on a posts image, they are redirected to the selected posts detail page.
- ✓ When a logged in user clicks the comment icon on a post, they are redirected to the selected posts comment field.
- ✓ When a logged in user clicks the like button, posts like count increments with +1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the like button again (after having liked a post), posts like count decreases with -1 and the like icon changes to reflect the liked status.
- ✓ When a logged in user clicks the 'Save' icon, the game will be saved to the users 'My Games' page and display a success alert message.
- ✓ If a game is already saved to a users 'My games' page, an alert message will display to notify the user that the game is already saved.
- ✓ If the user is viewing their own profile page, they can see three dots on the right side, allowing them to edit their profile.
- ✓ When a logged in profile owner clicks edit profile, the user is redirected to the edit profile page.
- ✓ The logged in profile owner can edit their own username via the three dots edit profile menu.
- ✓ The logged in profile owner can edit their own password via the three dots edit profile menu.

### Edit Profile Page: Logged Out User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ When a logged out user tries to access '/profile/#/edit', they will be redirected to the home page.

### Edit Profile Page: Logged In User

All tests performed has been tested on desktop, tablet and mobile view.

- ✓ Profile owners can view their profile form pre-populated with the current profile details.
- ✓ Profile owners can upload an image into the form.
- ✓ Profile owners can change the uploaded image.
- ✓ Profile owners can enter a biography into the form.


## Hooks

### useSaveGame hook
- The useSaveGame hook successfully saves a game to 'My Games'. 

### useSearch hook
- The useSearch hook successfully allows searching for objects inside a dropdown menu.

### useSelectedGame hook
- The useSelectedGame hook successfully handles and displays a game and respective fields when selecting a game.

### useClickOutsideToggle hook
- The useClickOutsideToggle allows the user to close the navbar hamburger menu when clicking outside of it. 

### useRedirect hook
- The useRedirect hook successfully redirects the a user as expected.

## Contexts

### AllGamesContext context
- The AllGamesContext context successfully fetches all the games from the api endpoint.

## Components

### AddGame component
- The AddGame component successfully opens up a modal when adding a new game while creating a post.

### GameInfo component
- The GameInfo correctly displays all game details and successfully handles saving the game to a user’s "My Games" list.

---

# BUGS

## Known Bugs 

There are currently no known bugs that affect the main features or usability of the site.

## Future fixes

These are minor issues that does not impact the core functionality of the website but are areas for improvement in the future to enhance the user experience and visual design:

1. When selecting a game in the 'New Post' page, the release year is displayed as XXXX-XX-XXX instead of just YYYY.
2. When adding a new game through the 'New Game' modal, no error message is displayed when leaving the 'game developer' field blank, but does not allow the form to send without filling in that field.
3. After adding a new game to the game list in the 'New Post' page, the newly added game does not automatically populate the post as its selected game.
4. After adding a new game to the game list in the 'New Post' page, the newly added game details does not automatically clear from the 'New Game' modal.
5. Fix the graphic issue where the game fields moves out of position when the alert message is shown after a player saves a game from a post. 
6. The profile avatar and username are slightly misaligned in the mobile view.
7. Character number limitations to comments and profile biography.
8. Alphabetical ordering to newly added genres & platforms
9. Clear the search field in dropdowns when a user clicks outside of the dropdown.

## Fixed Bugs

The documentation I have used to fix some of the bugs is listed in the References and Resources section in the README.

---

**When selecting a game in the "New post" page, the game information and image of the selected game wasn't loading into the fields and was causing the site to crash. The error I received in the console indicated that an object is being passed as a React child, which I learned is not allowed. The error happened because the code was trying to show something that wasn't text.**

**Solution**: Include empty fields as default values, so that if data is missing, the code won't try to display objects where only text should be shown, preventing a crash.

---

**When creating a new post, the selected game id wasn't being saved correctly to the backend.**

**Solution**: Include the game_id field as an IntegerField without the write_only=True attribute in the PostSerializer.

---

**The dropdowns for selecting a game, genres, and platforms in "Select Game" and "Add Game" weren't allowing me to scroll through the list of options. The custom CSS I tried adding to fix the issue didn't work either.**

**Solution**: I switched from using the basic dropdowns to using DropdownButton from Bootstrap's react-bootstrap library, allowing me to add a scrollable area inside the dropdown.

---

**When trying to create a new game through the AddGame modal, the API was returning a 400 Bad Request error. The error message indicated that the platform_id and genre_id fields were required, although I had already provided these fields.**

**Solution**: After a long night of debugging and troubleshooting, I found that the issue ran deeper than just from the frontend. First, the frontend was incorrectly sending the entire genre and platform objects instead of just their IDs. I fixed this by updating the AddGameModal component to correctly handle the genres and platforms by setting only the IDs.

Even after updating the genre and platform IDs, the 400 error remained. I had a look in the backend code and discovered that the two Game serializers I had in the backend for handling game data were conflicting: I had one for creating new games and another for listing them, and I realised that the NewGameSerializer wasn’t being utilised properly. I decided to combine them into a single serializer, so that all the data was in one serializer, so that it could handle both creation and listing while still allowing the platform_id and genre_id fields to be passed as primary keys during creation. I also added PrimaryKeyRelatedField for both platform_id and genre_id to make sure that the serializer could correctly process these fields.

Additionally, I removed the slug field from the serializer. The slug was being automatically generated based on the game title and platform, but it wasn’t necessary for the creation process, and its presence was complicating the data flow. By removing the slug, I simplified the serializer and avoided potential conflicts during game creation.

---

**The list of games in the "Select Game" dropdown wasn't refreshing after a new game was added via the AddGame modal.**

**Solution**:  The issue came from the way the AllGamesContext provider was initially set up. While it did allow the consumer to access the games state, it didn't provide a way to update the state. To fix this, I refactored the AllGamesContext to wrap the entire app, making sure that the games state is globally accessible. I also added a SetAllGamesContext to provide the setter function for updating the games list. I also updated the AddGame.js component to use this setter, so that the games list is refreshed immediately after a new game is added.