//your code here
// alert(9)

let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones', 'Metallica'];

// Function to remove articles from the beginning of band names
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names in lexicographic order (excluding articles)
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create the list and add list items
const ul = document.getElementById('band');
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
