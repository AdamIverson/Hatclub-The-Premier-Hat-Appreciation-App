
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

	INSERT INTO "user" ("username", "password")
	VALUES ('adam', 'pw1000'),
	('angie', 'pw123'),
	('abe', 'pwnow');

	CREATE TABLE "hat" (
	"id" SERIAL PRIMARY KEY,
	"description" VARCHAR (255),
	"photo_url" VARCHAR (255),
	"hat_color" VARCHAR (20),
	"hat_style" VARCHAR (20),
	"hat_fabric" VARCHAR (20),
	"hat_vibe" VARCHAR (30),
	"creator_id" INT,
	FOREIGN KEY (creator_id) REFERENCES "user"(id)
	);

    CREATE TABLE "favorite" (
		"id" SERIAL PRIMARY KEY,
		"user_id" INT,
		"hat_id" INT,
		FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
		FOREIGN KEY (hat_id) REFERENCES "hat"(id) ON DELETE CASCADE
	);

  INSERT INTO "favorite" ("user_id", "hat_id")
	VALUES (1, 1), (1, 4), (2, 2), (2, 3), (3, 1);

INSERT INTO "hat" ("description", "photo_url", "hat_color", "hat_style", "hat_fabric", "hat_vibe", "creator_id")
	VALUES ('beautiful period specific fedora resting on a park bench in winter', 'http://www.adamiversonphotography.com/uploads/1/0/7/0/107020049/prime-hatclub-2022-1_orig.jpg', 'purple', 'fedora', 'felt', 'fancy pirate', 1),
	('minnesota twins wool ballcap new', 'http://www.adamiversonphotography.com/uploads/1/0/7/0/107020049/prime-hatclub-2022-c-1_orig.jpg', 'blue', 'baseball', 'wool', 'sporty', 1),
	('etsy stocking cap with flower knit into brim on the side of the road, smoking a benson & hedges okay what im saying here is that this hat is my grandma', 'http://www.adamiversonphotography.com/uploads/1/0/7/0/107020049/prime-hatclub-2022-c-2_orig.jpg', 'brown', 'knit', 'wool', 'winter sunday gramma', 2),
	('abe is not generally one for headwear, but he has been know to don a pillowhat later on in the evening', 'http://www.adamiversonphotography.com/uploads/1/0/7/0/107020049/prime-hatclub-2022-e-1_orig.jpg', 'couch brown', 'throw pillow', 'fuzzy but tough', 'nap chic', 3);