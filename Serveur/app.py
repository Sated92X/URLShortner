import sys
sys.path.append('../')

from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from Database.lien import Lien
app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Hello, world!"

@app.route("/ajouterliens",methods = ['OPTIONS'])
def options():
    return "Request 200"

@app.route("/ajouterliens",methods = ['POST'])
def ajouterliens():
    lienOriginal = request.form.to_dict()['url']
    Lien.insert(lienOriginal)
    return "Ok"

@app.route("/ajouterliensperso",methods = ['POST'])
def ajouterliensperso():
    lienOriginal = request.form.to_dict()['url']
    guid_perso = request.form.to_dict()['liensPerso']

    Lien.insertPerso(lienOriginal, guid_perso)
    return "Ok"

@app.route("/get/<string:guid>")
def get(guid):
   return Lien.getByGuid(guid)


@app.route("/testus")
def testus():
    return  request.args