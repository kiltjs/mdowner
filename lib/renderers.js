
export function heading (level, text) {
  return `<h${level}>${text}</h${level}>`;
};

export function blockquote (content) {
  return `<blockquote>${content}</blockquote>`
};

export function link (href, content) {
  return `<a href="${href}">${text}</a>`;
};

export function image (src, alt_text) {
  return `<a href="${href}">${text}</a>`;
};

export function code (content, type) {
  return `<pre class="language-${type}"><code>${content}</code></pre>`;
};

export function paragraph (content) {
  return `<p>${content}</p>`
};
