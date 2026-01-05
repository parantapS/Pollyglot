# Pollyglot

Pollyglot is a web-based translation chat application that uses OpenAI's GPT-4 to translate user-provided text into multiple languages. It features a simple chat interface where users can select a target language and enter text to be translated.

## Features

- Real-time translation using OpenAI's GPT-4 model
- Support for multiple languages:
  - Spanish (🇪🇸)
  - French (🇫🇷)
  - Japanese (🇯🇵)
  - Hindi (🇮🇳)
- Clean, intuitive chat interface
- Responsive design

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Templating**: EJS
- **AI**: OpenAI API (GPT-4)
- **Environment Management**: dotenv

## Prerequisites

- Node.js (version 14 or higher)
- npm
- OpenAI API key

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pollyglot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. Start the server:
   ```bash
   npm run startServer
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Select a target language by clicking on the language buttons

4. Type your text in the input field and press Send

5. The translated text will appear in the chat

## Deployment

This application is deployed using Docker.

## Project Structure

```
pollyglot/
├── server.js              # Main server file
├── package.json           # Project dependencies and scripts
├── views/
│   └── index.ejs          # Main HTML template
├── public/
│   ├── css/
│   │   └── styles.css     # Stylesheet
│   ├── js/
│   │   └── script.js      # Client-side JavaScript
│   └── images/
│       └── avatar.png     # Chat avatar image
└── services/
    └── processData.js     # OpenAI API integration
```

## API Endpoints

- `GET /` - Renders the main chat interface
- `POST /chat` - Processes translation requests
  - Body: `{ "message": "text to translate", "language": "target language" }`
  - Response: `{ "reply": "translated text" }`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Disclaimer

This application uses OpenAI's API. Ensure you have a valid API key and are aware of OpenAI's usage policies and pricing.