# SQL: LEFT JOIN

An `INNER JOIN` finds every column where there's a match. For example, to get all of a customer's orders you might write something like:

```sql
SELECT customer.*, order.*
FROM customer
INNER JOIN order on order.customer_id = customer.id;
```

There's a catch to this though. If the customer doesn't have any orders, not only will the order information not show up, but the customer information won't show up either. For example, consider a user table and an agreement agreement table representing whether each user has agreed to a change in the terms of service.

**customer**

| id | name |
| --- | --- |
| 1 | Bill Bellamy |
| 2 | Kennedy Montgomery |
| 3 | Peter King |

**agreement**

| id | is_signed | customer_id |
| --- | --- | --- |
| 1 | true | 1 |

If you try to list all of the customers and whether they've signed the agreement with an inner join, you may be surprised:

```sql
SELECT customer.name, order.product
FROM customer
INNER JOIN agreement ON agreement.customer_id = customer.id
```

| customer.name | order.product |
| --- | --- |
| Bill Bellamy | true |

`INNER JOIN` only returns results that have matches. If you want every custoer whether or not there's a match, use `LEFT JOIN`:

```sql
SELECT customer.name, order.product
FROM customer
LEFT JOIN agreement ON customer.id = agreement.customer_id
```

| customer.name | order.product |
| --- | --- |
| Bill Bellamy | true |
| Kennedy Montgomery | |
| Peter King | |

`LEFT JOIN` will include everyone right in the first ("left") column in the join clause, even if there's not match in the second column.

## Watch Out!

* There's a `RIGHT JOIN` that does the exact same thing as a `LEFT JOIN` but tolerates absences in the second column instead of the first. You can often rewrite a query to use on or the other, but use whichever one makes your query easier to follow.

## Additional Resources

| Resource | Description |
| --- | --- |
| [W3Schools: `LEFT JOIN`](https://www.w3schools.com/sql/sql_join_left.asp) | W3Schools' `LEFT JOIN` reference |
| [SQL Zoo: Using Null](https://sqlzoo.net/wiki/Using_Null) | SQL Zoo's interactive tutorial on `LEFT JOIN` |
