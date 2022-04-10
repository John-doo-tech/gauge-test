# GAUGE TEST
* node version: >= v16.0.0
* gauge document: [GAUGE](https://docs.gauge.org/)
* taiko document: [TAIKO](https://docs.taiko.dev/)

## Run tests
- STEP 1: install all dependencies
    - `npm i`

- STEP 2: run test
    - `npm run test:prod`

## Framework structure
- "pricing.feature" file is define in "spec" folder
- test function that is mapped to "pricing.feature" is defined in "test" folder
- test report will be generated in "reports" folder with html format after test execution is complete
- test environment is define in "env" folder
- gauge log file will be generated in "logs" folder