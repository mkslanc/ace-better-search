// import * as ace from 'ace-code';
import * as ace from 'ace-builds';
// import 'ace-code/esm-resolver.js'
import 'ace-builds/esm-resolver';
import 'ace-builds/src-noconflict/ext-language_tools.js'
import '../src/extension.js';

let editor = ace.edit("container");
editor.session.setValue("<html>\n    <h1>Hello world!</h1>\n</html>");
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/html");