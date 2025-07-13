import { nanoid } from 'nanoid';

const db = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url || !url.startsWith('http')) {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    const id = nanoid(6);
    db[id] = url;

    return res.status(200).json({ short: `${req.headers.host}/${id}` });
  }

  res.status(405).end();
}

export { db };