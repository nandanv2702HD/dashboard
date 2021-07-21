# AOS Dashboard Application

Goal: create a web-app for inventory tracking / management with future expansion capabilites

## Objectives:
- [ ] Create an API to handle CRUD with SQL DB:
    - [ ] Seed data to SQL DB; tables structure:
        - [ ] "master" table for AOS commodity data - all commodities lie in one big table
        - [ ] materials setup table - contains no. of racks allowed lineside, BOM, delivery / pickup point, and CPQ
        - [ ] AOS scans table - HU#, timestamp of scan, operator info, rack #
        - [ ] PLC table - pulls information from PLC via Python / other operable way; all data interaction to DB can occur via API
            > need to plan API endpoints for PLC logic
- [ ] Test API functionality / loading based on new data pushed + updating existing data
- [ ] Modify C# app to push data to SQL DB
- [ ] Create / refactor functions for calculations (current bike / rack status, etc.)
- [ ] Add basic front-end to confirm that it works
- [ ] Create use cases / layout of the front end and develop using React / ejs for dynamic rendering