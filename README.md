
Built by https://www.blackbox.ai

---

# AI Daily Outfit Recommender

## Project Overview

The **AI Daily Outfit Recommender** is an AI-based web application designed to help mid-age users dress smartly and confidently by providing personalized daily outfit suggestions. Users can upload images of their clothes, specify their clothing preferences, and receive tailored outfit recommendations each day.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ai-daily-outfit-recommender.git
   cd ai-daily-outfit-recommender
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run the following command in the project directory:

   ```bash
   npm install
   ```

3. **Start the server:**

   To start the application, execute:

   ```bash
   npm start
   ```

   The server will run on [http://localhost:3000](http://localhost:3000).

4. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

- **Upload Your Clothes:** Use the designated section to upload images of your clothing items.
- **Set Preferences:** Fill in your clothing type preferences, color preferences, skin and hair color, height, and style.
- **Receive Outfit Suggestions:** After setting your preferences and uploading clothes, daily outfit suggestions will be generated based on your inputs.

## Features

- User-friendly interface for uploading clothing images.
- Preference selection for clothing styles, colors, and personal characteristics.
- Daily outfit recommendations based on user preferences and uploaded clothes.
- Responsive design for both mobile and desktop views.

## Dependencies

This project uses the following dependencies as listed in the `package.json`:

- **express:** ^4.18.2 - A web framework for Node.js.
- **multer:** ^1.4.5-lts.1 - Middleware for handling multipart/form-data, used for file uploads.
- **cors:** ^2.8.5 - Middleware to enable Cross-Origin Resource Sharing.

## Project Structure

Here's a breakdown of the project structure:

```
ai-daily-outfit-recommender/
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Lock file for exact dependency versions
├── server.js            # Main server file containing API endpoints
└── index.html           # Frontend user interface
```

### `server.js`

Contains the Express server configurations and API endpoints to handle clothing uploads and user preferences.

### `index.html`

This is the frontend interface, where users can upload their clothes and set their preferences.

## License

This project is licensed under the MIT License. 

---

Feel free to contribute to the project or submit issues if you encounter any bugs or have feature requests!