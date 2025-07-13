import { nanoid } from 'nanoid';

global.urlDB = global.urlDB || {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url || !url.startsWith('http')) {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    const id = nanoid(6);
    global.urlDB[id] = url;

    return res.status(200).json({ short: `${req.headers.host}/${id}` });
  }

  res.status(405).end();
}
