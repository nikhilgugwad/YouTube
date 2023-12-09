# Youtube Clone Project

## Introduction

The Youtube Clone project, implemented during the Namaste React course taught by Akshay Saini, serves as a demonstration on how to tackle machine coding rounds during interviews. This proposal outlines additional features, technology stack updates, challenges, and justifications.

## Additional Features

1. **Hamburger Menu**

   - [Provide details about the Hamburger Menu feature]

2. **Search Box**

   - Utilizes a live API from YouTube for real-time search results.
   - Implements debouncing to optimize search requests.
   - Includes caching mechanisms for improved performance.

3. **Video Cards**

   - [Provide details about the Video Cards feature]

4. **Comments Section**

   - Implements a comments section with hard-coded comments due to YouTube API limitations on nested comments.
   - Utilizes the concept of recursion to display nested comments.

5. **Live Chat**
   - Implements a real-time live chat feature.
   - Challenges addressed in the "Challenges" section below.

## Challenges

### Data Layer

- **Getting Live Data**
  - Explore options for handling live or near real-time data.
  - Consider using:
    - Web Sockets for applications like trading platforms (e.g., Zerodha, Binance, WhatsApp).
    - API Polling for applications like Gmail, Cricbuzz.

### UI Layer

- **Updating the UI**
  - Address challenges related to displaying live or near real-time data in the user interface.
  - Discuss potential solutions such as efficient rendering mechanisms.

## Technology Stack Updates

### Frontend

- **React.js**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing the application's state.
- **React-router-dom**: A standard library for routing in React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Testing

- **Jest**: A JavaScript testing framework for unit and integration testing.

### Bundler

[Specify your bundler (e.g., Webpack) here]

## Chat Feature Implementation

- Utilizes **Redux store** for managing live chat data.
  - Creates a `chatSlice.js` to handle chat-related state and logic.
  - Adds `chatSlice` to the Redux store (e.g., `store.js`).
  - Enables the sending of custom messages within the live chat.

## Planning

### Project Overview

![Project Overview](src/images/planning.png)

## Estimated Time

I anticipate spending approximately 5 minutes discussing the outlined features, technology stack updates, challenges, and justifications with the interviewer.
