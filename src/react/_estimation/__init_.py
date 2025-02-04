import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate("path/to/serviceAccountKey.json")  # Replace with your file path
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()

def copy_collection(source_collection, destination_collection):
    """
    Copies all documents from source_collection to destination_collection in Firestore.
    """
    source_ref = db.collection(source_collection)
    docs = source_ref.stream()

    for doc in docs:
        data = doc.to_dict()  # Convert document to dictionary
        db.collection(destination_collection).document(doc.id).set(data)
        print(f"Copied document {doc.id} from {source_collection} to {destination_collection}")

# Example usage:
copy_collection("source_collection_name", "destination_collection_name")  # Replace with actual collection names