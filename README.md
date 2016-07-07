[![Build Status](https://travis-ci.org/bahaaldine/angular-social-count.svg?branch=master)](https://travis-ci.org/bahaaldine/angular-social-count)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

# Angular Social Count

Angular Social Count is a directive that just counts shares, likes, ...etc on social networks.

## Demo page

http://bahaaldine.github.io/angular-social-count

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

Add angular-social-count module to you application
```javascript
	...
	angular
	  .module('myAwesomeApp', [
	    ...
	    'angular-social-count',
	    ...
	  ])
	...
```

## Usage

### Facebook
```
  ...
  <ng-fb-like-count class="counter" url="{{url}}"></ng-fb-like-count>
  <ng-fb-share-count class="counter" url="{{url}}"></ng-fb-share-count>
  <ng-fb-comment-count class="counter" url="{{url}}"></ng-fb-comment-count>
  ...
```

### Twitter
```
  ...
  <ng-tw-share-count class="counter" url="{{url}}"></ng-fb-share-count>
  ...
```

### Pinterest
```
  ...
  <ng-pn-share-count class="counter" url="{{url}}"></ng-fb-share-count>
  ...
```

### Linkedin
```
  ...
  <ng-ln-share-count class="counter" url="{{url}}"></ng-fb-share-count>
  ...
```
