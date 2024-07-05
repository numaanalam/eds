import utility from "../../utility/utility";

export default function decorate(block) {
  function getTeaserData(block) {
    const [
      backgroundImageEl,
      preTitleEl,
      titleEl,
      descriptionEl,
    ] = block.children;

    // const image = imageEl?.querySelector('picture');
    // const title = titleEl?.querySelector('h3');
    // const pretitle = preTitleEl?.querySelector('p');
    // const description = descriptionEl?.querySelector('p');


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




  const teaserHtml = utility.sanitizeHtml(` 
      ${teaserData.pretitle ? `<p>${teaserData.pretitle}</p>` : ''}
        ${teaserData.backgroundImg ? teaserData.backgroundImg.outerHTML : ''}
        <div class="teaser_content">
          ${teaserData.title ? `<h3>${teaserData.title}</h3>` : ''}
          ${teaserData.description ? `${teaserData.description}` : ''}
        </div>
    `);

  // block.innerHTML = teaserHtml;

  block.innerHTML = `
      <div class= "teaser_wrapper">
        ${teaserHtml}
      </div>
   `;


  //   const teaserHtml = utility.sanitizeHtml(`
  //   ${teaserData.pretitle ? `<p class="teaser_pretitle">${teaserData.pretitle}</p>` : ''}
  //   ${teaserData.backgroundImg ? `<div class="teaser_background">${teaserData.backgroundImg.outerHTML}</div>` : ''}
  //   <div class="teaser_content">
  //     ${teaserData.title ? `<h3 class="teaser_title">${teaserData.title}</h3>` : ''}
  //     ${teaserData.description ? `<div class="teaser_description">${teaserData.description}</div>` : ''}
  //   </div>
  // `);

  //   block.outerHTML = `
  //   <div class="teaser_wrapper">
  //     ${teaserHtml}
  //   </div>
  // `;

  // const teaserHtml = utility.sanitizeHtml(`
  //   <div class="teaser-background">
  //     ${backgroundImageEl ? backgroundImageEl.outerHTML : ''}
  //   </div>
  //   <div class="pretitle">
  //     ${teaserData.pretitle ? `<p">${teaserData.pretitle}</p>` : ''}
  //   </div>
  //   <div class="title">
  //     ${teaserData.title ? `<p">${teaserData.title}</p>` : ''}
  //   </div>
  //   <div class="description">
  //     ${description ? `<p class="teaser-description">${descriptionEl.textContent}</p>` : ''}
  //   </div>
  // `);

  // // Set the innerHTML of the block to the constructed teaser HTML
  // block.innerHTML = `
  //   <div class="teaser-wrapper">
  //     ${teaserHtml}
  //   </div>
  // `;


}



