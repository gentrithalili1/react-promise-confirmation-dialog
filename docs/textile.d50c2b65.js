("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire56a0.register("iBtFX",(function(e,n){function i(e){!function(e){var n=/(?:\([^|)]+\)|\[[^\]]+\]|\{[^}]+\})+/.source,i={css:{pattern:/\{[^}]+\}/,inside:{rest:e.languages.css}},"class-id":{pattern:/(\()[^)]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},t=e.languages.textile=e.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:RegExp("^[a-z]\\w*(?:"+n+"|[<>=()])*\\."),inside:{modifier:{pattern:RegExp("(^[a-z]\\w*)(?:"+n+"|[<>=()])+(?=\\.)"),lookbehind:!0,inside:i},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:RegExp("^[*#]+(?:"+n+")?\\s+.+","m"),inside:{modifier:{pattern:RegExp("(^[*#]+)"+n),lookbehind:!0,inside:i},punctuation:/^[*#]+/}},table:{pattern:RegExp("^(?:(?:"+n+"|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:"+n+"|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|","m"),inside:{modifier:{pattern:RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:"+n+"|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),lookbehind:!0,inside:i},punctuation:/\||^\./}},inline:{pattern:RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:"+n+")?.+?\\1"),inside:{bold:{pattern:RegExp("(^(\\*\\*?)(?:"+n+")?).+?(?=\\2)"),lookbehind:!0},italic:{pattern:RegExp("(^(__?)(?:"+n+")?).+?(?=\\2)"),lookbehind:!0},cite:{pattern:RegExp("(^\\?\\?(?:"+n+")?).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:RegExp("(^@(?:"+n+")?).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:RegExp("(^\\+(?:"+n+")?).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:RegExp("(^-(?:"+n+")?).+?(?=-)"),lookbehind:!0},span:{pattern:RegExp("(^%(?:"+n+")?).+?(?=%)"),lookbehind:!0},modifier:{pattern:RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])"+n),lookbehind:!0,inside:i},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:RegExp('"(?:'+n+')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:RegExp('(^"(?:'+n+')?)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:RegExp('(^")'+n),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:RegExp("!(?:"+n+"|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:RegExp("(^!(?:"+n+"|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:RegExp("(^!)(?:"+n+"|[<>=()])+"),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^)]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),a=t.phrase.inside,o={inline:a.inline,link:a.link,image:a.image,footnote:a.footnote,acronym:a.acronym,mark:a.mark};t.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var d=a.inline.inside;d.bold.inside=o,d.italic.inside=o,d.inserted.inside=o,d.deleted.inside=o,d.span.inside=o;var r=a.table.inside;r.inline=o.inline,r.link=o.link,r.image=o.image,r.footnote=o.footnote,r.acronym=o.acronym,r.mark=o.mark}(e)}e.exports=i,i.displayName="textile",i.aliases=[]}));
//# sourceMappingURL=textile.d50c2b65.js.map
