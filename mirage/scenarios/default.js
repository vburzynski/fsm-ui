export default function (server) {
  server.logging = true;
  let list = server.createList('node', 5);

  var source = list[0];
  var target = list[1];
  var edge = server.createList('edge', 1, { source, target });
}
