  var getDirectoryList = function(dir) {
    dir = dir === undefined ? process.cwd() + '/' : dir;
    var fs = require('fs');
    try {
      var directory = fs.readdirSync(dir).filter(function(file, index) {
        if (fs.statSync(dir + file).isDirectory()) {
          return file;
        }
      })
      return directory
    } catch (err) {
      return false
    }
  };

  var getSpriteDirectory = function(directory) {
    if(!Array.isArray(directory)){
      return false
    };
    directory = directory.filter(function(value, index) {
      if (value.indexOf('sprite') > -1 || value.indexOf('sprites') > -1) {
        return value;
      }
    });
    if (directory.length === 0) {
      console.log("Honey~you should have a sprite||sprites directory.");
      return false;
    };

    if (directory.length > 1) {
      console.log("Honey~which images directory?");
      return false;
    }
    if (directory.length === 1) {
      return directory[0];
    };
  }

  var getImageDirectoryName = function(directory) {

    directory = directory.filter(function(value, index) {
      if (value.indexOf('img') > -1 || value.indexOf('images') > -1 || value.indexOf('image') > -1) {
        return value;
      }
    });
    if (directory.length === 0) {
      console.log("Honey~you should have a img||images||image directory.");
      return false;
    };

    if (directory.length > 1) {
      console.log("Honey~which images directory?");
      return false;
    };
    if (directory.length === 1) {
      return directory[0];
    };
  }



  describe("A suite for getDirectoryList", function() {
    it("should return the dirctory array", function() {
      expect(getDirectoryList('/')).toContain('etc')
      expect(getDirectoryList('/cool89')).toEqual(false);
    });
  });
  describe('A suit for getSpriteDirectory', function() {
    it("should return the spriteDirectory", function() {
      expect(getSpriteDirectory(['sprite', 'abc', 'd'])).toEqual('sprite')
      expect(getSpriteDirectory(['sprites', 'abc', 'd'])).toEqual('sprites')
      expect(getSpriteDirectory(['d'])).toEqual(false)
      expect(getSpriteDirectory("")).toEqual(false)
      expect(getSpriteDirectory([])).toEqual(false)
    })
  });
  describe('A suit for getImageDirectory', function() {
    it("should return the spriteDirectory", function() {
      expect(getImageDirectoryName(['img'])).toEqual('img')
      expect(getImageDirectoryName(['img','imgs'])).toEqual(false)
      expect(getImageDirectoryName([])).toEqual(false)
    })
  });
