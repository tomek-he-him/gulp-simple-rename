gulp-simple-rename
==================

**A simpler approach to renaming files in [gulp][].**


Usage
-----

```js
var gulp = require('gulp');
var rename = require('gulp-simple-rename');
var today = new Date().toISOString().substr(0, 10)); // e.g. 2014-11-18


// Having a file "src/log for (today).txt",
gulp.src('src/*')
    .pipe(rename(function (path) {
        return path.replace(/(today)/, today);
        }))
    .pipe(gulp.dest('dist'))
    ;
// …we get it copied over to "dest/log for 2014-11-18.txt".
```


API
---

```js
simpleRename(renamingFunction)
```

#### `renamingFunction` _[Function]_

The single argument for the function `simpleRename` should be a simple function. Fed with the relative path of a file, it should return the new relative path.

##### arguments
The renaming function is passed the following arguments:

- `relativePath` _[String]_ – The path of the streamed file, relative to the base directory (this is the first directory found by a glob – the package [glob-stream][], used by gulp, can tell you more about that.)

- `originalFile` _[File]_ – This argument gives access to the raw [Vinyl file][] object being processed by gulp. In most situations you should be fine without it.

##### return value

The renaming function should return the new relative path for the file, as a _[String]_.


Why use it
----------

> “Hey, we have [gulp-rename][] – what's wrong with it?”

[gulp-rename][] is a great tool. It introduces abstractions which make it easy and idiomatic to rename files. I often use it myself.

But sometimes we need robust simplicity (read: flexibility) rather than idiomatic abstractions.





<!-- Links -->
[gulp]: http://gulpjs.com/
[glob-stream]: https://github.com/wearefractal/glob-stream
[gulp-rename]: https://github.com/hparra/gulp-rename
[Vinyl file]: https://github.com/wearefractal/vinyl
