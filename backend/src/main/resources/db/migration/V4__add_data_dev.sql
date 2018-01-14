INSERT INTO account (id, reference, email, password) VALUES (1, 'test-user-1', 'user1@domain.org', '123');
INSERT INTO account (id, reference, email, password) VALUES (2, 'test-user-2', 'user2@domain.org', '123');
INSERT INTO skill (reference, name, description, account_id) VALUES ('test-skill-ref-1', 'test-skill-1', 'test skill #1', 1);
INSERT INTO skill (reference, name, description, account_id) VALUES ('test-skill-ref-2', 'test-skill-1', 'test skill #2', 1);
INSERT INTO skill (reference, name, description, account_id) VALUES ('test-skill-ref-3', 'test-skill-1', 'test skill #1', 2);
INSERT INTO skill (reference, name, description, account_id) VALUES ('test-skill-ref-4', 'test-skill-2', 'test skill #2', 2);
INSERT INTO skill (reference, name, description, account_id) VALUES ('test-skill-ref-5', 'test-skill-3', 'test skill #3', 2);