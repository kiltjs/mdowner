
export function heading (md) {
  var matches = md.match(/^(#+) (.*)/);
  if( matches ) {
    matches[1] = matches[1].length;
    return {
      renderer: 'heading',
      matches: matches,
    };
  }
};

export function blockquote (md) {
  var matches = md.match(/^> (.*)/);
  if( matches ) return {
    renderer: 'blockquote',
    matches: matches,
  }
};
