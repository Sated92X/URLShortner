from flask import Flask
from .dataConn import dataConn

class Lien():

    def getById(id):
        myQuery = {"_id" : id}
        print(myQuery)
        result = dataConn.tblLiens.find_one(myQuery)
        return result
        
    def insert(self):
        return tblLiens.insert_one(self)