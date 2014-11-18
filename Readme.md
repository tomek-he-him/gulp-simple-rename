gulp-simple-rename
==================

**A simpler approach to renaming files in [gulp][].**


Usage
-----

```js
var simpleRename = require('gulp-simple-rename');
var today = new Date().toISOString().substr(0, 10));

gulp.src('src/*.js')
    .pipe(simpleRename(function (relativePath) {
        return relativePath.replace(/(today)/, today);
        }))
    ;
```


API
---

The function `simpleRename(renamingFunction)` takes a single argument:

### `renamingFunction` _[Function]_

#### arguments
The renaming function is passed the following arguments:

- `relativePath` _[String]_ – The path of the streamed file, relative to the base directory (this is the first directory found by a glob – the package [glob-stream][], used by gulp, can tell you more about that.)

- `originalFile` _[File]_ – This parameter gives access to the raw [Vinyl file][] being processed by gulp. In many situations you'll be fine leaving it out.

#### return value

The renaming function should return the new relative path for the file _[String]_.


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
