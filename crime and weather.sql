CREATE TABLE Manhattan_Temperatures (
    date DATE NOT NULL,
    location VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT,
    min_temp FLOAT,
    max_temp FLOAT,
    mean_temp FLOAT
);

CREATE TABLE NYPD_Complaints (
    complaint_no VARCHAR(50) PRIMARY KEY,
    reported_dt DATE NOT NULL,
    borough_name VARCHAR(255),
    ofns_desc VARCHAR(255),
    law_cat VARCHAR(50),
    latitude FLOAT,
    longitude FLOAT
);

SELECT * FROM Manhattan_Temperatures LIMIT 5;
SELECT * FROM NYPD_Complaints LIMIT 5;

