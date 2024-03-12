let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    fs.writeFile("tes.txt", " sare", (err, data) => {
      if (err) {
        throw err;
      }
    });
    fs.readFile("tes.txt", (err, data) => {
      res.write(data);

      res.end("submitted succcessfully");
    });
  })
  .listen(3000);
