export default function decorate(block){
  const[background, foreground] = block.children;
  background.className="bg";
  foreground.className="fg";
}