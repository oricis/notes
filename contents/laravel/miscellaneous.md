# Miscelaneous - Laravel

## Mutators

> Mutator for pw

	// From:
	// https://quickadminpanel.com/blog/customize-csv-import-module-for-relationships-and-passwords/
	public function setPasswordAttribute($input)
	{
	    if ($input) {
		$this->attributes['password'] = app('hash')->needsRehash($input)
		    ? Hash::make($input)
		    : $input;
	    }
	}


***

[Go to index](../../README.md)

## Migrations

### FKs

	// From:
	// https://laravel.com/docs/7.x/migrations#foreign-key-constraints

Add foreign keys with:

	Schema::table('posts', function (Blueprint $table) {
		$table->unsignedBigInteger('user_id');

		$table->foreign('user_id')->references('id')->on('users');
	});

or also (on Laravel 7 & 8):

	Schema::table('posts', function (Blueprint $table) {
		$table->foreignId('user_id')->constrained();
	});

### Fetching Eloquent model data (arrays)

	$user = User::first();
	dump(
		$user->toArray(),
		$user->getAttributes(),
		$user->getFillable()
	);

	# Result as:

	array:9 [
		"id" => 1
		"name" => "foo"
		"email" => "foo@mail.com"
		"role_id" => 1
		"created_at" => "11-12-2020 20:00:00"
		"updated_at" => "17-10-2022 09:12:38"
		"role" => array:7 [
			"id" => 1
			"name" => "admin"
			"created_at" => "13-10-2022 14:20:49"
			"updated_at" => "13-10-2022 14:20:49"
		]
	]

	array:6 [
		"id" => 1
		"name" => "foo"
		"email" => "foo@mail.com"
		"created_at" => "2020-12-11 21:00:00"
		"updated_at" => "2022-10-17 11:12:38"
	]

	array:5 [
		1 => "email"
		2 => "name"
		4 => "role_id"
	]

Plus, get the "loaded" model relations:

	dump(
		$user->getRelations()
	);


***

[Go to index](../../README.md)
