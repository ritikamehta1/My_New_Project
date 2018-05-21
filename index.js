class App {
    constructor(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        
        document
            .querySelector(selectors.formSelector) 
            .addEventListener('submit', ev => {
                ev.preventDefault()
                this.handleSubmit(ev) 
            })     
    }

    removeFlick(flick, ev) {
        //remove from DOM
        const item = ev.target.closest('.flick')
        item.remove()

        //remove from array
        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)
    }

    favFlick(flick, ev) {
        const item = ev.target.closest('.flick')
        flick.fav = item.classList.toggle('fav')
        
    }

    toggleEditable(flick, ev) {
        const item = ev.target.closest('.flick')
        const btn = item.querySelector('.edit.button')
        const nameField = item.querySelector('.flickName')

        if (nameField.isContentEditable) {
            //make it no longer editable
            nameField.contentEditable = false
            btn.textContent = 'edit'
            btn.classList.remove('success')

            //save changes
            flick.name = nameField.textContent
        } else {
            //make it editable
            nameField.contentEditable = true
            nameField.focus()
            btn.textContent = 'save'
            btn.classList.add('success')
        }
    }

    saveOnEnter(flick, ev) {
        if (ev.key === 'Enter') {
            this.toggleEditable(flick, ev)
        } 
    }

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id

        const nameSpan = item.querySelector('.flickName')
        nameSpan.textContent = flick.name
        nameSpan.addEventListener(
            'keypress',
            this.saveOnEnter.bind(this, flick)
        )

        item
            .querySelector('.remove.button')
            .addEventListener('click', this.removeFlick.bind(this, flick)) 
        
        item
            .querySelector('.fav.button')
            .addEventListener(
                'click',
                this.favFlick.bind(this, flick)
            )
        
        item   
            .querySelector('.edit.button')
            .addEventListener(
                'click',
                this.toggleEditable.bind(this, flick)
            )

        
            return item
    }

    handleSubmit(ev) {
      ev.preventDefault() 
      const f = ev.target
      const flick = {
          id: ++this.max,  
          name: f.flickName.value,
          fav: false,
      }

      this.flicks.unshift(flick)

      const item = this.renderListItem(flick)
      this.list.insertBefore(item, this.list.firstElementChild)

      f.reset()
    }
}

const app = new App({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})


// const form = document.querySelector('form#movieForm')

// function renderListItem(label, value) {
//   const item = document.createElement('li')
//   item.textContent = `${label}: `
//   try {
//     item.appendChild(value)
//   } catch(e) {
//     item.textContent += value
//   }
//   return item
// }

// function renderList(data) {
//   const list = document.createElement('ul')
//   Object.keys(data).forEach(label => {
//     const item = renderListItem(label, data[label])
//     list.appendChild(item)
//   })
//   return list
// }

// const handleSubmit = function(ev) { 
//   ev.preventDefault()
//   const form = ev.target
//   const movie = {
//     'Movie': form.movieName.value,
//     'Genre': form.genre.value,
//   }
//   const list = renderList(movie)
//   const movies = document.querySelector('#movies')
//   movies.appendChild(list)

//   form.reset()
//   form.movieName.focus()
// }

// form.addEventListener('submit', handleSubmit)
