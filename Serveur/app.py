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

@app.route("/ajouterliens",methods = ['POST'])
def ajouterliens():
    lienOriginal = request.form.to_dict()['url']
    Lien.insert(lienOriginal)
    return "Ok"

@app.route("/get/<string:guid>")
def get(guid):
   return Lien.getByGuid(guid)


@app.route("/testus")
def testus():
    return  request.args