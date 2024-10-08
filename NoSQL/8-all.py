#!/usr/bin/env python3
"""Module that defines a function to list all documents in a MongoDB collection."""

from pymongo.collection import Collection


def list_all(mongo_collection: Collection):
    """
    Lists all documents in the given MongoDB collection.
    
    Args:
        mongo_collection (Collection): The MongoDB collection to list documents from.
    
    Returns:
        list: A list of all documents in the collection. 
              Returns an empty list if no documents are found.
    """
    documents = mongo_collection.find()
    if documents.count() == 0:
        return []
    return list(documents)


if __name__ == "__main__":
    # Código para prueba si es necesario, pero este bloque no se ejecutará al importar el módulo
    pass
