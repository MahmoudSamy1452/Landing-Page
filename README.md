# Landing Page Project

## Table of Contents

* [Project Description](#Project_Description)
* [Installation](#Installation)
* [Notes](#Notes)
* [Usage](#Usage)
* [References](#References)
* [Credits](#Credits)

## Project Description

Given starting html and css files, the objective of this project is to turn the landing page to an animated, interactive and user-friendly  webpage. This is achieved by creating and attaching a javascript file to add dynamic features to this webpage. 

Features added:

* Building of navigation menu according to the number of sections on webpage.
* Detecting and styling currently viewed section.
* Smooth scrolling to a specific section upon clicking of corresponding link in the navigation menu.
* Automatic hiding of navigation menu after 3 sec of inactivity.
* Highlighting link of the active section in the navigation menu.

All features added are compatible with all platforms running an up-to-date browser.  
Some changes were made in html and css files for a better and effective design.

## Installation

You can clone the repository directly to your device to view the webpage or you can download the code from Github's Code button

## Notes

* The choice of not including an anchor tag inside each list item in the navigation menu was preferred because it needs to be overridden by
 ```e.preventDefault();``` for the smooth transition between sections to take effect which is redundant.
* Any function that was not found to be reusable was defined as a named anonymous function directly in its place of use.
* Extra css rules were added to animate the motion of the navigation menu and the selection of a particular link. Enhancements to compatibility with small-screen devices by controlling the overflow of navigation menu items were implemented.

## Usage

This webpage can be used as a template for a landing page. (disclaimer: do not use without consulting Udacity)

## References

This sections includes all sources used as documentation to check the use of methods and properties used in the development of this project:

* [W3School](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [Udacity](https://www.udacity.com/)

## Credits

This project was developed by *[Mahmoud Samy](https://github.com/MahmoudSamy1452)* as one of the projects required to pass Front End Web Development Professional Nanodegree Program provided by Udacity
