export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = "Prasad";
  quoteWrapper.replaceChildren(blockquote);

  const blockquote1 = document.createElement('blockquote1');
  blockquote1.textContent ="Shivam";
  quoteWrapper.replaceChildren(blockquote1);
}
