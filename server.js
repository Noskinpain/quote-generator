import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate', async (req, res) => {
  const { tone } = req.body;

  if (!tone) {
    return res.status(400).json({ error: 'Tone is required.' });
  }

  try {
    const prompt = `Give me a short ${tone.toLowerCase()} quote with the author's name.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const content = response.choices[0].message.content;
    const [quote, author] = content.split('—').map(str => str.trim());

    res.json({ quote, author: author || 'Unknown' });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Failed to generate quote.', details: error.message });
  }
  
});
app.get('/', (req, res) => {
  res.send('Welcome to the Quote Generator API!');
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
