from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

@app.route('/')
def index():
    """Renders the main HTML page."""
    return render_template('index.html')

if __name__ == '__main__':
    # Run the app in debug mode for development
    app.run(debug=True)

