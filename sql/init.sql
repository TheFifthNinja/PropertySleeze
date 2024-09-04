drop table if exists Renter;
drop table if exists Property;
drop table if exists Renting;

create table Renter(
    username VARCHAR(100) PRIMARY Key
);

create table Property(
    address VARCHAR(100) PRIMARY Key,
    username VARCHAR(100),
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
