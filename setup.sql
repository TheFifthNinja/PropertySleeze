-- Drop tables if they exist
DROP TABLE IF EXISTS Renter;
DROP TABLE IF EXISTS PropertyManager;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS Renting;

-- Create tables
CREATE TABLE Renter(
    username VARCHAR(100) PRIMARY KEY
);

CREATE TABLE PropertyManager(
    username VARCHAR(100) PRIMARY KEY
);

CREATE TABLE Property(
    address VARCHAR(100) PRIMARY KEY,
    username VARCHAR(100),
    picture BLOB,
    description TEXT,
    FOREIGN KEY (username) REFERENCES PropertyManager(username)
);

CREATE TABLE Renting(
    username VARCHAR(100),
    address VARCHAR(100),
    PRIMARY KEY(username, address),
    FOREIGN KEY (username) REFERENCES Renter(username),
    FOREIGN KEY (address) REFERENCES Property(address)
);