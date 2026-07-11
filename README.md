# Random Joke Generator 🃏

A simple React application that fetches random jokes from a public API. This project demonstrates how to handle side effects and asynchronous data fetching in React.

## Key Features
- **Data Fetching:** Uses the `Fetch API` to retrieve data from an external source.
- **Side Effects:** Implements `useEffect` to trigger the API call on component mount.
- **Conditional Rendering:** Manages user experience by displaying a loading state (`Data pending...`) while waiting for the API response.
- **Error Handling:** Gracefully handles failed requests to ensure the UI remains responsive.

## Technologies Used
- React (Hooks: `useState`, `useEffect`)
- JavaScript (ES6+)
- Public Joke API (official-joke-api)

## What I Learned
Through this project, I strengthened my understanding of:
- Managing asynchronous operations within React components.
- The importance of "Loading States" to improve user experience.
- Cleaning up the UI flow using conditional rendering.