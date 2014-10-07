[![Build Status](https://travis-ci.org/bahaaldine/angular-social-count.svg?branch=master)](https://travis-ci.org/bahaaldine/angular-social-count)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

# Angular Social Count

Angular Social Count is a directive that just counts shares, likes, ...etc on social networks.

## Installation

Install depedencies using bower: 
```
bower install angular-social-count
```

Add js libraries to your application:
```html
	...
	<script src="bower_components/angular-social-count/dist/angular-social-count.js"></script>
    ...
```

Add ngSocialCount module to you application
```javascript
	...
	angular
	  .module('myAwesomeApp', [
	    ...
	    'ngSocialCount',
	    ...
	  ])
	...
```

## Usage
Include the **ng-csv-import** element with its options:

```html
<ng-s3-upload
     button-class="..."
     key="..."
     bucket="..."
     path="..."
     success-callback="..."
     failure-callback="..."
     progress-callback="..."
     aws-api="..."
     aws-region="..."
     label="..."></ng-s3-upload>
```

- **button-class**

CSS class for HTML input file element

- **bucket**

AWS S3 Bucket name.


- **key**

AWS S3 key. Typically the folder whitin your bucket where you want to upload your stuff


- **path**

Path under the AWS S3 key where you want to store the files
ex: if the bucket if **foo** and the key is **bar** then you can have something like this:
foo/bar/my_underlying_path_to_files

- **success-callback**

The callback to trigger when upload has succeeded.

- **failure-callback**

The callback to trigger when upload has failed.

- **progress-callback**

The callback to trigger during upload

- **aws-api**

A promise that return AWS S3 token. 

- **label**

A label for your upload button. Usefull for i18n.
