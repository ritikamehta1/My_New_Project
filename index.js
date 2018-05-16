const form = document.querySelector('form#movieForm')

function renderListItem(label, value) {
  const item = document.createElement('li')
  item.textContent = `${label}: `
  try {
    item.appendChild(value)
  } catch(e) {
    item.textContent += value
  }
  return item
}

function renderList(data) {
  const list = document.createElement('ul')
  Object.keys(data).forEach(label => {
    const item = renderListItem(label, data[label])
    list.appendChild(item)
  })
  return list
}

const handleSubmit = function(ev) {
  console.log('I\'m clicking the go button')  
  ev.preventDefault()
  const form = ev.target
  console.log(form)
  const movie = {
    'Movie': form.movieName.value,
    // '/action_page.php': form.genre.value,
  }
console.log(movie)
  const list = renderList(movie)
  const movies = document.querySelector('#movies')
  movies.appendChild(list)

  form.reset()
  form.movieName.focus()
}

form.addEventListener('submit', handleSubmit)
