
import * as renderers from './renderers';
import * as line_parsers from './line-parsers';

var inline_parsers = {
  link: /(!)?\[(.*?)\]\((.*?)\)/,
};

function mDown (md, options) {

  var in_code = false, code_content, code_type;

  return md.split(/ *[\n\r] */).reduce(function (result, line) {

    if( !line ) return result;

    if( in_code ) {
      if( /^``` */.test(line) ) {
        in_code = false;
        return result + renderers.code(code_content, code_type);
      }
      code_content += (code_content ? '\n' : '') + line;
      return result;
    }

    if( /^``` ?/.test(line) ) {
      in_code = true;
      code_content = '';
      code_type = line.substr(4);
      return result;
    }

    var line_matched;
    for( var parser_name in line_parsers ) {
      line_matched = line_parsers[parser_name](line);
      if( line_matched ) {
        return result + renderers[line_matched.renderer].apply(null, line_matched.matches.slice(1) );
      }
    }

    return result + renderers.paragraph(line);

  }, '');
}

export default mDown;
