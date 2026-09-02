/////////////////////////////////////////////////////////////////////////////////
// details-openclose.js
//  処理概要： 
//    このページの目次は、detailsタグで作っており目次の中にまた目次がある
//    このため、ネストした目次を一括オープン、または一括クローズする
//    ボタンはトグル動作にし全開にしたら表示を「すべて閉じる」に変える（逆も）
//

function initDetailsOpenClose() {
  const detailsList = Array.from(document.querySelectorAll(".tocall"));
  const toggleBtn = document.getElementById("details-toggleAll");
  
  debugLog('details-openclose loaded', detailsList);

  if (!detailsList.length || !toggleBtn) return;

  // 初期状態：すべて開く
  detailsList.forEach(d => {
    d.open = true;
  });

  // ボタン表示も変更
  toggleBtn.textContent = 'すべて閉じる';

  toggleBtn.addEventListener("click", () => {

  // 1つでも開いているか？
  const anyOpen = detailsList.some(d => d.open);

    if (anyOpen) {
      // 閉じる：子 → 親（閉じる時は子から閉じていく方がいいみたい）
      [...detailsList].reverse().forEach(d => {
        d.open = false;
      });
      // 全て閉じたら、ボタンの表示「すべて開く」に変える
      toggleBtn.textContent = 'すべて開く';
    } else {
      // 開く：親 → 子（開く時は親から開く方がいいみたい）
      detailsList.forEach(d => {
        d.open = true;
      });
      // 全て開いたら、ボタンの表示「すべて閉じる」に変える
      toggleBtn.textContent = 'すべて閉じる';
    }
  });
}

