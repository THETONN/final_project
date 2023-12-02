from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS module
import numpy as np
import pandas as pd
import joblib

app = Flask(__name__)

# Load the K-means model
kmeans_model = joblib.load('kmeans_model.joblib')
pca_model = joblib.load('pca_model.joblib')
CORS(app)


mean = np.array([0.514625, 1.135142, 1.552537, 0.516647, 1.015472, 0.763831, 0.868298, 0.600797, 
                1.108106, 1.088603, 1.192320, 1.092060, 0.760109, 0.476510, 0.992861, 1.139260, 
                0.998679, 0.717185,1.690702])  #  mean values for each feature

std_dev = np.array([1.715370, 1.637571, 6.848197, 0.812144, 0.812144, 1.667932, 2.028463, 1.673624, 
                    4.239089, 1.216319, 2.185958, 3.166983, 1.605313, 1.747628, 4.548387, 3.544592, 
                    4.453510, 1.330171,0.502057])  #  standard deviation values for each feature
# Assuming these are the correct column names used during model training
# column_names = [
#     'Gender', 'Age', 'Occupation', 'Education level', 'Income (monthly)', 
#     'Household size (including the respondent)', 'Vehicle ownership', 'Status', 
#     'Your residential region', 'The frequency of domestic traveling', 
#     'The average number of travel companions', 'The average travel expenditures per 1 round trip',
#     'The average days for traveling per 1 round trip', 'The preferred season for traveling', 
#     'The preferred types of tourism destinations', 'The preferred region of traveling', 
#     'The preference type of vehicle for traveling', 'The preferred period of traveling', 
#     'Wander'
# ]

column_names = [
    'age', 'education', 'income', 'household', 'after_freq',
    'after_person', 'after_expenditure', 'after_day_travel', 'gender',
    'occupation', 'per_vehicle', 'status', 'per_region',
    'after_season', 'after_type', 'after_region', 'after_vehicle',
    'after_period_time', 'after_want_travel'
]


@app.route('/predict', methods=['POST'])
def predict():
    # Extract data from POST request
    raw_data = request.json['data']  # This should be the 18-character encoded data

    print("Raw data:", raw_data)
     # Convert raw data to DataFrame with the appropriate column names
    df_data = pd.DataFrame([raw_data], columns=column_names)
    
    # Convert list to numpy array and standardize the data
    # encoded_data = np.array(raw_data)

    
    # print("Encoded data:", encoded_data)
    # print("Encoded data[season]:", encoded_data[13])


    standardized_data = (df_data - mean) / std_dev

    # print("Standardized data:", standardized_data)
    # print("Standardized data[season]:", standardized_data[13])

    # Double the value of the first data point
    # standardized_data[13] *= 2
    season_col = 'after_season'
    if season_col in standardized_data.columns:
        standardized_data[season_col] = standardized_data[season_col] * 2
    else:
        print(f"Warning: Column '{season_col}' not found in the data.")

    # print("standardized_data[season*2]:", standardized_data[13])

    print("Standardized data before pca:", standardized_data)


 
    

    # Apply PCA transformation on the standardized data
    pca_transformed_data = pca_model.transform(standardized_data)

    # Assuming pca_transformed_data is a 2D numpy array
    data_pca = pd.DataFrame(pca_transformed_data, columns=[f'principal_feature_{i}' for i in range(pca_transformed_data.shape[1])])

    print(data_pca)


    # pca_feature_names = [f'principal_component_{i}' for i in range(pca_transformed_data.shape[1])]
    # df_pca_data = pd.DataFrame(pca_transformed_data, columns=pca_feature_names)
    
    # Use the PCA-transformed data to make a prediction with the K-means model
    prediction = kmeans_model.predict(data_pca)
    
    # Return the prediction as a JSON response
    return jsonify({'group': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
