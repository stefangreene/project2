CREATE DATABASE wine_collection_db;
USE wine_collection_db;

-- Create the table tasks.
CREATE TABLE Red_Wine
(
id int NOT NULL AUTO_INCREMENT,
Wine_Name varchar(500) NOT NULL,
Variety varchar(255) NOT NULL,
Year int NOT NULL, 
Color varchar(255) NOT NULL,
Sweet_or_Dry varchar(100) NOT NULL, 
Country_of_Origin varchar(255) NOT NULL,
Serving_Instructions varchar (800), 
Percent_Alcohol int NOT NULL, 
Quantity_On_Hand int NOT NULL, 
Price int NOT NULL, 
Bottle_Size int NOT NULL, 
Favorite varchar(100) NOT NULL, 
Notes varchar (800),  

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO Red_Wine (Wine_Name, Variety, Year, Color, Sweet_or_Dry, Country_of_Origin, Serving_Instructions, Percent_Alcohol, Quantity_On_Hand, Price, Bottle_Size, Favorite, Notes) VALUES ("Brothers Big Tattoo Red Colchagua", "Cabernet Sauvignon", 2001, "red", "dry", "Chile", "None", 20, 500, 10,750, "Yes", "None");


-- White Wine

CREATE TABLE White_Wine
(
id int NOT NULL AUTO_INCREMENT,
Wine_Name varchar(500) NOT NULL,
Variety varchar(255) NOT NULL,
Year int NOT NULL, 
Color varchar(255) NOT NULL,
Sweet_or_Dry varchar(100) NOT NULL, 
Country_of_Origin varchar(255) NOT NULL,
Serving_Instructions varchar (800), 
Percent_Alcohol int NOT NULL, 
Quantity_On_Hand int NOT NULL, 
Price int NOT NULL, 
Bottle_Size int NOT NULL, 
Favorite varchar(100) NOT NULL, 
Notes varchar (800),  

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO White_Wine (Wine_Name, Variety, Year, Color, Sweet_or_Dry, Country_of_Origin, Serving_Instructions, Percent_Alcohol, Quantity_On_Hand, Price, Bottle_Size, Favorite, Notes) VALUES ("", "", 2001, "white", "dry", "Chile", "None", 20, 500, 10,750, "Yes", "None");


-- Dessert Wine

CREATE TABLE Dessert_Wine
(
id int NOT NULL AUTO_INCREMENT,
Wine_Name varchar(500) NOT NULL,
Variety varchar(255) NOT NULL,
Year int NOT NULL, 
Color varchar(255) NOT NULL,
Sweet_or_Dry varchar(100) NOT NULL, 
Country_of_Origin varchar(255) NOT NULL,
Serving_Instructions varchar (800), 
Percent_Alcohol int NOT NULL, 
Quantity_On_Hand int NOT NULL, 
Price int NOT NULL, 
Bottle_Size int NOT NULL, 
Favorite varchar(100) NOT NULL, 
Notes varchar (800),  

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO Dessert_Wine (Wine_Name, Variety, Year, Color, Sweet_or_Dry, Country_of_Origin, Serving_Instructions, Percent_Alcohol, Quantity_On_Hand, Price, Bottle_Size, Favorite, Notes) VALUES ("", "", 2001, "white", "dry", "Chile", "None", 20, 500, 10,750, "Yes", "None");


-- Sparkling Wine

CREATE TABLE Sparkling_Wine
(
id int NOT NULL AUTO_INCREMENT,
Wine_Name varchar(500) NOT NULL,
Variety varchar(255) NOT NULL,
Year int NOT NULL, 
Color varchar(255) NOT NULL,
Sweet_or_Dry varchar(100) NOT NULL, 
Country_of_Origin varchar(255) NOT NULL,
Serving_Instructions varchar (800), 
Percent_Alcohol int NOT NULL, 
Quantity_On_Hand int NOT NULL, 
Price int NOT NULL, 
Bottle_Size int NOT NULL, 
Favorite varchar(100) NOT NULL, 
Notes varchar (800),  

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO Sparkling_Wine (Wine_Name, Variety, Year, Color, Sweet_or_Dry, Country_of_Origin, Serving_Instructions, Percent_Alcohol, Quantity_On_Hand, Price, Bottle_Size, Favorite, Notes) VALUES ("", "", 2001, "white", "dry", "Chile", "None", 20, 500, 10,750, "Yes", "None");


-- Rose

CREATE TABLE Rose
(
id int NOT NULL AUTO_INCREMENT,
Wine_Name varchar(500) NOT NULL,
Variety varchar(255) NOT NULL,
Year int NOT NULL, 
Color varchar(255) NOT NULL,
Sweet_or_Dry varchar(100) NOT NULL, 
Country_of_Origin varchar(255) NOT NULL,
Serving_Instructions varchar (800), 
Percent_Alcohol int NOT NULL, 
Quantity_On_Hand int NOT NULL, 
Price int NOT NULL, 
Bottle_Size int NOT NULL, 
Favorite varchar(100) NOT NULL, 
Notes varchar (800),  

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO Rose (Wine_Name, Variety, Year, Color, Sweet_or_Dry, Country_of_Origin, Serving_Instructions, Percent_Alcohol, Quantity_On_Hand, Price, Bottle_Size, Favorite, Notes) VALUES ("", "", 2001, "white", "dry", "Chile", "None", 20, 500, 10,750, "Yes", "None");