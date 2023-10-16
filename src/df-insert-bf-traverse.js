const createNode = (value) => {
  return {
    value: value,
    left: null,
    right: null,
  };
};

const depthFirstInsert = (root, value) => {
  if (root.value === value || !value) return root;
  // insert on the left side of the tree
  if (value < root.value) {
    if (root.left) {
      return depthFirstInsert(root.left, value);
    } else {
      root.left = createNode(value);
      return root;
    }
  }

  // insert on the right side of the tree
  if (root.value < value) {
    if (root.right) {
      return depthFirstInsert(root.right, value);
    } else {
      root.right = createNode(value);
      return root;
    }
  }
};

// ----------- DFS imperative fashion -------------
const dfsOfGraph = (root) => {
  if (root === null) {
    return [];
  }

  const collector = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    collector.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }

  return collector;
};

// ----------- DFS imperative fashion -------------

const breadthFirstTraverse = (root) => {
  let collector = [];
  let q = [root];

  while (q.length > 0) {
    let first = q.shift();
    collector.push(first.value);
    if (first.left) q.push(first.left);

    if (first.right) q.push(first.right);
  }

  return collector;
};

// -------------- BFS recursive -------------------

// -------------- BFS recursive -------------------

module.exports = {
  depthFirstInsert,
  breadthFirstTraverse,
  createNode,
  dfsOfGraph,
};
