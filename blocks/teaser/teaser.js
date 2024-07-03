export default function decorateTeaser(block) {
  function extractTeaserData(block) {
    const [backgroundSection, foregroundSection] = block.children;

    const pictureElement = backgroundSection.querySelector('picture');
    const imageElement = pictureElement?.querySelector('img');
    const altTextElement = backgroundSection.querySelector('img');

    const headingElement = foregroundSection.querySelector('h3');
    const [preTitleElement, descriptionElement] = foregroundSection.querySelectorAll('p');

    if (imageElement) {
      imageElement.removeAttribute('width');
      imageElement.removeAttribute('height');
      const altText = altTextElement?.getAttribute('alt') || 'image';
      imageElement.setAttribute('alt', altText);
    }

    const preTitleText = preTitleElement?.textContent.trim();
    const titleText = headingElement?.textContent.trim();
    const descriptionHTML = descriptionElement ? descriptionElement.outerHTML : '';

    return {
      imageElement,
      preTitleText,
      titleText,
      descriptionHTML
    };
  }

  const teaserData = extractTeaserData(block);
  const teaserMarkup = `
    <div class="teaser-wrapper">
      ${teaserData.preTitleText ? `<p>${teaserData.preTitleText}</p>` : ''}
      ${teaserData.imageElement ? teaserData.imageElement.outerHTML : ''}
      <div class="teaser-content">
        ${teaserData.titleText ? `<h3>${teaserData.titleText}</h3>` : ''}
        ${teaserData.descriptionHTML}
      </div>
    </div>
  `;

  block.innerHTML = teaserMarkup;
}

document.addEventListener('DOMContentLoaded', () => {
  const teaserBlock = document.querySelector('.block.teaser');
  if (teaserBlock) {
    decorateTeaser(teaserBlock);
  }
});
