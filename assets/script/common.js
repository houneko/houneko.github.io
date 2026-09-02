// DOMが読み込まれた後に共通処理を実行
window.addEventListener('DOMContentLoaded', () => {

  // highlight.js が使えるようにする
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  }

  // breadcrumb 初期化
  if (typeof initBreadcrumb === 'function') {
    initBreadcrumb();
  }

  // details 目次の一括開閉
  if (typeof initDetailsOpenClose === 'function') {
    initDetailsOpenClose();
  }

  // 追加があればここに足していく

});

