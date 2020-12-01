function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}
function BST() {
  this.root = null;
}

BST.prototype.insert = function (data) {
  var node = new Node(data, null, null);
  if (this.root == null) {
    this.root = node;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}



function createTree(arr) {
  var bst = new BST();
  for (var i = 0; i < arr.length; i++) {
    bst.insert(arr[i])
  }
  // console.log(bst.root)
  return bst.root
}

module.exports = {
  createTree
}
