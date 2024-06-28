export default function decorate(block) {
  const [quoteWrapper, quoteWrapper1] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);


  const blockquote1 = document.createElement('blockquote1');
  blockquote1.textContent = quoteWrapper1.textContent.trim();
  quoteWrapper1.replaceChildren(blockquote1);
}
