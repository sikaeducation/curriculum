# PostgreSQL Installation and Setup

To integrate databases into your applications, you need to install the database software.

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

## Watch Out!

The `sudo -u postgres` command run `createdb` as the `postgres` user on your computer. This user is added during the PostgreSQL installation, and by default is the only user allowed to issue commands to the databse.

## Additional Resources

| Resource | Description |
| --- | --- |
| [PostgreSQL: Downloads](https://www.postgresql.org/download/) | Official PostgreSQL installers |
