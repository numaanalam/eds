export default function decorate(block) {
  // const [quoteWrapper, quoteWrapper1] = block.children;

  // const blockquote = document.createElement('blockquote');
  // blockquote.textContent = quoteWrapper.textContent.trim();
  // quoteWrapper.replaceChildren(blockquote);


  // const blockquote1 = document.createElement('blockquote1');
  // blockquote1.textContent = quoteWrapper1.textContent.trim();
  // quoteWrapper1.replaceChildren(blockquote1);

//decorate the quote as blockquote element
  const quoteDiv = block.querySelector(':scope> div > div');
  const blockquote =  document.createElement(tagName,'blockquote');
  blockquote.innerHTML= '"${quoteDiv.innerHTML}"';
  quoteDiv.parentElement.replacewith(blockquote);

//decorate the author
const authorDiv = block.querySelector(':scope> div > div');
if(authorDiv){
  const p = document.createElement(tagName, 'p');
  p.innerHTML = '<em> - ${authorDiv.innerText}</em>';
  authorDiv.parentElement.replacewith(p);
}

}
