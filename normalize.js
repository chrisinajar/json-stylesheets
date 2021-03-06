/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */

/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
 */
var reset = module.exports = {};

reset.html = {
  'font-family': 'sans-serif', /* 1 */
  '-ms-text-size-adjust': '100%', /* 2 */
  '-webkit-text-size-adjust': '100%' /* 2 */
};

/**
 * Remove the margin in all browsers (opinionated).
 */

reset.body = {
  'margin': 0
};

/* HTML5 display definitions
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 * 2. Add the correct display in IE.
 */

addRule([
  'article',
  'aside',
  'details', /* 1 */
  'figcaption',
  'figure',
  'footer',
  'header',
  'main', /* 2 */
  'menu',
  'nav',
  'section',
  'summary'
], { /* 1 */
  'display': 'block'
});

/**
 * Add the correct display in IE 9-.
 */

addRule([
  'audio',
  'canvas',
  'progress',
  'video'
], {
  'display': 'inline-block'
});

/**
 * Add the correct display in iOS 4-7.
 */

reset['audio:not([controls])'] = {
  'display': 'none',
  'height': 0
};

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

reset.progress = {
  'vertical-align': 'baseline'
};

/**
 * Add the correct display in IE 10-.
 * 1. Add the correct display in IE.
 */

addRule([
  'template', /* 1 */
  '[hidden]'
], {
  'display': 'none'
});

/* Links
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

reset.a = {
  'background-color': 'transparent'
};

/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */

addRule([
  'a:active',
  'a:hover'
], {
  'outline-width': 0
});

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

reset['abbr[title]'] = {
  'border-bottom': 'none', /* 1 */
  'text-decoration': ['underline', 'underline dotted'] /* 2 */
};

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */

addRule([
  'b',
  'strong'
], {
  'font-weight': 'inherit'
});

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

addRule([
  'b',
  'strong'
], {
  'font-weight': 'bolder'
});

/**
 * Add the correct font style in Android 4.3-.
 */

reset.dfn = {
  'font-style': 'italic'
};

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

reset.h1 = {
  'font-size': '2em',
  'margin': '0.67em 0'
};

/**
 * Add the correct background and color in IE 9-.
 */

reset.mark = {
  'background-color': '#ff0',
  'color': '#000'
};

/**
 * Add the correct font size in all browsers.
 */

reset.small = {
  'font-size': '80%'
};

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

addRule([
  'sub',
  'sup'
], {
  'font-size': '75%',
  'line-height': '0',
  'position': 'relative',
  'vertical-align': 'baseline'
});

reset.sub = {
  'bottom': '-0.25em'
};

reset.sup = {
  'top': '-0.5em'
};

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10-.
 */

reset.img = {
  'border-style': 'none'
};

/**
 * Hide the overflow in IE.
 */

reset['svg:not(:root)'] = {
  'overflow': 'hidden'
};

/* Grouping content
   ========================================================================== */

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

addRule([
  'code',
  'kbd',
  'pre',
  'samp'
], {
  'font-family': 'monospace, monospace', /* 1 */
  'font-size': '1em' /* 2 */
});

/**
 * Add the correct margin in IE 8.
 */

reset.figure = {
  'margin': '1em 40px'
};

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

reset.hr = {
  'box-sizing': 'content-box', /* 1 */
  'height': '0', /* 1 */
  'overflow': 'visible' /* 2 */
};

/* Forms
   ========================================================================== */

/**
 * 1. Change font properties to `inherit` in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

addRule([
  'button',
  'input',
  'select',
  'textarea'
], {
  'font': 'inherit', /* 1 */
  'margin': '0' /* 2 */
});

/**
 * Restore the font weight unset by the previous rule.
 */

reset.optgroup = {
  'font-weight': 'bold'
};

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 * 2. Show the overflow in Edge, Firefox, and IE.
 */

addRule([
  'button',
  'input', /* 1 */
  'select'
], { /* 2 */
  'overflow': 'visible'
});

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

addRule([
  'button',
  'select'
], { /* 1 */
  'text-transform': 'none'
});

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS.
 */

addRule([
  'button',
  'html [type="button"]', /* 1 */
  '[type="reset"]',
  '[type="submit"]'
], {
  '-webkit-appearance': 'button' /* 2 */
});

/**
 * Remove the inner border and padding in Firefox.
 */

addRule([
  'button::-moz-focus-inner',
  'input::-moz-focus-inner'
], {
  'border': 0,
  'padding': 0
});

/**
 * Restore the focus styles unset by the previous rule.
 */

addRule([
  'button:-moz-focusring',
  'input:-moz-focusring'
], {
  'outline': '1px dotted ButtonText'
});

/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */

reset.fieldset = {
  'border': '1px solid #c0c0c0',
  'margin': '0 2px',
  'padding': '0.35em 0.625em 0.75em'
};

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

reset.legend = {
  'box-sizing': 'border-box', /* 1 */
  'color': 'inherit', /* 2 */
  'display': 'table', /* 1 */
  'max-width': '100%', /* 1 */
  'padding': 0, /* 3 */
  'white-space': 'normal' /* 1 */
};

/**
 * Remove the default vertical scrollbar in IE.
 */

reset.textarea = {
  'overflow': 'auto'
};

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

addRule([
  '[type="checkbox"]',
  '[type="radio"]'
], {
  'box-sizing': 'border-box', /* 1 */
  'padding': 0 /* 2 */
});

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

addRule([
  '[type="number"]::-webkit-inner-spin-button',
  '[type="number"]::-webkit-outer-spin-button'
], {
  'height': 'auto'
});

/**
 * Correct the odd appearance of search inputs in Chrome and Safari.
 */

reset['[type="search"]'] = {
  '-webkit-appearance': 'textfield'
};

/**
 * Remove the inner padding and cancel buttons in Chrome on OS X and
 * Safari on OS X.
 */

addRule([
  '[type="search"]::-webkit-search-cancel-button',
  '[type="search"]::-webkit-search-decoration'
], {
  '-webkit-appearance': 'none'
});

function addRule (selectors, rule) {
  reset[selectors.join(',')] = rule;
}
