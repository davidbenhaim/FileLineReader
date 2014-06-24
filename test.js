var assert = require("assert"),
        sys = require("sys"),
        FileLineReader = require("./index");

try {
	sys.debug(__filename + " Testing test.txt");
    var reader = new FileLineReader("./test_data/test.txt", 10);

    sys.debug(__filename + " First line...");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "yahoo.com");

    sys.debug(__filename + " Next line...");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "youtube.com");
    sys.debug(__filename + " Next line...");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "facebook.com");
    sys.debug(__filename + " Next line...");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "live.com");
    sys.debug(__filename + " Next line...");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "msn.com");
    sys.debug(__filename + " Next line...\n");

    assert.equal(reader.hasNextLine(), false);

} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}

try {
	sys.debug(__filename + " Testing empty.txt");
    var reader = new FileLineReader("./test_data/empty.txt", 10);

    sys.debug(__filename + " First line... (none)\n");
    assert.equal(reader.hasNextLine(), false);
    assert.equal(reader.bufferSize(), 0);
    assert.equal(reader.nextLine(), "");

} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}

try {
	sys.debug(__filename + " Testing white_space.txt"); 
    var reader = new FileLineReader("./test_data/white_space.txt");

    sys.debug(__filename + " First line... yahoo.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "yahoo.com");

    sys.debug(__filename + " Next line... ''");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "");

    sys.debug(__filename + " Next line... youtube.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "youtube.com");

	sys.debug(__filename + " Next line... ''");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "");

    sys.debug(__filename + " Next line... facebook.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "facebook.com");
    
    sys.debug(__filename + " Next line... '\s\s\s'");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "   ");

    sys.debug(__filename + " Next line... live.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "live.com");

    sys.debug(__filename + " Next line... ''");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "");
    
    sys.debug(__filename + " Next line... msn.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "msn.com");

    sys.debug(__filename + " Next line... (none)\n");
    assert.equal(reader.hasNextLine(), false);

} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}

try {
	sys.debug(__filename + " Testing test_no_lastline.txt"); 
    var reader = new FileLineReader("./test_data/test_no_lastline.txt", 10);

    sys.debug(__filename + " First line... yahoo.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "yahoo.com");

    sys.debug(__filename + " Next line... youtube.com");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "youtube.com");
    sys.debug(__filename + " Next line... facebook.com");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "facebook.com");
    sys.debug(__filename + " Next line... live.com");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "live.com");
    sys.debug(__filename + " Next line... msn.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "msn.com");
    sys.debug(__filename + " Next line... (none)\n");
    assert.equal(reader.hasNextLine(), false);

} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}

try {
	sys.debug(__filename + " Testing empty.txt (no buffer size)");
    var reader = new FileLineReader("./test_data/empty.txt");

    sys.debug(__filename + " First line... (none)\n");
    assert.equal(reader.hasNextLine(), false);
    assert.equal(reader.bufferSize(), 0);
    assert.equal(reader.nextLine(), "");

} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}

try {
	sys.debug(__filename + " Testing test_no_lastline.txt (no buffer size)"); 
    var reader = new FileLineReader("./test_data/test_no_lastline.txt");

    sys.debug(__filename + " First line... yahoo.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "yahoo.com");

    sys.debug(__filename + " Next line... youtube.com");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "youtube.com");
    sys.debug(__filename + " Next line... facebook.com");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "facebook.com");
    sys.debug(__filename + " Next line... live.com");

    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "live.com");
    sys.debug(__filename + " Next line... msn.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "msn.com");
    sys.debug(__filename + " Next line... (none)\n");
    assert.equal(reader.hasNextLine(), false);

} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}

try {
	sys.debug(__filename + " Testing white_space.txt (no buffer size)"); 
    var reader = new FileLineReader("./test_data/white_space.txt");

    sys.debug(__filename + " First line... yahoo.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "yahoo.com");

    sys.debug(__filename + " Next line... ''");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "");

    sys.debug(__filename + " Next line... youtube.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "youtube.com");

	sys.debug(__filename + " Next line... ''");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "");

    sys.debug(__filename + " Next line... facebook.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "facebook.com");
    
    sys.debug(__filename + " Next line... '\s\s\s'");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "   ");

    sys.debug(__filename + " Next line... live.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "live.com");

    sys.debug(__filename + " Next line... ''");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "");
    
    sys.debug(__filename + " Next line... msn.com");
    assert.equal(reader.hasNextLine(), true);
    assert.equal(reader.nextLine(), "msn.com");

    sys.debug(__filename + " Next line... (none)\n");
    assert.equal(reader.hasNextLine(), false);
} catch (err) {
    sys.debug(__filename + ": ERROR: " + err);
}