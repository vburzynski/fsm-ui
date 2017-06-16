export default function (server) {
  server.logging = true;
  server.createList('node', 5);
  server.create('edge');
}
