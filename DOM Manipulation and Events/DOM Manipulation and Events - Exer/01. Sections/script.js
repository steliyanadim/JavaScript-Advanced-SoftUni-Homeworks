function create(words) {
   for (const word of words) {
      const parentEl = document.getElementById('content');

      const div = document.createElement('div');
      div.addEventListener('click', show);
      
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';

      div.appendChild(para);
      parentEl.appendChild(div);

      function show() {
         para.style.display = 'block';
      }
   }
}