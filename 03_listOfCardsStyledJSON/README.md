# EXAMPLE 03 List of Cards using jquery json fetch from Node.js/MySQL server side

## We want to display

* This example should show the same result as the prior example 2 

## KISS/Agile and Opinionated Technologies Selection

I strongly believe in KISS principle, and in a small team going End to End to own a product and execution. With competition and fast moving Agile teams it is more important to get things done reliably and fast.

So my bias is to use good proven technologies, rather than bleeding edge tech churn.

However larger organizations do really well with current Java 7/8 standards. But even here trend is to use standards not propreitary packages.

## Why MySql Simple Queries

* In today's NoSQL world, why do MySQL?
	- It just works! And you have a ton of LAMP programmers 
	- MySQL scales extremely high for content/social sites like Google, Twitter, Facebook
	- MySQL (including web server/nodejs) scales very well and can be hosted on even small VPS

* Why Raw MySQL Queries, Not JPA 2.0, etc?
	- Straight SQL queries are fairly simple
	- For sophisticated developers coming from Hibernate or IOS ORM/Stores it seems a throwback to directly do queries in MySQL. Almost like PHP or Python interfacing with MySQL.
	- In reality, trying to be database independent is a joke, The lifetime of apps is just not long that it merits switching DBMS, let alone trying to straddle NoSQL and SQL with one ORM.
	- By doing queries directly, code is really a lot easier to understand


## Why Reactive Node.js Microservices

TODO

* Why NodeJS and not Java JAX-RX 2
	- Nothing bad 
	- MySQL works well with NodeJS and dev cycles are very fast
	- End to end JS is good - you don't need to split development between "FE/Midtier/BE"
	- NodeJS supports isomorphic React.js, so you can give performant pages

* Reactive Technologies and Microservice Orchestration
	 - It is all about SOA, microservices and orchestration and reactive technologies!
	 - The scalability, performance and maintainability of complex application systems is HUGE!

	
# Setup 

## NodeJS, Mysql


1. Setup Node.js, npm 
  I did this a while back for a mac.
  But fear not there are a ton of tutorials for node.js and Mysql setup.

2. Setup MySQL
	so steps may be a bit incorrect. Also this is 

3. Create MySQL database and insert records there





