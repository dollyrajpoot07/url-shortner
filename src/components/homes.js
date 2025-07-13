'use client';
import { useState } from 'react';
import styles from './homes.module.css';

export default function Homes() {
  const [input, setInput] = useState('');
  const [short, setShort] = useState('');

  const handleShorten = async () => {
    const res = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: input }),
    });
    const data = await res.json();
    setShort(`http://${data.short}`);
  };

  return (
    <div className={styles.container}>
      <h2>🔗 Custom URL Shortener</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter long URL..." />
      <button onClick={handleShorten}>Shorten</button>
      {short && (
        <p>
          Short URL: <a href={short} target="_blank">{short}</a>
        </p>
      )}
    </div>
  );
}
