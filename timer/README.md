# A simple timer
 A simple timer using HTML, CSS &amp; Javascript. The timer can be start countdown based on user defined value.

## Steps to execute this calculator:
- Download the entire code 
- Open up the index.html.

# Link to app
https://competent-kepler-45cc26.netlify.app/

![image](https://user-images.githubusercontent.com/82457788/115068865-41f60c00-9f0c-11eb-919c-0e2c7d2db8a5.png)


# Features
Has two seperate timers that can be adjusted accordingly. 

# Code Snippets

![image](https://user-images.githubusercontent.com/82457788/115066145-8bdcf300-9f08-11eb-9f29-23f7cdebfa36.png)

Main code that controls the whole time is shown above. The idea is to decrement total time in seconds at every second for which setInterval is used i.e. executed at every 1000ms=1s, decrementing the total time in seconds and if the total time gets equal to 0. Then the interval is cleared that means that the timer is stoped. <br>
Same way we can implemet pause and reset functions for the timer by clearing out the interval.

![image](https://user-images.githubusercontent.com/82457788/115067447-5e914480-9f0a-11eb-952d-5d3541309ab3.png)

# STATE Machichine
state machine concept is used to implement the timer. The idea is that each time a user presses the button, the state of the timer changes and based on the current state the timer works accordingly.

# DOM Manipulation 
Concept of DOM manipulation is used. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
