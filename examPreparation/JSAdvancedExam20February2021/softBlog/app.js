function solve() {
   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const createBtn = document.getElementsByClassName('btn create')[0];

   const posts = document.querySelector(`.site-content main section`)
   const archive = document.querySelector(`.archive-section ol`)

   createBtn.addEventListener('click', create);

   function createElement(type, content, elClass) {
      let el = document.createElement(type)
      el.textContent = content
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
   function create(ev) {
      ev.preventDefault();
      const article = document.createElement('article');
      const h1 = createElement('h1',title.value);
      const pCategory = createElement('p','Category:');
      const strongCategory = createElement('strong',category.value);
      const pCreator = createElement('p','Creator:');
      const strongCreator = createElement('strong',creator.value);
      const pContent = createElement('p',content.value);
      const divBtns = createElement('div','','buttons');
      const deleteBtn = createElement('button','Delete','btn delete');
      const archiveBtn = createElement('button','Archive','btn archive');

      pCategory.appendChild(strongCategory);
      pCreator.appendChild(strongCreator);
      appendAllChild(divBtns,[deleteBtn,archiveBtn]);
      appendAllChild(article,[h1,pCategory,pCreator,pContent,divBtns]);
      posts.appendChild(article)
     
      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

      deleteBtn.addEventListener('click', deletePost);
      archiveBtn.addEventListener('click', archivePost);
      function deletePost() {
         ev.preventDefault();
         article.remove();
      }
      function archivePost(ev){
         ev.preventDefault()
         const li = createElement('li',h1.textContent)
         archive.appendChild(li);
         article.remove();
         Array.from(archive.children).sort((a,b)=> (a.textContent).localeCompare(b.textContent)).forEach(li => archive.appendChild(li))
      }
   }
}
