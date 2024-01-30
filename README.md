# MongoDB Notes

Refer [MongoDB Docs](https://www.mongodb.com/docs/manual/tutorial/insert-documents/)

## Commands:

- `show dbs` - Shows all DataBases
- `use employees` - Use DataBase named "employees"

## CRUD Operations:

- Create

    - All [Insert Methods](https://www.mongodb.com/docs/manual/reference/insert-methods/#insert-methods)
    - Use `.insertOne` command in Mongodb shell, to insert 1 document in the "inventory" collection.
    ```js
    db.inventory.insertOne({
        item: 'canvas',
        qty: 100,
        tags: ['cotton'],
        size: { h: 28, w: 35.5, uom: 'cm' }
    })
    ```

    - to INSERT Multiple documents
    ```js
    db.inventory.insertMany([
    {
        item: 'journal',
        qty: 25,
        tags: ['blank', 'red'],
        size: { h: 14, w: 21, uom: 'cm' }
    },
    {
        item: 'mat',
        qty: 85,
        tags: ['gray'],
        size: { h: 27.9, w: 35.5, uom: 'cm' }
    },
    {
        item: 'mousepad',
        qty: 25,
        tags: ['gel', 'blue'],
        size: { h: 19, w: 22.85, uom: 'cm' }
    }
    ])
    ```

- Read - to access data from database 

    - Fetch all documents in the collection named, "inventory"
    ```js
    db.inventory.find()
    ```

    - To fetch documents with certain attributes
    ```js
    db.inventory.find( {qty:85} )
    ```

    - to fetch documents with `tags` - "blue" or "red"
    ```js
    db.inventory.find( { tags: { $in: [ "blue", "red" ] } } )
    ```

    - Specify AND Conditions
    ```js
    db.inventory.find( { status: "A", qty: { $lt: 30 } } )
    ```

    - Specify OR Conditions
    ```js
    db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
    ```

    - Specify AND as well as OR Conditions
    ```js
    db.inventory.find( {
        status: "A",
        $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
    } )
    ```
    > finds with status "A" and (qty 30 or item starting with character "p")

- Update  - [Update Documents Docs](https://www.mongodb.com/docs/manual/tutorial/update-documents/#update-documents)
- Delete  - [Delete Documents Docs](https://www.mongodb.com/docs/manual/tutorial/remove-documents/#delete-documents)


# Aggregation Pipeline

- An aggregation pipeline consists of one or more stages that process documents:

- Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

- The documents that are output from a stage are passed to the next stage.

- An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.

[MongoDB Docs](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/#aggregation-pipeline)
