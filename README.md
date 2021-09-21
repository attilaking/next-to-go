# Next To Go App

This single page application displays 5 "next to go" races at a time, each race will disapear after one minute. Meeting name, race number and time left are displayed.

### Requirements

#### Functional requirements

- Maximum 5 races should be displayed
- Races should be sorted time ascending
- Race should disappear from the list after 1 min past the start time
- User should see meeting name ( meeting_name ), race number ( race_number ) and countdown timer that indicates the start of the race
- User should be able to toggle race categories to view races belonging to only the selected category.

#### Non-functional requirements

- App should be implemented in React
- App should use API provided

### Installation

- Clone project
- Run ```npm i``` to install dependencies
- Run ```npm run dev```

### How To use

All you have to do is to select a category that you would like to display. All categories will be selected by default. 

### Architectural decisions

#### State Management

I have decided not to use Redux or even Context API, as the application size is small, keeping the state close to the component that uses it improves performance in this case, using a state management solution like Redux is not justified. 

#### Style

While keeping the style inside the code in the components might be beneficial in many cases, in this case I wanted to exploit the advantagaes that SASS offers, so I used external SASS files and import them in the component.

### Dependencies

I haven't added any additional dependencies to the app, apart from SASS. 

### Testing

For testing, run:

```
npm run test
```

