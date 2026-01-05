// console.log("Server is starting...");
import express from 'express';
import path from 'path';
import { processData} from './services/processData.js';

// create an instance of express
const app = express();
const PORT  = process.env.PORT || 3000;

// serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));

// middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", path.join(process.cwd(), "views"));
if (process.env.NODE_ENV !== "production") {
  app.set("view cache", false);
}

// GET - render the index page
app.get('/', (req, res) => {
  console.log("Rendering index.ejs at", new Date().toISOString());
  res.render('index');
})

app.post("/chat", async (req, res) => {
  const { message, language } = req.body;
  console.log("Received message:", message, "with language:", language);

  let openaiReply;
  try {
      openaiReply = await processData(message, language);
  } catch (openaiErr) {
      console.log("OpenAI failed:", openaiErr);
      openaiReply = "Report generation failed. Please try again.";
  }
    res.json({ reply: openaiReply });
  });

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
