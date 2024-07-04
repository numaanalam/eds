export default function decorate(block) {
  function getTeaserData(block) {
    const [backgroundContainer, foregroundContainer] = block.children;

    const backgroundImageEl = backgroundContainer.querySelector('picture');
    // const backgroundImageAltEl = backgroundContainer.querySelector('img');

    const titleEl = foregroundContainer.querySelector('h3');

    const [
      preTitleEl,
      descriptionEl
    ] = foregroundContainer.querySelectorAll('p');

    const backgroundImg = backgroundImageEl?.querySelector('img');
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
    ${teaserData.pretitle ? `<p>${teaserData.pretitle}</p>` : ''}
      ${teaserData.backgroundImg ? teaserData.backgroundImg.outerHTML : ''}


      <div class="teaser_content">
        ${teaserData.title ? `${teaserData.title}` : ''}
        ${teaserData.description ? `${teaserData.description}` : ''}
      </div>

    </div>
  `;

  block.innerHTML = teaserHtml;
}

// document.addEventListener('DOMContentLoaded', () => {
//   const teaserBlock = document.querySelector('.block.teaser');
//   if (teaserBlock) {
//     decorateTeaser(teaserBlock);
//   }
// });

