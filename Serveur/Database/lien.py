from flask import Flask
from .dataConn import dataConn
import uuid
class Lien():

    def getByGuid(guid):
        myQuery = {"short" : guid}
        print(myQuery)
        result = dataConn.tblLiens.find_one(myQuery)
        print(result)
        return result["original"]
        
    def insert(original):
        url = {"original" : original, "short" : str(uuid.uuid1()).split('-')[0] }
        print(url)
        dataConn.tblLiens.insert(url)
        return "Ok"

    def insertPerso( original, guid_perso):
        url = {"original" : original, "short" : guid_perso }
        dataConn.tblLiens.insert(url)
        return "Ok"
    
    def linkExists(guid):
        link = getByGuid(guid)
        if (link is not None):
            return True
        else :
            return False
    