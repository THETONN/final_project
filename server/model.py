# import sys
# import joblib
# import json
# import numpy as np

# # โหลดโมเดล
# model = joblib.load('./model/kmeans_model.joblib')

# # อ่านข้อมูลจาก stdin
# input_data = json.loads(sys.stdin.read())

# # ทำนาย
# prediction = model.predict([input_data])

# # ส่งผลลัพธ์ออกไปทาง stdout
# print(json.dumps({'prediction': prediction.tolist()}))

from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the model (update the path to the location where your model file is stored)
# model = joblib.load('/usr/src/app/model/kmeans_model.joblib')
model = joblib.load('kmeans_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['answers']
    predictions = model.predict([data])
    return jsonify({'group': int(predictions[0])})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')


