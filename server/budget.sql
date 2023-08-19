CREATE DATABASE budget;

CREATE TABLE budget
(
  budget_id SERIAL NOT NULL,
  category_id SERIAL UNIQUE NOT NULL,
  holding_id SERIAL,
  min_amount money,
  goal_amount money
);

ALTER TABLE budget ADD CONSTRAINT budget_id
  PRIMARY KEY (budget_id);

CREATE TABLE category
(
  category_id SERIAL NOT NULL,
  category varchar(256) NOT NULL,
  sub_category varchar(256) NOT NULL
);

ALTER TABLE category ADD CONSTRAINT category_id
  PRIMARY KEY (category_id);

CREATE TABLE holdings
(
  holding_id SERIAL NOT NULL,
  holding varchar(256) UNIQUE NOT NULL
);

ALTER TABLE holdings ADD CONSTRAINT holding_id
  PRIMARY KEY (holding_id);

CREATE TABLE transaction
(
  transaction_id uuid NOT NULL,
  date date NOT NULL,
  budget_id SERIAL NOT NULL,
  expense_income varchar(10) NOT NULL,
  amount money NOT NULL
);

ALTER TABLE transaction ADD CONSTRAINT transaction_id
  PRIMARY KEY (transaction_id);

ALTER TABLE budget ADD CONSTRAINT category_fk
  FOREIGN KEY (category_id) REFERENCES category (category_id) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE budget ADD CONSTRAINT holding_fk
  FOREIGN KEY (holding_id) REFERENCES holdings (holding_id) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE transaction ADD CONSTRAINT budget_fk
  FOREIGN KEY (budget_id) REFERENCES budget (budget_id) ON DELETE RESTRICT ON UPDATE CASCADE;

DROP TABLE holdings;
DROP TABLE transaction;
DROP TABLE budget;
DROP TABLE category;