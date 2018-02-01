# Book Browser

----
## To Start

Begin by cloning the project, and add a file named `firebase.txt` to the root directory. Paste the Firebase database key (provided in the submission email) here.

To start the project, run the following terminal commands:
  
```
npm install
npm start
```

You can now visit `http://localhost:8080/` to explore the app.

To run tests, use the command `npm test`

----
## Boilerplate
I decided to use React to build my components, Redux to manage state, and Firebase to store the book data, which in hindsight may have been overkill. Having no experience with calling Firebase from a React, I used this [tutorial](https://www.codementor.io/vijayst/using-firebase-with-redux-for-building-a-react-app-du1086puw) to get started. While it was great to go through this setup by scratch, I realized later that the state is not particularly complex, and I could have made an equally functional app without including Redux.

I added React Router to handle navigation. It made short work of incorporating routing logic to manage my views, but again I found myself questioning my decision to employ Redux. Since the state ended up being mostly controlled by routes, Redux proved to be a lot of extra setup for minimal gain. 

----
## Styling
My strategy with CSS was to let Bootstrap do the heavy lifting, with a few resets and custom styles to add my own flair. I achieved a sort of rudimentary name-spacing by wrapping my component css in class names matching the component. I find this helps prevent conflicts in larger apps, and adds a little extra specificity in case I'm trying to override Bootstrap's rules.

----
## Testing
I chose Enzyme to test my React components with Jest as a test runner. This was my first time using Jest, and I would like to spend more time exploring it, particularly the snapshot functionality, but I did not have time to explore that here.

----
## Lessons and Observations
The biggest lesson learned was that starting an app from scratch is unnecessary and unwise. I learned quite a bit from struggling through my own webpack configuration and adding a test suite, so I can't say I would have done it differently, but knowing what I know now I will certainly start my next React app differently. Adding my dependencies by hand meant I was bound to forget something (like linting!), which would have been immediately available had I started with Facebook's Create React App.

This app is obviously not ready for the production, I would have loved to include form validation, database authentication, and some slick animations.


