---
title: Create an object whose properties can be set only once
date: '2018-11-30'
---

I recently had the need to have an object whose properties could be set once, but then should be immutable after that. This, of course, is easy to do with `Object.defineProperty`:

```javascript
const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'Joe',
  configurable: false,
  writable: false
});
```

This will create a property on the object `obj` with the name `name`, and the value `'Joe'`. Further attempts to set the property will fail. 

If this is all you need, great, you're done. But I wanted something a little easier to use, so I created a little utility function.

The usage is as follows:

```javascript
const obj = setOnce(['name', 'age']);
```

This will return an object. The `name` and `age` properties of this object can be set only once. Other properties can be added and updated as usual. 

It's not rocket science, and it does use `Object.defineProperty` behind the scenes, but it's a little less boilerplate code to write.

Here is the function in its entirety:

```javascript
function setOnce(properties) {
  const setProperties = {}; // keeps track of which properties have been set
  const backingObj = {}; // holds the set-once property values
  const proxy = {}; // object that will be returned

  properties.forEach(property => {
    Object.defineProperty(proxy, prop, {
      configurable: false,
      set(value) {
        if (!setProperties[prop]) {
          backingObj[prop] = value;
          setProperties[prop] = true;
        }
      },
      get() {
        return backingObj[prop];
      }
    });
  });

  return proxy;
}
```

I couldn't use `writable: false`, because that would require the property's value to be set along with the other options to `Object.defineProperty`. By using a setter like this, the property can be set later and then the set-once functionality kicks in. It sets a flag to indicate that the property has been set. Later, if you try to set the property's value again, it will see that it was already set and do nothing.

I looked at using `Proxy` for this, but ended up not using it. The reason is that `Proxy` is not supported on IE11. A [polyfill](https://github.com/GoogleChrome/proxy-polyfill/blob/master/src/proxy.js) does exist, but it's limited. It uses `Object.seal` to seal the object. That means that the set-once properties' values would have to be specified at creation time.

In case anyone finds this useful, I published this function as an npm package here: [https://www.npmjs.com/package/set-once](https://www.npmjs.com/package/set-once). I added a couple of other features - the ability to seal the returned object if you don't want other properties to be defined on it, and the ability to optionally throw an exception if a set-once property's value is set again.
