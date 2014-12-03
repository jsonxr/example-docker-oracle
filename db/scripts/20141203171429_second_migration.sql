-- // First migration.
-- Migration SQL that makes the change goes here.
alter table
   hr.admin_emp
add
   cust_sex varchar2(1);


-- //@UNDO
-- SQL to undo the change goes here.
alter table
   hr.admin_emp
drop column
   cust_sex;


