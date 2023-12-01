from flask import Flask, request, jsonify
import numpy as np
from sklearn.decomposition import PCA
import joblib

app = Flask(__name__)

# Load the K-means model
kmeans_model = joblib.load('kmeans_model.joblib')


mean = np.array([0.514625, 1.135142, 1.552537, 0.516647, 1.015472, 0.763831, 0.868298, 0.600797, 
                1.108106, 1.088603, 1.192320, 1.092060, 0.760109, 0.476510, 0.992861, 1.139260, 
                0.998679, 0.717185])  #  mean values for each feature

std_dev = np.array([1.715370, 1.637571, 6.848197, 0.812144, 0.812144, 1.667932, 2.028463, 1.673624, 
                    4.239089, 1.216319, 2.185958, 3.166983, 1.605313, 1.747628, 4.548387, 3.544592, 
                    4.453510, 1.330171])  #  standard deviation values for each feature

@app.route('/predict', methods=['POST'])
def predict():
    # Extract data from POST request
    raw_data = request.json['data']  # This should be the 18-character encoded data
    
    # Convert list to numpy array and standardize the data
    encoded_data = np.array(raw_data)
    standardized_data = (encoded_data - mean) / std_dev
    
    # Double the value of the first data point
    standardized_data[13] *= 2

    # Fit and apply PCA transformation on the modified data
    pca = PCA(n_components=2)
    pca_transformed_data = pca.fit_transform([standardized_data])
    
    # Use the PCA-transformed data to make a prediction with the K-means model
    prediction = kmeans_model.predict(pca_transformed_data)
    
    # Return the prediction as a JSON response
    return jsonify({'group': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
