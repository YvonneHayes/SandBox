function writeText(res){
  response.writeHead(200, {'Content-Type':'text/plain'});
  res.write(res);
  res.end();
}

function writeHtml(res){
  response.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<' + res + '>');
  res.end();
}
