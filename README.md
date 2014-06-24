###FileLineReader

Please see [http://blog.jaeckel.com/2010/03/i-tried-to-find-example-on-using-node.html](http://blog.jaeckel.com/2010/03/i-tried-to-find-example-on-using-node.html)

```
FileLineReader = require("filelinereader");

reader = new FileLineReader("file.txt", 100);

while(reader.hasNextLine()){
	console.log(reader.nextLine());
}
```

### CHANGELOG:

####v0.0.2
* module.exports vs. exports (tests passing)

####v0.0.1
* changed name from "LineBufferReader" to "FileLineReader" to match github
