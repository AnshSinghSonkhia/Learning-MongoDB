// to INSERT 1 Document

await db.collection('inventory').insertOne({
    item: 'canvas',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }
  });

// to INSERT Multiple Documents

await db.collection('inventory').insertMany([
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
  ]);

// All other insert methods:  https://www.mongodb.com/docs/manual/reference/insert-methods/#insert-methods