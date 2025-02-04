from flask import Flask, request, jsonify
from bot import predict_estimation

app = Flask(__name__)
from flask_cors import CORS
CORS(app)  # This enables CORS for all routes

@app.route('/upload', methods=['POST'])
def get_estimation():
    # Check if an image file was uploaded
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    # Read the uploaded file
    file = request.files['image']
    try:

        # Get estimation values using get_estimation (pass the image directly)
        estimation = predict_estimation(file)
        print(estimation)

        # Return the estimation values as JSON
        return jsonify(estimation), 200
    

    except Exception as e:
        # Log the full error message
        print(f"Error processing image: {e}")
        return jsonify({'error': 'Something went wrong while processing the image'}), 500

if __name__ == '__main__':
    app.run(debug=True)