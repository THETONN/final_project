import sys
import joblib
import json
import numpy as np

# โหลดโมเดล
model = joblib.load('./model/kmeans_model.joblib')

# อ่านข้อมูลจาก stdin
input_data = json.loads(sys.stdin.read())

# ทำนาย
prediction = model.predict([input_data])

# ส่งผลลัพธ์ออกไปทาง stdout
print(json.dumps({'prediction': prediction.tolist()}))
