from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/example')
def example():
    return '<h1>I made a second page</h1>'

if __name__ == "__main__":
    print("Server is now running...\n")
    app.run(debug=True) #set debug to false before deployment