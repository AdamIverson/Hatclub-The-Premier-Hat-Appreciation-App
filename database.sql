
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

	INSERT INTO "user" ("username", "password")
	VALUES ('adam', 'pw1000'),
	('angie', 'pw123'),
	('abe', 'pwnow');

    CREATE TABLE "favorite" (
		"id" SERIAL PRIMARY KEY,
		"user_id" INT,
		"hat_id" INT,
		FOREIGN KEY (user_id) REFERENCES "user"(id),
		FOREIGN KEY (hat_id) REFERENCES "hat"(id)
	);

    INSERT INTO "favorite" ("user_id", "hat_id")
	VALUES (1, 1), (1, 4), (2, 2), (2, 3), (3, 1);

INSERT INTO "hat" ("description", "photo_url", "hat_color", "hat_style", "hat_fabric", "hat_vibe", "creator_id")
	VALUES ('beautiful period specific fedora resting on a park bench in winter', 'hat.jpg', 'purple', 'fedora', 'felt', 'fancy pirate', 1),
	('minnesota twins wool ballcap new', 'twins.jpg', 'blue', 'baseball', 'wool', 'sporty', 1),
	('etsy stocking cap with flower knit into brim on the side of the road, smoking a benson & hedges okay what im saying here is that this hat is my grandma', 'grammahat.jpg', 'brown', 'knit', 'wool', 'winter sunday gramma', 2),
	('abe is not generally one for headwear, but he has been know to don a pillowhat later on in the evening', 'abescouch.jpg', 'couch brown', 'throw pillow', 'fuzzy but tough', 'nap chic', 3);