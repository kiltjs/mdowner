
import mDown from '../lib/mdowner';
import assert from 'assert';

describe('basic parse', function () {

  it('md foobar', function () {

    var md = `foobar`

    assert.strictEqual( mDown(md), '<p>foobar</p>');

  });

  it('heading and paragraph', function () {

    var md = `
# foo

bar
`;

    assert.strictEqual( mDown(md), '<h1>foo</h1><p>bar</p>');

  });

  it('heading, paragraph and blockquote', function () {

    var md = `
# foo

bar

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

    assert.strictEqual( mDown(md), '<h1>foo</h1><p>bar</p><blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>');

  });

  it('heading, paragraph, blockquote and code', function () {

    var md = `
# foo

bar

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

\`\`\` html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>
\`\`\`
`;

    assert.strictEqual( mDown(md), `<h1>foo</h1><p>bar</p><blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote><pre class="language-html"><code><!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html></code></pre>`);

  });

});
