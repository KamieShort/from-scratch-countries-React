# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Acceptance Criteria

Must use the Supabase client to get the list of countries
Must use the `useEffect` hook to call the service layer to get the list of countries
Users should see a list of all the countries of the world with their flag
Users should be able to filter by continent

Rubric
X Main branch deployed to Netlify 1
X Open PR from `dev` branch with Netlify deploy preview 1
`fetchCountries` function in services folder gets list of countries from Supabase 4
useEffect correctly loads the list of countries when the `Main` component renders 4
useEffect uses a try / catch block to display an error if the API call fails 4
Users see a loading state when the data is loading 2
Users can filter by continent 4
