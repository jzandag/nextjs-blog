
const items = [
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
];


/*
Create a function `transformItems` that would return the desired output below
(should be able to support virtually unlimited depth and additional items)
*/
const transformItems = (items) => {
    let orderedItems = [];
    let depth = -1
    //setStructure function in which implements the algorithm
    const setStructure = (parent) => {
      //increment once it goes up one level
      depth++;
      items.filter(i => i.parent === parent).sort((a, b) => (a.seqId > b.seqId) ? 1 : -1).map(sub => {
        //push item to the array
        orderedItems.push({id: sub.id, 
            seqId: sub.seqId,
            parent: sub.parent,
            depth: depth,
            name: sub.name});
        setStructure(sub.id);
      })
      //decrement depth once the current depth is finished iterating
      depth--
    };
    //start the call starting with null parents
    setStructure(null);

    return orderedItems;
}

const finalItems = transformItems(items);

console.log(finalItems);

/* Output:
// The seqId is used for ordering within siblings.
// The depth would depend on the number of ancestors.
[
  { id: 1, seqId: 1, parent: null, depth: 0, name: 'components' },
  { id: 5, seqId: 2, parent: 1, depth: 1, name: 'AssignmentTable' },
  { id: 2, seqId: 4, parent: 5, depth: 2, name: 'index.tsx' },
  { id: 7, seqId: 5, parent: 5, depth: 2, name: 'SelectableDropdown.tsx' },
  { id: 3, seqId: 3, parent: 1, depth: 1, name: 'Sidebar' },
  { id: 4, seqId: 5, parent: 1, depth: 1, name: 'Table' },
  { id: 6, seqId: 2, parent: null, depth: 0, name: 'controllers' }
]
*/

const validate = (mac) => {
  if(/^[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}$/.test(mac))
    return false
  return true
}
module.exports = {validate}