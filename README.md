# Custom Resolume

Currently in-progress & nearing completion.

**ToDos: 
1. Add a few stock effects for manipulating clips
2. Fix WebSocket timeout problems
3. Organization -- Break up components into smaller pieces for single-responsibility
4. Add instructions for downloading and starting this program together with Resolume

## Summary

Many times, I have noticed that music venues will not provide VJs for opening/local artists.  Many local artists nowadays have visual elements to their performances, and without a VJ, these artists lack a means to show their content on the blank video wall behind them.

This project aims to simplify and streamline usage of a few main features of Resolume into a small mobile app so that DJs can manipulate live visuals without dedicating too much attention away from their main task of playing music.

## Requirements

* Resolume 7.8 or later
* Computer running Resolume and connected to display (video wall, tv screen, etc.)
* Phone/tablet and Resolume computer connected to the same network

## Installation Instructions

1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm start` to start the app.

## Screenshots

### Computer view
![Computer view 1](/screenshots/computer-view-1.png "Resolume computer view")

### Adding clips
![Adding clips](/screenshots/computer-view-2.png "Adding clips")

### Mobile view
![Mobile view](https://media.giphy.com/media/wbNnihaZsPI6sPn0d6/giphy.gif)

## Technology

This project is a mobile-focused app developed using React, Node, & Bootstrap.