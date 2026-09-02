// ナビゲーションバーを共通化するためのJavaScript
function loadNavbar() {
  // 現在のページのURLを取得
  const currentPage = window.location.pathname;
  console.log('現在のページ: ',currentPage)

  // navbar.htmlのパスを動的に設定
  let navbarPath = '';

  if (currentPage.includes('vscode/')) {
    // hogeフォルダ内のページの場合、navbar.htmlのパスを指定
    navbarPath = '../navbar.html';  // 「../」で上層に移動
  } else {
    // それ以外の場合（例えば、トップページなど）
    navbarPath = 'navbar.html';
  }
  console.log('ナビゲーションバーのパス: ',navbarPath)
  

  // navbar.htmlを非同期で取得
  fetch(navbarPath)  
    .then(response => response.text())  // テキストとして取得
    .then(data => {
      // navbar-containerに挿入
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('ナビゲーションバーの読み込みエラー:', error));
}

// ページ読み込み時にナビゲーションバーを読み込む
loadNavbar();
