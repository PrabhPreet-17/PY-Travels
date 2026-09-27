import { Database } from '@db/sqlite';

const db = new Database('application.db');

// Reset database
db.exec(`
    DROP TABLE IF EXISTS items;
`);

// Create correct table
db.exec(`
    CREATE TABLE items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        label TEXT NOT NULL,
        rating REAL,
        image TEXT
    );
`);

// Insert default destinations
db.exec(`
  INSERT INTO items (title, label, rating, image) VALUES
  ('Tradition and Futurism', 'New York City, USA', 4.7, '/assets/destination-1.jpg'),
  ('The City of Lights', 'Paris, France', 4.5, '/assets/destination-2.jpg'),
  ('Island of the Gods', 'Bali, Indonesia', 4.8, '/assets/destination-3.jpg');
`);

console.log("Items table created with data!");