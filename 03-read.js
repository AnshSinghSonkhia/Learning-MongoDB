// to fetch all documents

const cursor = db.collection('inventory').find({});

// to fetch all documents with an attribute

const cursor2 = db.collection('inventory').find({qty:90});