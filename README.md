# README: Project-3
# Exploring the Heat Hypothesis: Temperature and Crime Rates in Manhattan (2013-2023)


## Project Overview

This project investigates the *Heat Hypothesis*, also known as the *Temperature-Aggression Hypothesis*, which posits that higher temperatures correlate with an increase in violent crime rates. Using data from New York City spanning the years 2013 to 2023, we analyze crime and temperature data to assess whether this hypothesis holds merit.

The analysis was conducted using **Jupyter Notebook** for data extraction, transformation, visualization, and statistical evaluation.

Our visualizations are both presented in the form of graphs/charts as well as a heat map of Manhattan for an interactive breakdown of the data.

---

## Ethical Considerations

In conducting this analysis, we ensured that only the relevant data required to answer the specific research questions was utilized.

To avoid potential personal biases, we intentionally excluded and dropped columns of data present in the API datasets that were not relevant to the project's scope. This careful selection of data helps maintain focus on the analysis while adhering to ethical research practices.

---


## Project Structure

### Files

1. **`analysis.ipynb`**:

   - Main notebook for data analysis and visualization.
   - Integrates processed temperature and crime data.
   - Generates scatter plots and statistical results to test the Heat Hypothesis.

2. **`data_extraction_manhattan_temperatures.ipynb`**:

   - Processes and extracts temperature data for NYC locations.
   - Transforms weather JSON into structured formats for analysis.

3. **`data_extraction_nyc_crime.ipynb`**:

   - Processes and extracts NYC crime data.
   - Maps geospatial and time-series crime details.

4. **`crime and weather.sql`**:

   - SQL queries for merging crime and weather data.
   - Defines structured datasets for analysis.

5. **`Output/data.json`**:

   - Raw JSON dataset containing NYC crime data.

6. **`Output/weather.json`**:

   - Raw JSON dataset containing NYC weather data.

7. **`Output/Manhattan_Temperatures_2013-2023.csv`**:

   - Processed temperature dataset for Manhattan, including daily high, low, and mean temperatures.

8. **`Output/NYPD_Complaints_01-01-13_12-31-23_v2.csv`**:

   - Processed dataset of NYPD complaints with geolocation and offense details.

9. **`leaflet_map/static/index.html`**:

   - HTML file for rendering the heat map visualization of crime and temperature data.
   - Links to necessary JavaScript and CSS files for the map.

10. **`leaflet_map/static/css/style.css`**:

    - CSS file defining styles for the heat map, including legend and map element formatting.

11. **`leaflet_map/static/js/data.js`**:

    - JavaScript file containing the crime and temperature datasets for visualization.

12. **`leaflet_map/static/js/logic.js`**:

    - JavaScript file implementing map layers, marker clustering, and interactive elements for the heat map visualization.

---

## Key Functions

### Data Processing

- **Crime Data Transformation**:

  - Filters and aggregates NYC crime data.
  - Categorizes crimes by severity and type.
  - Maps complaints to geographic locations (e.g., Manhattan, Bronx).

- **Weather Data Transformation**:

  - Converts temperature data from JSON to tabular formats.
  - Handles location-specific data (e.g., Central Park, Midtown).

### Data Integration

- **SQL Merging**:
  - Combines processed crime and weather datasets based on date and location.
  - Ensures temporal alignment for cross-analysis.

### Analysis and Visualization

- **Correlation Testing**:
  - Assesses statistical correlation between daily temperature peaks and violent crime counts.
  - Tests hypotheses using linear regression and visualization techniques.
- **Visualization**:
  - Interactive heat map of crime rates over Manhattan, NYC.
  - Temporal trends of temperature and crime.

### Scope

This project is focused on **New York City**, specifically the borough of **Manhattan**, and examines:

- The correlation of temperature and crime rates.
- Compare findings to existing findings on the Heat Hypothesis.

---

## Technologies Used

- **Python**: Data processing and visualization (Pandas, Matplotlib, Seaborn).
- **SQL**: Data integration and preprocessing.
- **Jupyter Notebook**: Interactive analysis.
- **JSON & CSV**: Data storage and representation.
- **Leaflet.js**: Interactive mapping and heat map generation.
- **D3.js**: Data-driven visualizations for markers and legends.

---

## How to Use

1. Open the Jupyter notebooks `data_extraction_manhattan_temperatures.ipynb` and `data_extraction_nyc_crime.ipynb` in a Python environment with the required dependencies. Run these notebooks to process and prepare the temperature and crime datasets.
2. Run the SQL queries in `crime and weather.sql` to merge the processed datasets, ensuring alignment by date and location.
3. Open `analysis.ipynb` and execute the cells to analyze the merged data, generate visualizations.
4. [Click here to View the Leaflet Map!](https://87gru.github.io/Project-3/leaflet_map/index.html)
     
Select a date from the Leaflet Map in the collapsed layer selection menu to display crime incidents across Manhattan as well as a temperature readings and a brief summary.     

---

## Results

Findings of this analysis are available in the `analysis.ipynb` notebook and the heat map visualization, showcasing whether temperature fluctuations significantly impact crime rates in New York City.

As this project is limited in both the scope of our data and the questions we wish to answer, we were not expecting a definitive answer on the Heat Hypothesis. We do feel that, while our data does not show enough statistical significance to prove a correlation there are many confounding variables so further study with a more limited timeframe and controlled setting might yeild more specific results.

---

## References

- Open-Meteo API: [https://openweathermap.org/api](https://openweathermap.org/api)
- NYC Open Data - NYPD Complaint Data Historic: [https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data_preview](https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data_preview)
- Craig A. Anderson. "Temperature and Aggression: Ubiquitous Effects of Heat on Occurrence of Human Violence." *Psychological Bulletin*, 1989. [DOI: 10.1037//0033-2909.106.1.74](https://www.researchgate.net/publication/20489242_Temperature_and_Aggression_Ubiquitous_Effects_of_Heat_on_Occurrence_of_Human_Violence)
- Anderson, Craig A., et al. "Temperature and Aggression." *Advances in Experimental Social Psychology*, Vol. 32, 2000. [DOI: 10.1016/S0065-2601(00)80004-0](https://www.sciencedirect.com/science/article/abs/pii/S0065260100800040)
