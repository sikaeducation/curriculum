# Data Modeling: Many-to-Many

If One-to-Many relationships are the most common type of relationships, Many-to-Many relationships are the next most common. Furthermore, they're fundamentally just another type of One-to-Many relationship.

## Identifying Many-to-Many Relationships

A Many-to-Many relationship, also called an M:N relationship, happens when one entity has more than one of another entity and vice-versa. For example, a parent may have multiple children, and each child may have multiple parents.

## Many-to-Many Relationships in Databases

Relational databases generally don't have a way to represent Many-to-Many relationships directly. However, You can create a many-to-many relationship out of two One-to-Many relationships:

(example)

(example)

If one student can be enrolled in many courses, and each courses can contain multiple students, a third entity can represent each occurrence of a student being enrolled in a course:

(student - enrollment - course)

This new entity is called a join table. Join tables are often fairly abstract ("enrollment" is a more abstract idea than either "student" or "course"), but they're also often useful in other ways. For example, an `enrollment` table may contain other information, such as the term of the enrollment or whether it's been paid. The join table may even have its own relationships, such as which registrar performed the enrollment.

When possible, try to come up with a descriptive name for the join table, as doing so may be helpful in deciding which data belongs on it and which other relationships it may have. This isn't always possible, in which case it's also acceptable to combine the two names of the tables its joining (eg. `student_course`).
