var reset = module.exports = {
  body: {
    'line-height': 1,
    color: 'black',
    background: 'white',
    margin: 0,
    '-webkit-tap-highlight-color': ['rgba(0,0,0,0)', 'transparent']
  },
  table: {
    'border-collapse': 'collapse',
    'border-spacing': 0
  },
  'audio:not([controls])': {
    display: 'none',
    height: 0
  },
  progress: {
    'vertical-align': 'baseline'
  },
  a: {
    'background-color': 'transparent'
  }
};

addRule([
  'article',
  'aside',
  'details',
  'figcaption',
  'figure',
  'footer',
  'header',
  'main',
  'menu',
  'nav',
  'section',
  'summary'
], {
  display: 'block'
});

addRule([
  'audio',
  'canvas',
  'progress',
  'video'
], {
  display: 'inline-block'
});

function addRule (selectors, rule) {
  reset[selectors.join(',')] = rule;
}
