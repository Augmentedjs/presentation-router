# presentation-router

Augmented.js Presentation Router Module

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Router](#router)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
    -   [view](#view)
        -   [Properties](#properties)
    -   [loadView](#loadview)
        -   [Parameters](#parameters-1)
    -   [cleanup](#cleanup)
        -   [Parameters](#parameters-2)
    -   [initialize](#initialize)
        -   [Parameters](#parameters-3)
    -   [route](#route)
        -   [Parameters](#parameters-4)
        -   [Examples](#examples-1)
    -   [execute](#execute)
        -   [Parameters](#parameters-5)
    -   [navigate](#navigate)
        -   [Parameters](#parameters-6)
    -   [startHistory](#starthistory)
        -   [Parameters](#parameters-7)
    -   [parseQuery](#parsequery)
        -   [Parameters](#parameters-8)
-   [result](#result)
-   [isFunction](#isfunction)
    -   [Parameters](#parameters-9)
-   [History](#history)
    -   [Parameters](#parameters-10)
-   [serialize](#serialize)
    -   [Parameters](#parameters-11)

## Router

**Extends AugmentedObject**

Routers map faux-URLs to actions, and fire events when routes are
matched. Creating a new one sets its `routes` hash, if not set statically.<br/>
Supports passing routes to the constructor as well as a transition flag.

### Parameters

-   `options`  

### Examples

```javascript
const router = new Router({
   "routes": { ... },
   "transition": { "in": #, "out": # }
});
```

### view

#### Properties

-   `view` **Presentation.View** Read only property to current view

### loadView

Load a view safely and remove the last view by calling cleanup, then remove

#### Parameters

-   `view` **View** The View to load

### cleanup

Remove the last view by calling cleanup, then removes

#### Parameters

-   `oldView`  

### initialize

Initialize is an empty function by default. Override it with your own
initialization logic.

#### Parameters

-   `options`  

### route

Manually bind a single named route to a callback.

#### Parameters

-   `route` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The route
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The function binding name
-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** binding function

#### Examples

```javascript
this.route('search/:query/p:num', 'search', (query, num) => {
  ...
});
```

### execute

Execute a route handler with the provided parameters.  This is an
excellent place to do pre-route setup or post-route cleanup.

#### Parameters

-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** binding function
-   `args` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The arges passed

### navigate

Simple proxy to `history` to save a fragment into the history.

#### Parameters

-   `fragment` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** route fragment
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** any options to pass

### startHistory

Start the history using browser History API

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** any options to pass

### parseQuery

Parse a query string and return as an object

#### Parameters

-   `queryString` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object of the query params

## result

Augmented.result - returns named property in an object
simular to underscore .result method

Returns **any** named property in an object

## isFunction

isFunction -
returns true if called name is a function
simular to jQuery .isFunction method

### Parameters

-   `name` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The name of the function to test

Returns **any** true if called name is a function

## History

**Extends AugmentedObject**

Handles cross-browser history management, based on either
[pushState](http://diveintohtml5.info/history.html) and real URLs, or
[onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
and URL fragments.

### Parameters

-   `options`  

## serialize

Serialize object into query parameters url string

### Parameters

-   `obj` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object to serialize

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URL string
