<link rel="stylesheet" href='./tree.css'>
<script src='./tree.js'>
var tree = new Tree(document.getElementById('tree'));
tree.json([{
  name: 'file 1'
}, {
  name: 'file 2'
}, {
  name: 'folder 1',
  open: true,
  type: Tree.FOLDER,
  selected: true,
  children: [{
    name: 'file 1'
  }, {
    name: 'file 2'
  }, {
    name: 'folder 1',
    type: Tree.FOLDER
  }]
}]);
 tree.on('fetch', folder => window.setTimeout(() => {
  tree.file({
    name: 'file 1'
  }, folder);
  tree.file({
    name: 'file 2'
  }, folder);
  folder.resolve();
}, 1000));
</script>
<div id="tree"></div>

