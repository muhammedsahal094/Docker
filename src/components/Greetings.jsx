name: CI/CD for Greeting React app

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Skip Test for CI/CD demo
        run: echo "Skipping tests for this class demo"

      - name: Build React App
        run: CI=false npm run build

      - name: Deploy
        # add your deploy 'run:' or 'uses:' here
