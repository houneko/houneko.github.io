hljs.registerLanguage("acl", function(hljs) {
  // キーワードを配列で定義
  const aclCommandsArray = [
    "ACCEPT", "ACCESSDATA", "ACTIVATE", "AGE", "APPEND", "ASSIGN", "BENFORD", "CALCULATE", "CLASSIFY",
    "CLOSE", "CLUSTER", "COMMENT", "COUNT", "CREATE LAYOUT", "CROSSTAB", "CVSEVALUATE", "CVSPREPARE",
    "CVSSAMPLE", "DEFINE COLUMN", "DEFINE FIELD", "DEFINE FIELD...COMPUTED", "DEFINE RELATION",
    "DEFINE REPORT", "DEFINE TABLE DB", "DEFINE VIEW", "DELETE", "DIALOG", "DIRECTORY", "DISPLAY",
    "DO REPORT", "DO SCRIPT", "DUMP", "DUPLICATES", "ESCAPE", "EVALUATE", "EXECUTE", "EXPORT",
    "EXTRACT", "FIELDSHIFT", "FIND", "FUZZYDUP", "FUZZYJOIN", "GAPS", "GETSAPDATA", "GROUP",
    "HB_API_DELETE", "HB_API_GET", "HB_API_PATCH", "HB_API_POST", "HB_API_PUT", "HELP", "HISTOGRAM", "IF",
    "IMPORT ACCESS", "IMPORT DELIMITED", "IMPORT EXCEL", "IMPORT GRCPROJECT", "IMPORT GRCRESULTS",
    "IMPORT LAYOUT", "IMPORT MULTIDELIMITED", "IMPORT MULTIEXCEL", "IMPORT ODBC", "IMPORT PDF",
    "IMPORT PRINT", "IMPORT SAP", "IMPORT XBRL", "IMPORT XML", "INDEX", "JOIN", "LIST", "LOCATE",
    "LOOP", "MERGE", "NOTES", "NOTIFY", "OPEN", "OUTLIERS", "PASSWORD", "PAUSE", "PREDICT", "PRINT",
    "PROFILE", "QUIT", "RANDOM", "RCOMMAND", "REFRESH", "RENAME", "REPORT", "RETRIEVE", "SAMPLE", "SAVE",
    "SAVE LAYOUT", "SAVE LOG", "SAVE TABLELIST", "SAVE WORKSPACE", "SEEK", "SEQUENCE", "SET", "SIZE", "SORT",
    "SPLITVALUES", "STATISTICS", "STRATIFY", "SUMMARIZE", "TOP", "TOTAL", "TRAIN", "VERIFY"
  ];

  // 組み込み関数も配列で定義
  const aclFunctionsArray = [
    "ABS", "AGE", "ALLTRIM", "ASCII", "AT", "BETWEEN", "BINTOSTR", "BIT", "BLANKS", "BYTE", "CDOW", "CHR",
    "CLEAN", "CMOY", "COS", "CTOD", "CTODT", "CTOT", "CUMIPMT", "CUMPRINC", "DATE", "DATETIME", "DAY",
    "DBYTE", "DEC", "DHEX", "DICECOEFFICIENT", "DIGIT", "DOW", "DTOU", "EBCDIC", "EFFECTIVE", "EOMONTH",
    "EXCLUDE", "EXP", "FILESIZE", "FIND", "FINDMULTI", "FREQUENCY", "FTYPE", "FVANNUITY", "FVLUMPSUM",
    "FVSCHEDULE", "GETOPTIONS", "GOMONTH", "HASH", "HEX", "HOUR", "HTOU", "INCLUDE", "INSERT", "INT", "IPMT",
    "ISBLANK", "ISDEFINED", "ISFUZZYDUP", "LAST", "LEADING", "LEADINGZEROS", "LENGTH", "LEVDIST", "LOG",
    "LOWER", "LTRIM", "MAP", "MASK", "MATCH", "MAXIMUM", "MINIMUM", "MINUTE", "MOD", "MONTH", "NOMINAL",
    "NORMDIST", "NORMSINV", "NOW", "NPER", "OCCURS", "OFFSET", "OMIT", "PACKED", "PI", "PMT", "PPMT",
    "PROPER", "PROPERTIES", "PVANNUITY", "PVLUMPSUM", "PYDATE", "PYDATETIME", "PYLOGICAL", "PYNUMERIC",
    "PYSTRING", "PYTIME", "RAND", "RATE", "RDATE", "RDATETIME", "RECLEN", "RECNO", "RECOFFSET", "REGEXFIND",
    "REGEXREPLACE", "REMOVE", "REPEAT", "REPLACE", "REVERSE", "RJUSTIFY", "RLOGICAL", "RNUMERIC", "ROOT",
    "ROUND", "RSTRING", "RTIME", "SECOND", "SHIFT", "SIN", "SORTWORDS", "SOUNDEX", "SOUNDSLIKE", "SPLIT",
    "STOD", "STODT", "STOT", "STRING", "SUBSTR", "TAN", "TEST", "TIME", "TODAY", "TRANSFORM", "TRIM",
    "UNSIGNED", "UPPER", "UTOD", "VALUE", "VERIFY", "WORKDAY", "YEAR", "ZONED", "ZSTAT"
  ];

  return {
    name: "ACL",
    case_insensitive: true,
    keywords: {
      keyword: aclCommandsArray.join(" "),
      literal: "true false null"
    },
    contains: [
      // コメント（COMMENT文）
      hljs.COMMENT(/\b(COM|COMMENT)\b/, /$/, { relevance: 10 }),

      // 文字列（ダブルクォート）
      {
        className: "string",
        begin: /"/,
        end: /"/
      },

      // 文字列（シングルクォート）
      {
        className: "string",
        begin: /'/,
        end: /'/
      },

      // 数値（小数対応）
      {
        className: "number",
        begin: /\b\d+(\.\d+)?\b/,
        relevance: 0
      },

      // 組み込み関数（関数呼び出しの形で出現）
      {
        className: "built_in",
        begin: new RegExp(`\\b(${aclFunctionsArray.join("|")})\\s*(?=\\()`, "i"),
        relevance: 10
      }
    ]
  };
});
