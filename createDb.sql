-- Written for Postgresql v14.0 by AyberkEnis for the Senior Frontend Developer Assignment at Dataguess 
-- Create the Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create the Carts table
CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create the Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Define the Cart Items table (assuming a many-to-many relationship between carts and items)
CREATE TABLE cart_items (
    cart_id INT REFERENCES carts(id),
    item_id INT,
    quantity INT,
    PRIMARY KEY (cart_id, item_id)
);

-- Define the Order Items table (assuming a many-to-many relationship between orders and items)
CREATE TABLE order_items (
    order_id INT REFERENCES orders(id),
    item_id INT,
    quantity INT,
    PRIMARY KEY (order_id, item_id)
);
