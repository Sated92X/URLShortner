import sys
sys.path.append('../')

from flask import Flask
from flask import request
from flask import jsonify
from Database.lien import Lien
app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, world!"

@app.route("/ajouterliens")
def ajouterliens():
    return "Ok"

@app.route("/get/<int:id>")
def get(id):
   return jsonify(Lien.getById(id))





@app.route("/testus")
def testus():
    return  request.args