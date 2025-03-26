const ace = globalThis.ace || (await import('ace-code')).default;
export const config = ace.config || ace?.require('ace/config');
export default ace;