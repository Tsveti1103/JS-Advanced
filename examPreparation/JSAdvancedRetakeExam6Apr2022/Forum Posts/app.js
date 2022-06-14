window.addEventListener("load", solve);

function solve() {
  let postTitle = document.getElementById('post-title')
  let postCategory = document.getElementById('post-category')
  let postContent = document.getElementById('post-content')
  let publishBtn = document.getElementById('publish-btn')
  let clearBtn = document.getElementById('clear-btn')
  let reviewList = document.getElementById('review-list')
  let publishedList = document.getElementById('published-list')

  publishBtn.addEventListener("click", publish)
  clearBtn.addEventListener("click", clear)

  function createElement(type, content, elClass) {
    let el = document.createElement(type)
    if (content != '') {
      el.textContent = content
    }
    if (elClass) {
      el.className = elClass
    }
    return el
  }

  function appendAllChild(el, arr) {
    for (let child of arr) {
      el.appendChild(child)
    }
    return el
  }
  function publish() {
    if (postTitle.value != '' && postCategory.value != '' && postContent.value != '') {
      let li = createElement('li', '', 'rpost');
      let article = document.createElement('article');
      let h4 = createElement('h4', postTitle.value);
      let p1 = createElement('p', 'Category: ' + postCategory.value);
      let p2 = createElement('p', 'Content: ' + postContent.value);
      let editBtn = createElement('button', 'Edit', 'action-btn edit');
      let approveBtn = createElement('button', 'Approve', 'action-btn approve');

      article = appendAllChild(article, [h4, p1, p2])
      li = appendAllChild(li, [article, editBtn, approveBtn])

      reviewList.appendChild(li)
      postTitle.value = '';
      postCategory.value = '';
      postContent.value = '';
      editBtn.addEventListener('click', edit);
      approveBtn.addEventListener('click', approve);
    }
  }
  function edit(ev) {
    let liEl = ev.target.parentElement
    let articleEl = liEl.children[0]
    postTitle.value = articleEl.children[0].textContent
    postCategory.value = articleEl.children[1].textContent.slice(10)
    postContent.value = articleEl.children[2].textContent.slice(9)

    articleEl.children[0].textContent = ''
    articleEl.children[1].textContent = ''
    articleEl.children[2].textContent = ''
    liEl.remove()
  }
  function approve(ev) {
    let liEl = ev.target.parentElement
    liEl.children[1].remove()
    liEl.children[1].remove()
    publishedList.appendChild(liEl)
  }
  function clear(ev) {
    while (publishedList.hasChildNodes()) {
      publishedList.removeChild(publishedList.firstChild);
    }
  }
}


