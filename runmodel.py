import sys
import joblib
import numpy as np

model = joblib.load('model.pkl')

def main():
    # Read string input from stdin
    input_string = sys.argv[1]
    
    try:
        # Predict (assumes binary classification)
        prediction = model.predict([input_string])

        # Output `true` or `false`
        print("true" if prediction else "false")

    except Exception as e:
        print("false", file=sys.stderr)
        sys.exit(1)

main()