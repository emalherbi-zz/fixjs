FixJS
=========

JQuery Plugin for Fix.

Usage
-----

## HTML

```html
<div class="row fix-container-right">

  <div class="col-md-10 fix-content-right">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>

  <div id="menu-right" class="col-md-2 hidden-sm">
    <div class="ls-alert-box ls-dismissable">
      <p>I'm gonna be fix!</p>
    </div>
  </div>

</div>
```

## CSS

```css
.fix-container-right {
  position: relative;
}
.fix-right {
  position: fixed;
  right: 15px;
  z-index: 900;
}
.fix-right-end {
  position: absolute;
  right: 15px;
  bottom: 0;
}
```

## JS

```js
$('#menu-right').fix({
  container : 'fix-container-right',
  content : 'fix-content-right',
  class : 'fix-right',
  top : $('.ls-topbar').height() + 'px'
});
```

## Page Example

[Example](https://emalherbi.github.io/fixjs/)

Contributing
------------

Anyone and everyone is welcome to contribute.

License
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

Author
------

[Eduardo Malherbi Martins](http://emalherbi.com)
