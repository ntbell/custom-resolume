# Custom Resolume

Currently in-progress & nearing completion. See 'Known Issues' before use.

Feel free to reach out to me at <32nick777@gmail.com> or on [LinkedIn](https://www.linkedin.com/in/nick-bell32/)

## Summary

Many times, I have noticed that music venues will not provide VJs for opening/local artists.  Many local artists nowadays have visual elements to their performances, and without a VJ, these artists lack a means to show their content on the video wall behind them.

This project aims to simplify and streamline usage of a few main features of Resolume into a small mobile app so that DJs can manipulate live visuals without dedicating too much attention away from their main task of playing music.
VJs might also benefit from this app, since it provides slimmed-down control of the base features of Resolume.

## Requirements

* Resolume 7.8 or later
* Computer running Resolume and connected to display (video wall, tv screen, etc.)
* Phone/tablet and Resolume computer connected to the same network

## Installation Instructions

On Resolume-running computer:
1. Fork and clone this repository
2. Run `npm install` to install project dependencies
3. Run `npm start` to start the app, close out of popup browser
4. In Resolume, click Arena/Preferences/Webserver
5. Press "Enable Webserver & REST API"
6. Make note of "IP Address" and "Listen Port"

On controlling device:
1. Connect to the same network as computer
2. Navigate to app in your web browser
3. Control Resolume with app!

App should be located on port 3000 at the IP address (ex. http://127.0.0.1:3000)

## Screenshots

### Computer view
![Computer view 1](/screenshots/computer-view-1.png "Resolume computer view")

### Adding clips
![Adding clips](/screenshots/computer-view-2.png "Adding clips")

### Mobile view
![Mobile view](https://media.giphy.com/media/wbNnihaZsPI6sPn0d6/giphy.gif)

## Future Implementation

Add 4 default effects with on/off functionality: strobe clip, mirror/mirror quad, polar kaleido, delay rgb

Add default white strobe @ current bpm clip to all compositions

May want to remove 'Clear clip' button and replace with functionality that allows user to click on selected clip again to deselect it

May add live composition view if supported by API.\

## Known Issues

Transition duration waits to update until in-progress transition is finished

Some actions work for layers besides layer 1, but the app is currently only designed for clips to be dragged into layer 1

Entering the incorrect webserver address/port results in a perpetual loading screen until refresh

## Help!

Check your firewall settings

Make sure that your computer and device are both connected to the same network

## Technology

This project is a mobile-focused app developed using JavaScript, React, Node, Bootstrap, CSS, & HTML.

