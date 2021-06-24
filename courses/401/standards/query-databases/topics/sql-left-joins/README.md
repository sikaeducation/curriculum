# SQL: LEFT JOIN

An `INNER JOIN` finds every column where there's a match. For example, if you want all of a customer's orders, you might write something like:

```sql
SELECT customer.*, order.*
FROM customer
INNER JOIN order on order.customer_id = customer.id;
```

There's a catch to this though. If the customer doesn't have any orders, not only will the order information not show up, but the customer information won't show up either.

(image with customer info + order)

(image with no results at all)

## LEFT JOIN

```sql
SELECT customer.*, order.*
FROM customer
LEFT JOIN order on order.customer_id = customer.id;
```

(results)

## Watch Out!

* There's a `RIGHT JOIN` that does the exact same thing as a `LEFT JOIN` but tolerates absences in the second column instead of the first. You can often rewrite a query to use on or the other, but use whichever one makes your query easier to follow.
