var express = require("../");
var request = require("supertest");
var expect = require("chai").expect;
var http = require("http");

describe("app", function () {
    var app = express();
    describe("create http server", function () {
        it('create http server', function(done) {
            var server = http.createServer(app);
            request(server).get('/foo').expect(404).end(done);
        });
      });

    describe("define a method named listen for app", function() {
        var port = 4000;
        var server;
        before(function(done) {
            server = app.listen(port, done);
        })
        it("invoke listen", function() {
            expect(server).to.be.instanceof(http.Server);
        });
        it("it will responds 404", function(done) {
            request("http://localhost:" + port).get("/foo").expect(404).end(done);
        })
    });
  });
