# Disease Prediction

Welcome to the Disease Prediction repository! This project aims to leverage machine learning techniques to predict the likelihood of various diseases based on user input data. The goal is to provide an accessible tool for early diagnosis and preventive healthcare.

# Table of Contents

*Introduction

*Features

*Technologies Used

*Installation

*Usage

*Dataset

*Model Training

*Contributing

*License

*Contact

# Introduction

The Disease Prediction project utilizes a machine learning model trained on medical data to predict the probability of a user having certain diseases. This can be particularly useful in areas with limited access to healthcare professionals, enabling users to get an early indication of potential health issues.

# Features

User-friendly interface for inputting health data
Predicts the likelihood of multiple diseases
Provides a detailed report of the prediction results
Scalable and easy to deploy

# Technologies Used

* **JavaScript**: Main programming language
* **React.js**: Frontend library
* **Node.js**: Backend runtime environment
* **Express.js**: Web framework for the backend
* **MongoDB**: Database for storing user data
* **TensorFlow.js**: Machine learning library for training and inference

# Installation

**To get a local copy up and running, follow these steps**:

**Clone the repository**:

bash
git clone https://github.com/Ayu-hack/Disease-Prediction.git
cd Disease-Prediction

**Install the required packages for both the backend and frontend**:

bash
cd backend
npm install
cd ../frontend
npm install

**Set up environment variables**:

Create a .env file in the backend directory and add the following:
env
MONGODB_URI=your_mongodb_connection_string
PORT=5000

**Start the backend server:**

bash
cd backend
npm start

**Start the frontend server**:

bash
cd frontend
npm start

# Usage

Open your web browser and go to http://localhost:3000.
Enter the required health data into the form.
Submit the form to get the prediction results.
Review the detailed report provided by the application.

# Dataset

The dataset used for training the model is not included in the repository due to size and privacy constraints. However, you can use publicly available medical datasets or your own data to train the model. Ensure the data is preprocessed and cleaned before training.

# Model Training

* **To train the model**:
Ensure your dataset is in CSV format and located in the backend/data/ directory.
Modify the trainModel.js script to load your dataset.

* **Run the training script**:
bash
cd backend
node trainModel.js
The trained model will be saved to the backend/models/ directory.

# Contributing

**Contributions are welcome! Please follow these steps to contribute**:

* Fork the repository.
* Create a new branch (git checkout -b feature/YourFeature).
* Commit your changes (git commit -m 'Add some feature').
* Push to the branch (git push origin feature/YourFeature).
* Open a pull request.

# Contact

**For questions or suggestions, please contact:**

Name: Ayu-hack
Email: ayushtiwari2100@gmail.com

**Thank you for visiting our repository! We hope our project aids in advancing healthcare accessibility and early disease detection.**
