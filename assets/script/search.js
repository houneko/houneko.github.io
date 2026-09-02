let index = [];

fetch("/search-index.json")
  .then(res => res.json())
  .then(data => {
    index = data;

    console.log(
      `Search index loaded (${index.length} pages)`
    );
  })
  .catch(err => {
    console.error(err);
  });

document.getElementById("searchBox").addEventListener("input", function (e) {

  const keyword = e.target.value.toLowerCase();

  const results = index.filter(item => {

    return (
      item.title.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword) ||
      item.keywords.join(" ").toLowerCase().includes(keyword)
    );
  });

  render(results);
});

function render(results) {

  const el = document.getElementById("searchResult");

  el.innerHTML = results.map(r => `
    <div class="result-item">
      <a href="${r.url}">${r.title}</a>
      <p>${r.description}</p>
    </div>
  `).join("");
}