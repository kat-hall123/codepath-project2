## Unit Assignment: Flixster

Submitted by: KATHERINE HALL

Estimated time spent: *30* hours spent in total

Deployed Application (**required**): [Flixster Deployed Site](https://flixster-gw3l.onrender.com)

### Application Features

#### REQUIRED FEATURES

- [ ] **Display Movies**
  - [X] Users can view a list of current movies from The Movie Database API in a grid view.
    - [X] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [ ] For each movie displayed, users can see the movie's:
    - [X] Title
    - [X] Poster image
    - [X] Vote average
  - [X] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [ ] **Search Functionality**
  - X ] Users can use a search bar to search for movies by title.
  - [ ] The search bar should include:
    - [X] Text input field
    - [X] Submit/Search button
    - [X] Clear button
  - [ ] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [X] Presses the Enter key
    - [X] Clicks the Submit/Search button
  - [ ] Users can click the Clear button. When clicked:
    - [X] Most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [ ] **Design Features**
  - [ ] Website implements all of the following accessibility features:
    - [x] Semantic HTML
    - [x] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [x] Alt text for images 
  - [ ] Website implements responsive web design.
    - [x] Uses CSS Flexbox or CSS Grid
    - [x] Movie tiles and images shrink/grow in response to window size
  - [ ] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [x] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [x] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [x] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [ ] The pop-up displays additional details about the moving including:
      - [x] Runtime in minutes
      - [x] Backdrop poster
      - [x] Release date
      - [x] Genres
      - [x] An overview
  - [ ] Users can use a drop-down menu to sort movies.
    - [ ] Drop-down allows movies to be sorted by:
      - [x] Title (alphabetic, A-Z)
      - [x] Release date (chronologically, most recent to oldest)
      - [x] Vote average (descending, highest to lowest)
    - [x] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [ ] Website displays:
    - [x] Header section
    - [x] Banner section
    - [x] Search bar
    - [x] Movie grid
    - [x] Footer section
    - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 
  - [ ] **Deployment**
  - [x] Website is deployed via Render.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 

#### STRETCH FEATURES


- [ ] **Embedded Movie Trailers**
  - [x] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [x] When the trailer is clicked, users can play the movie trailer.
- [ ] **Favorite Button**
  - [x] For each movie displayed, users can favorite the movie.
  - [x] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [ ] If the movie is not favorited:
    - [x] Clicking on the visual element should mark the movie as favorited
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [ ] If the movie is already favorited:
    - [x] Clicking on the visual element should mark the movie as *not* favorited.
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [x] **Watched Checkbox**
  - [ ] For each movie displayed, users can mark the movie as watched.
  - [ ] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [ ] If the movie has not been watched:
    - [ ] Clicking on the visual element should mark the movie as watched
    - [ ] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [ ] If the movie is already watched:
    - [ ] Clicking on the visual element should mark the movie as *not* watched.
    - [ ] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [x] **Sidebar**
  - [ ] The website includes a side navigation bar.
  - [ ] The sidebar has three pages:
    - [ ] Home
    - [ ] Favorites
    - [ ] Watched
  - [ ] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [ ] The Favorites page displays all favorited movies in a grid view.
  - [ ] The Watched page displays all watched movies in a grid view.

### Walkthrough Video
<div>
    <a href="https://www.loom.com/share/79802502d43f4f509fddb338c509ea02">
      <p>Videos | Library | Loom - 13 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/79802502d43f4f509fddb338c509ea02">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/79802502d43f4f509fddb338c509ea02-8efab822eb3edc15-full-play.gif">
    </a>
</div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the labs were pretty similar to the necessary functions in Project 2, so I was able to reference back to the lab when I was unsure of a certain step. Specifically, Lab 4 showed me how to implement components, lift state up, and fetch data using API's--all of which I needed to do for the project. However, I had trouble implementing the search feature as there were numerous props and parent/child components, so it was easy to get the logic messed up. Additionally, there were issues of avoiding duplicate keys which I had not encountered with the labs. The solution was to attach the index of the element to the key though. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would definitely try to style the website better because the formatting of the search bar/movie list gets somewhat disoriented when clicking on the favorites or watched list tabs. Additionally, I would try to figure out how to get rid of the Load More button when there are not any movies displayed on the screen. Also, after finishing the project, it's clear that a lot of the components were placed into the MovieList file, so re-organizing the files and components could be beneficial with readability.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Overall, my final result for the project was well and all the functionalities worked as expected. A small thing is that there seems to be duplicate of movies on the first load, which I am not sure is an issue on my end or the API (as other students have a similar issue). Other than that, I enjoyed looking at the styling of my peer's project, so I may try to implement some of there unique features of CSS next time!

### Shout out

Shout out to my tech fellow Jesus Perez for helping me walk through issues and debugging!
