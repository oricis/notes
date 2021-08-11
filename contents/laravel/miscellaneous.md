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
