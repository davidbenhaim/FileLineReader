//
// Module: LineBufferReader
// Constructor: FileLineReader(filename, bufferSize = 8192)
// Methods: hasNextLine() -> boolean
//          nextLine() -> String
// Author(s): Originaly by Dirk Jäckel (http://blog.jaeckel.com/2010/03/i-tried-to-find-example-on-using-node.html)
//            NPMified by David Benhaim (github.com/davidbenhaim)
//
var fs = require("fs");
var sys = require("sys");

exports.FileLineReader = function(filename, bufferSize) {

    if(!bufferSize || bufferSize <= 0) {
        bufferSize = 8192;
    }

    //private:
    var currentPositionInFile = 0;
    var buffer = "";
    var fd = fs.openSync(filename, "r");


    // return -1
    // when EOF reached
    // fills buffer with next 8192 or less bytes
    var fillBuffer = function(position) {

        var res = fs.readSync(fd, bufferSize, position, "ascii");

        buffer += res[0];
        if (res[1] == 0) {
            return -1;
        }
        return position + res[1];

    };

    currentPositionInFile = fillBuffer(0);

    //public:
    this.hasNextLine = function() {
        while (buffer.indexOf("\n") == -1 && currentPositionInFile != -1) {
            currentPositionInFile = fillBuffer(currentPositionInFile);
            if (currentPositionInFile == -1) {
                break;
                // return false;
            }
        }

        if (buffer.indexOf("\n") > -1 || buffer.length > 0) {

            return true;
        }
        return false;
    };

    //public:
    this.bufferSize = function(){
        return buffer.length
    }

    //public:
    this.nextLine = function() {
        var lineEnd = buffer.indexOf("\n");
        if(lineEnd == -1){
            lineEnd = buffer.length;
        }

        var result = buffer.substring(0, lineEnd);

        buffer = buffer.substring(result.length + 1, buffer.length);
        return result;
    };

    return this;
};