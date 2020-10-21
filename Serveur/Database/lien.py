from flask import Flask
from .dataConn import dataConn

class Lien():

    def getById(id):
        myQuery = {"_id" : id}
        return dataConn.tblLiens.find(myQuery).limit(1)

    
    def insert(self):
        return tblLiens.insert_one(self)