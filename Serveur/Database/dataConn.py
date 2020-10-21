import pymongo

class dataConn():
    client = pymongo.MongoClient("mongodb://root:Pa$$word3@urlshortner.zmdv9.mongodb.net/URLS?retryWrites=true&w=majority")
    db = client.test
    mydb = client["URLS"]
    tblLiens = mydb["Liens"]