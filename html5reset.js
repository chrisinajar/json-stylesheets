/*
  HTML5 Reset :: reset.css
  ----------------------------------------------------------
  We have learned much from/been inspired by/taken code where offered from:

  Eric Meyer          :: http://meyerweb.com
  HTML5 Doctor        :: http://html5doctor.com
  and the HTML5 Boilerplate :: http://html5boilerplate.com

  Header commented edited by chrisinajar because it said "style.css"
  this is actually the "reset" file

-------------------------------------------------------------------------------*/

/* Let's default this puppy out
-------------------------------------------------------------------------------*/
var reset = module.exports = {};

addRule([
  'html',
  'body',
  'body div',
  'span',
  'object',
  'iframe',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'blockquote',
  'pre',
  'abbr',
  'address',
  'cite',
  'code',
  'del',
  'dfn',
  'em',
  'img',
  'ins',
  'kbd',
  'q',
  'samp',
  'small',
  'strong',
  'sub',
  'sup',
  'var',
  'b',
  'i',
  'dl',
  'dt',
  'dd',
  'ol',
  'ul',
  'li',
  'fieldset',
  'form',
  'label',
  'legend',
  'table',
  'caption',
  'tbody',
  'tfoot',
  'thead',
  'tr',
  'th',
  'td',
  'article',
  'aside',
  'figure',
  'footer',
  'header',
  'menu',
  'nav',
  'section',
  'time',
  'mark',
  'audio',
  'video',
  'details',
  'summary'
], {
  margin: 0,
  padding: 0,
  border: 0,
  'font-size': '100%',
  'font-weight': 'normal',
  'vertical-align': 'baseline',
  background: 'transparent'
});

addRule([
  'article',
  'aside',
  'figure',
  'footer',
  'header',
  'nav',
  'section',
  'details',
  'summary'
], {
  display: 'block'
});

/* Handle box-sizing while better addressing child elements:
   http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
reset.html = {
  'box-sizing': 'border-box'
};

addRule([
  '*',
  '*:before',
  '*:after'
], {
  'box-sizing': 'inherit'
});

/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */

/* Responsive images and other embedded objects */
/* if you don't have full control over `img` tags (if you have to overcome attributes), consider adding height: auto */
addRule([
  'img',
  'object',
  'embed'
], {
  'max-width': '100%'
});

/*
   Note: keeping IMG here will cause problems if you're using foreground images as sprites.
  In fact, it *will* cause problems with Google Maps' controls at small size.
  If this is the case for you, try uncommenting the following:

#map img {
    max-width: none,

}
*/

/* force a vertical scrollbar to prevent a jumpy page */
reset.html['overflow-y'] = 'scroll';

/* we use a lot of ULs that aren't bulleted.
  you'll have to restore the bullets within content,
  which is fine because they're probably customized anyway */
reset.ul = {
  'list-style': 'none'
};

addRule([
  'blockquote',
  'q'
], {
  quotes: 'none'
});

addRule([
  'blockquote:before',
  'blockquote:after',
  'q:before',
  'q:after'
], {
  content: ['', 'none']
});

reset.a = {
  margin: 0,
  padding: 0,
  'font-size': '100%',
  'vertical-align': 'baseline',
  background: 'transparent'
};

reset.del = {
  'text-decoration': 'line-through'
};

addRule([
  'abbr[title]',
  'dfn[title]'
], {
  'border-bottom': '1px dotted #000',
  cursor: 'help'
});

/* tables still need cellspacing="0" in the markup */
reset.table = {
  'border-collapse': 'separate',
  'border-spacing': 0,
  'font-size': 'inherit',
  font: '100%'
};
reset.th = {
  'font-weight': 'bold',
  'vertical-align': 'bottom'
};
reset.td = {
  'font-weight': 'normal',
  'vertical-align': 'top'
};

reset.hr = {
  display: 'block',
  height: '1px',
  border: 0,
  'border-top': '1px solid #ccc',
  margin: '1em 0',
  padding: 0
};

addRule([
  'input',
  'select'
], {
  'vertical-align': 'middle'
});

reset.pre = {
  'white-space': ['pre', 'pre-wrap', 'pre-line'],
  'word-wrap': 'break-word'
};

reset['input[type="radio"]'] = {
  'vertical-align': 'text-bottom'
};
reset['input[type="checkbox"]'] = {
  'vertical-align': ' bottom'
};
reset['.ie7 input[type="checkbox"]'] = {
  'vertical-align': 'baseline'
};
reset['.ie6 input'] = {
  'vertical-align': 'text-bottom'
};

addRule([
  'select',
  'input',
  'textarea'
], {
  font: '99% sans-serif'
});

reset.small = {
  'font-size': '85%'
};

reset.strong = {
  'font-weight': 'bold'
};

addRule([
  'td',
  'td img'
], {
  'vertical-align': 'top'
});

/* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */
addRule([
  'sub',
  'sup'
], {
  'font-size': '75%',
  'line-height': 0,
  position: 'relative'
});

reset.sup = {
  top: '-0.5em'
};
reset.sub = {
  bottom: '-0.25em'
};

/* standardize any monospaced elements */
addRule([
  'pre',
  'code',
  'kbd',
  'samp'
], {
  'font-family': 'monospace, sans-serif'
});

/* hand cursor on clickable elements */
addRule([
  '.clickable',
  'label',
  'input[type=button]',
  'input[type=submit]',
  'input[type=file]',
  'button'
], {
  cursor: 'pointer'
});

/* Webkit browsers add a 2px margin outside the chrome of form elements */
addRule([
  'button',
  'input',
  'select',
  'textarea'
], {
  margin: 0
});

/* make buttons play nice in IE */
addRule([
  'button',
  'input[type=button]'
], {
  width: 'auto',
  overflow: 'visible'
});

/* scale images in IE7 more attractively */
reset['.ie7 img'] = {
  '-ms-interpolation-mode': 'bicubic'
};

/* prevent BG image flicker upon hover
   (commented out as usage is rare, and the filter syntax messes with some pre-processors)
.ie6 html {filter: expression(document.execCommand("BackgroundImageCache", false, true))
}
*/

/* let's clear some floats */
reset['.clearfix:after'] = {
  content: ' ',
  display: 'block',
  clear: 'both'
};

function addRule (selectors, rule) {
  reset[selectors.join(',')] = rule;
}
