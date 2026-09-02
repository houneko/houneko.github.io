//ぱんくずリスト用のベースフォルダを指定
const BASE_PATH = window.ENV_CONFIG?.BASE_PATH || "";

////////////////////////////////////////////////////////////////////////////////////////////////
// function / generateBreadcrumbFromMeta
////////////////////////////////////////////////////////////////////////////////////////////////
function generateBreadcrumbFromMeta() {
  const container = document.getElementById("breadcrumb");
  //console.log(container);
  const meta = document.querySelector('meta[name="breadcrumb"]');
  if (!container || !meta?.content) return;

  const parts = meta.content.split(">").map(s => s.trim());

  // 最後の要素は表示しないので、配列から除外
  const displayParts = parts.slice(0, parts.length - 1);
  // 最後の要素（現在のページ）を表示する
  // const displayParts = parts;

  const breadcrumbHtml = displayParts.map((part) => {
    const [label, relPath] = part.split(":").map(s => s.trim());
    if (!relPath) return label;  // relPathなしはそのままテキスト表示（安全策）

    return `<a href="${BASE_PATH + relPath}">${label}</a>`;
  });

  // 区切り文字は「›」で、前後にスペース（&nbsp;）を入れている
  container.innerHTML = breadcrumbHtml.join('&nbsp;<span style="margin: 0 1em;">›</span>&nbsp;');

  const breadcrumb = breadcrumbHtml.join(
    '&nbsp;<span style="margin:0 1em;">›</span>&nbsp;'
  );

  container.innerHTML = `
  <span class="breadcrumb-links">
    ${breadcrumb}
  </span>

  <a class="breadcrumb-search" href="${BASE_PATH}/pages/search.html">
    <i class="fa-solid fa-magnifying-glass"></i> 検索
  </a>
`;
}

// DOMの完了はcommon.jsに一括するように変更。
// breadcrumb.jsで初期化関数を定義して、common.jsからDOM完了時にコールするようにする
//window.addEventListener("DOMContentLoaded", generateBreadcrumbFromMeta);


////////////////////////////////////////////////////////////////////////////////////////////////
// function / openDetailsFromHash
////////////////////////////////////////////////////////////////////////////////////////////////
function openDetailsFromHash() {
  const hash = location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target || target.tagName !== "DETAILS") return;

  // 自分を開く
  target.open = true;

  // 親の details もすべて開く（ネスト対応）
  let parent = target.parentElement;
  while (parent) {
    if (parent.tagName === "DETAILS") {
      parent.open = true;
    }
    parent = parent.parentElement;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
// function / addSearchButton（検索ボタン）
////////////////////////////////////////////////////////////////////////////////////////////////
// function addSearchButton() {
//   const container = document.getElementById("breadcrumb");
//   if (!container) return;

//   container.insertAdjacentHTML(
//     "afterend",
//     `<div class="search-link">
//             <a href="/search.html">
//                 <i class="fa-solid fa-magnifying-glass"></i> 検索
//             </a>
//         </div>`
//   );
// }

// DOMの完了はcommon.jsに一括するように変更
// breadcrumb.jsで初期化関数を定義して、common.jsからDOM完了時にコールするようにする
//window.addEventListener("DOMContentLoaded", openDetailsFromHash);

////////////////////////////////////////////////////////////////////////////////////////////////
// function / initBreadcrumb
////////////////////////////////////////////////////////////////////////////////////////////////
function initBreadcrumb() {
  generateBreadcrumbFromMeta();
  //addSearchButton();
  openDetailsFromHash();
}



