export default function decorateTeaser(block) {
  function getTeaserData(block) {
    const [backgroundContainer, foregroundContainer] = block.children;

    const backgroundImageEl = backgroundContainer.querySelector('picture');
    const backgroundImageAltEl = backgroundContainer.querySelector('img');

    // const preTitleEl = foregroundContainer.querySelector('p');
    const titleEl = foregroundContainer.querySelector('h3');
    // const descriptionEl = foregroundContainer.querySelector('p');

    const [preTitleEl, descriptionEl] = foregroundContainer.querySelectorAll('p');

    const backgroundImg = backgroundImageEl?.querySelector('img');
    if (backgroundImg) {
      backgroundImg.removeAttribute('width');
      backgroundImg.removeAttribute('height');
      const alt = backgroundImageAltEl?.getAttribute('alt') || 'image';
      backgroundImg.setAttribute('alt', alt);
      // backgroundImg.style.width = '100%';
      // backgroundImg.style.height = '50%';
      // backgroundImg.style.objectFit = 'cover';
      // backgroundImg.style.opacity = '0.75';
    }

    const pretitle = preTitleEl?.textContent.trim();
    const title = titleEl?.textContent.trim();
    const description = Array.from(descriptionEl ? [descriptionEl] : []).map((p) => p.outerHTML).join('');

    return {
      backgroundImg,
      pretitle,
      title,
      description
    };
  }

  const teaserData = getTeaserData(block);
  const teaserHtml = `
    <div class="teaser_wrapper">
      ${teaserData.backgroundImg ? teaserData.backgroundImg.outerHTML : ''}
      <div class="teaser_content">
        ${teaserData.pretitle ? `<p>${teaserData.pretitle}</p>` : ''}
        ${teaserData.title ? `<h3>${teaserData.title}</h3>` : ''}
        ${teaserData.description ? `${teaserData.description}` : ''}
      </div>
    </div>
  `;

  block.innerHTML = teaserHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  const teaserBlock = document.querySelector('.block.teaser');
  if (teaserBlock) {
    decorateTeaser(teaserBlock);
  }
});
