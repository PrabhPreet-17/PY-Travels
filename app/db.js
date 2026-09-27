import { Database } from '@db/sqlite';

export const db = new Database('application.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        label TEXT NOT NULL,
        rating REAL,
        image TEXT
    );
`);

db.exec(`
  INSERT INTO items (title, label, rating, image) VALUES
  ('Tradition and Futurism', 'New York City, USA', 4.7, '/assets/destination-1.jpg'),
  ('The City of Lights', 'Paris, France', 4.5, '/assets/destination-2.jpg'),
  ('Island of the Gods', 'Bali, Indonesia', 4.8, '/assets/destination-3.jpg');
`);