# Task Dashboard (Assignment 4)

A simple task management dashboard built with vanilla JavaScript.

## File Organization

- `index.html`: Defines the base DOM structure including buttons, status message, and task container.
- `styles.css`: Contains layout styles and visual indicators for completed tasks.
- `taskManager.js`: Contains `Task` and `TaskManager` classes. Handles immutable operations and defines read-only task IDs.
- `api.js`: Simulates an asynchronous backend API using `Promise` and `setTimeout`.
- `main.js`: Handles DOM events, JSON parsing, asynchronous fetching, and UI rendering.

## Challenges Faced

- **Maintaining Immutability**: Ensuring array operations did not mutate the state. Used `map`, `filter`, and spread syntax instead of mutating methods.
- **Read-only Task ID**: Properly setting up `Object.defineProperty` inside the `Task` constructor to make `id` immutable.
- **JSON Transformation**: Parsing the stringified raw data before converting objects into `Task` instances without losing methods.