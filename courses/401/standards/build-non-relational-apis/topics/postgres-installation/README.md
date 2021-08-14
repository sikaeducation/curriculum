# PostgreSQL Installation and Setup

## Installing and Running PostgreSQL

Follow these instructions to install the PostgreSQL database management system on your operating system:

### Linux

Run this command to install PostgreSQL:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

If you ever need to restart Postgres, run:

```bash
sudo service postgresql restart
```

### MacOs

Run this command to install PostgreSQL:

```bash
brew install postgresql
```

If you ever need to restart Postgres, run:

```bash
brew services restart postgresql
```

## Creating Databases

To create a new Postgres database, use the `createdb` command. For example, to create a database called `imdb`, run:

```bash
sudo -u postgres createdb imdb
```

You can now connect to `imdb` with a database connection tool like `pg` or a CLI tool like `psql`.

## Additional Resources

| Resource | Description |
| --- | --- |
| [PostgreSQL: Downloads](https://www.postgresql.org/download/) | Official PostgreSQL installers |
