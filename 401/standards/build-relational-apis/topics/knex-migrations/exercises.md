[Coffee Collection Migrations](https://github.com/sikaeducation/coffee-collection-migrations)

---

# Knex Seeds

Using Knex, build seed files for the following database tables.

| id | name                          | price |
|----|-------------------------------|-------|
| 1  | Capitol Hill Block Party 2016 | 49.99 |
| 2  | Bumbershoot 2016              | 64.99 |


| id | concert_id | name            | age |
|----|------------|-----------------|-----|
| 1  | 1          | Daniel Bailey   | 52  |
| 2  | 1          | Heidi McGuire   | 30  |
| 3  | 2          | Corey Reyes     | 26  |
| 4  | 2          | Kristi Sheridan | 45  |

Remember to delete all the existing rows from each table before inserting new ones.

Once you're satisfied, feel free to insert more rows to either table as you see fit.

---

# Knex Migrations

Using Knex, build migration files for the following one-to-many relationship.

```
              ┌───────────────────────────────────────────────────────────────┐
              │                           concerts                            │
              ├─────────────┬─────────────────────────┬───────────────────────┤
              │id           │serial                   │primary key            │
              │name         │varchar(255)             │not null default ''    │
              │price        │numeric(8, 2)            │not null default 1.00  │
              │started_at   │timestamp with time zone │not null default now() │
              │ended_at     │timestamp with time zone │not null default now() │
              └─────────────┴─────────────────────────┴───────────────────────┘
                                              ┼
                                              │
                                              │
                                              ○
                                             ╱│╲
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                        attendees                                         │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│concert_id   │integer                  │not null references concerts(id) on delete cascade│
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```

Ensure all primary and foreign keys have an index. Rememember to drop any existing tables from the database before creating new ones.

Once you're satisfied, feel free to add more columns to either table as you see fit.

