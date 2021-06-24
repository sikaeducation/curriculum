# Intro to Data Modeling

How would you model the data for a library of Harry Potter books?

You could start with books:

(erd of books)

But you might end up with Harry Potter books being under either "J.K. Rowling" and "Joanne K. Rowling." So, you make an author table, and reference it from the books table:

(erd of books and authors)

This works well, until you realize that "Harry Potter and the Cursed Child" had 3 authors. So you make a new table called "Authoring" that keeps track of each instance of an author being associated with a book:

(erd of books, authors, and authorings)

Then you realize that the first Harry Potter book was alternately called "Harry Potter and the Sorcerer's Stone" and "Harry Potter and the Philosopher's Stone" based on which edition it was. So you can add a table for editions:

(erd of books, authors, authorings, and editions)

Then you realize that each book edition has had multiple printings, so you add a table for printings.

(erd of books, authors, authorings, editions, and printings)

This is the process of relational data modeling.

## ERDs

An Entity-Relationship Diagram (or ERD) describes things (entities) and their relationships with each other. The three basic categories of relationship are:

* 1-to-Many: This indicates that one thing shows up many times in another thing. For example, one building has many rooms, but each room can only be in one building.
* Many-to-Many: This indicates that one thing shows up many times in another thing _and vice-versa_. For example, one building can have more than one administrator, and each administrator can manage more than one building.
* 1-to-1: This indicates that something is actually the same as something else. For example, an employee may have a manager, who is also an employee.

There are other relationships in data modeling that are more nuanced, but they're subsets of these three types.

At their simplest, an ERD uses a box for entities:

(image)

and "Crow's feet" for relationships:

(image)

To read an ERD, the end of the line with the crow's feet is "many", and the line with either a single line or nothing at all is pronounced "one."

(example)

This says "one author can have many books, but each book only can only have one author."

(example)

This says "one author can have many books, and each book can have many authors."

(example)

This says "one person can have one pen-name, and each pen-name can have one author."

## Watch Out!

* Technically, an ERD is just entities and their relationships and doesn't include any attributes of the entities. ERDs don't even necessarily need to specifically be used for databases or even anything digital. A diagram that includes columns, data types, and keys is more properly called a schema diagram. In practice, "ERD" and "schema" are used interchangeably.
* A data model will never capture the complexity of the real world. Fortunately, they don't need to. A data model only needs to match the rules your application is expecting.
* ERDs capture abstract relationships. They aren't the data, they are the shape of the data.
