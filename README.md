# Next To Go App

This single page application displays 5 "next to go" races at a time, each race will disapear after one minute. Meeting name, race number and time left are displayed.

### Installation

- Clone project
- Run ```npm i``` to install dependencies
- Run ```npm run dev```

### How To use

All you have to do is to select a category that you would like to display. The first category will be displayed by default. 

### Architectural decisions

#### State Management

I have decided not to use Redux or even Context API, as the application size is small, keeping the state close to the component that uses it improves performance in this case, using a state management soltion like Redux is not justified. 

#### Style

While keeping the style inside the code in the component might be beneficial in many cases, I wanted to exploit the advantagaes that SASS offers, so I used external SASS files and import them in the component.

### Dependencies

I haven't add any additional dependencies to the app, apart from SASS. 

### Testing

For testing, I have used Jest. To run the tests, run 

```
npm run test
```

