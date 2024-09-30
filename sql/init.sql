drop table if exists Renter;
drop table if exists Property;
drop table if exists Renting;

create table Renter(
    username VARCHAR(100) PRIMARY Key,
    password VARCHAR(100)
);

create table Property(
    address VARCHAR(100) PRIMARY Key,
    username VARCHAR(100),
    rent NUMERIC(10,2),
    picture VARCHAR(100),
    description text,
    FOREIGN KEY (username) REFERENCES Renter (username)
);

create table Renting(
    username VARCHAR(100),
    address VARCHAR(100),
    PRIMARY Key(username,address),
    FOREIGN KEY (username) REFERENCES Renter (username),
    FOREIGN KEY (address) REFERENCES Property (address)
);

INSERT INTO Renter (username,password) VALUES
('john_doe','john_doe'),
('jane_smith','jane_smith'),
('mike_jones','mike_jones');

INSERT INTO Property (address, username, rent, picture, description) VALUES 
('123 Elm St', 'john_doe', 1200.00, 'elm_street_house.jpg', 'A cozy 2-bedroom house with a garden.'),
('456 Maple Ave', 'jane_smith', 950.00, 'maple_ave_apartment.jpg', 'A modern 1-bedroom apartment in the city center.'),
('789 Oak Rd', 'mike_jones', 1500.00, 'oak_road_villa.jpg', 'A spacious 3-bedroom villa with a swimming pool.');

INSERT INTO Renter (username,password) VALUES
('kevin','kevin');