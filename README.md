# Reddit Museum

[View Live WebApp](https://redditmuseum.netlify.app/)

## Please note

This project is currently in development mode and is being updated daily 

## Overview

A digital art gallery that displays art collected from the various artistic enclaves that exist in the world of Subreddits, and Redditors. This project was inspired by the need for more opportunities to explore the creative content of the internet without the advertisements, data collection, and distractions that are usually present on prominent social media platforms. Artists are credited and their profiles are linked along with links to the original Reddit post. The content/art can be curated/filtered by the user based on (pre-defined) art genre categories or (custom) search terms. There is no need to log in and the user is not required to have a Reddit account.

## To Do List

- make download button downloadUrl work for galleries
- make sure download button changes when art genre/gallery changes
- make download button functional
- create video banner like MET website
- create touch effect for gallery on mobile
- figure out how to make a 3D art/photo frame with pure css
- add box shadow/blur to post images
- create loading effect when genre change occurs (or on original loading)
- move useEffect on fetch request from PostContainer.js to Main.js
- organize and clean up Redux
- rename menu selector to "Museum Map" (also add cute map style and name banner)
- add searchBar
- make gal button icon lighter (less bold)
- create an array of search keywords out of every individual title word

## Must-Fix/Bugs

- detect embedded videos inside galleries
- sound in videos

## Features

- add load more button
- filter through art by genre
- filter through art using the search bar
- create a shuffled section which combines a random mix of art from all the galleries
- figure out how to load photos 4 times a day to a server and host from there

### User Guide

- current version skips/blocks posts with externally hosted media (embedded youtube videos etc.)
- current version skips/blocks pure text posts (with no img/video media)

## Potential Extra Features

- merge and multiple subreddits of similar genres in same "genre page"
- change image resolution from default
- download img button
- optimize hidden gallery images to only load after the rest of the visible page has completed loading

## Details and Specs

### Concepts Applied

- Making HTTP fetch requests to an external web API (the Reddit API)
- Working with JSON data
- Loading an initial/default view of data
- Function Components and React Hooks
- State Management using the redux store
- Asynchronous Actions using Redux Thunks and Middleware
- Responsive Layouts (Users can use the application on both desktop/mobile)
- Using CSS Grid and Flexbox and media queries for layout, positioning, and responsiveness
- Creating smooth and pleasant transitions between CSS properties using CSS animations
- Deploying a website with Netlify

### Languages, Tools, Frameworks, and Libraries

- HTML5
- CSS3
- JavaScript
- React
- Redux & Redux-Toolkit
- Git and GitHub
- Command line
- Chrome DevTools, React DevTools, Redux DevTools
- React-Icons library
- Netlify
