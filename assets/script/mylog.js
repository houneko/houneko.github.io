// ---------------------------------------------------------------------------
// ログ処理
//  フラグ： ログ出力を制御用、trueでログ出力。本番リリース時には falseにする
//  関数  ： args引数の型と値を表示する
//  その他： MYDEBUG変数は、my-env.jsで定義する（trueならログ出力する）
window.debugLog = function (...args) {
  const DEBUG = window.ENV_CONFIG?.MYDEBUG ?? false;
  if (!DEBUG) return;

  args.forEach((arg, index) => {
    let type = typeof arg;

    if (Array.isArray(arg)) type = 'array';
    if (arg === null) type = 'null';

    console.log(`[arg${index}] type: ${type}, value:`, arg);
  });
};
