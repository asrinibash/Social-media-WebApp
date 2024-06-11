# Social Media Web Application

This is a full-featured social media web application developed using the MERN stack. The frontend is built with React and heavily utilizes MUI components, while the backend is powered by Node.js and Express. The application supports all the features you would expect from a social media platform.

**[Live Demo](http://your-live-app-url.com](https://asrinibash-sociopedia.netlify.app)**

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication and Authorization
- Profile Management
- Posting Text and Media Content
- Liking and Commenting on Posts
- Following and Unfollowing Users
- News Feed
- Responsive Design

## Technologies Used

- **Frontend:** React, MUI (Material-UI)
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other Tools:** Redux

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Backend Setup

1. Clone the repository:

    ```bash
    git clone git@github.com:asrinibash/Social-media-WebApp.git
    cd social-media-webapp
    ```

2. Navigate to the backend directory and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string and other environment variables:

    ```plaintext
    MONGODB_URI='mongodb+srv://asrinibash_001:*******@cluster0.7ablcdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    JWT_SECRET=jwt_secret
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Create a `.env` file in the frontend directory and add your environment variables:

    ```plaintext
    REACT_APP_API_URL=http://localhost:8000
    ```

4. Start the React application:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the application.
- Register a new account or log in with existing credentials.
- Create posts, like and comment on posts, follow other users, and send direct messages.

## Project Structure


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes appropriate tests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

