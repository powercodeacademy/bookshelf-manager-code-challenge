require ( './helpers.js' )

describe("Bookshelf Manager", function() {
  const library = [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      yearPublished: 2008,
      genre: "Programming",
      hasRead: true
    },
    {
      title: "JavaScript: The Good Parts Part 2",
      author: "Douglas Crockford",
      yearPublished: 2015,
      genre: "Programming",
      hasRead: true
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      yearPublished: 2014,
      genre: "Programming",
      hasRead: false
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      yearPublished: 2015,
      genre: "Programming",
      hasRead: true
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      yearPublished: 1997,
      genre: "Fantasy",
      hasRead: false
    }
  ]

  describe("#booksByYear", function() {
    it("returns all books published in a specific year", function() {
      const result = booksByYear(library, 2008);
      expect(result).to.be.an('array').that.is.not.empty;
      expect(result[0].title).to.equal("JavaScript: The Good Parts");
    });
  });

  describe("#booksByOptions", function() {
    it("returns all books of a specific genre that are unread", function() {
      const result = booksByOptions(library, { genre: "Programming", hasRead: false });
      expect(result).to.be.an('array').and.to.have.lengthOf(1);
      expect(result[0].title).to.equal("Eloquent JavaScript");
    });

    it("returns all books written by a specified author", function() {
      const result = booksByOptions(library, { author: "J.K. Rowling" });
      expect(result).to.be.an('array').and.to.have.lengthOf(1);
      expect(result[0].title).to.equal("Harry Potter and the Sorcerer's Stone");
    });
  });

  describe("#authorCount", function() {
    it("returns a count of books for each author", function() {
      const result = authorCount(library);
      expect(result).to.be.an('object');
      expect(result["Douglas Crockford"]).to.equal(2);
      expect(result["Marijn Haverbeke"]).to.equal(1);
    });
  });

  describe("#uniqueGenres", function() {
    it("returns an array of unique genres from the bookshelf", function() {
      const result = uniqueGenres(library);
      expect(result).to.be.an('array').that.includes("Programming", "Fantasy");
      expect(result).to.have.members(["Programming", "Fantasy"]);
    });
  });
});
