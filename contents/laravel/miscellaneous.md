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

