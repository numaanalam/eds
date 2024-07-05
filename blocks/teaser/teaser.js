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



  // //using utility.sanitize method
  //   const teaserHtml = utility.sanitizeHtml(` 
  //       ${teaserData.pretitle ? `<p>${teaserData.pretitle}</p>` : ''}
  //         ${teaserData.backgroundImg ? teaserData.backgroundImg.outerHTML : ''}
  //         <div class="teaser_content">
  //           ${teaserData.title ? `<h3>${teaserData.title}</h3>` : ''}
  //           ${teaserData.description ? `${teaserData.description}` : ''}
  //         </div>
  //     `);

  //   // block.innerHTML = teaserHtml;

  //   block.innerHTML = `
  //       <div class= "teaser_wrapper">
  //         ${teaserHtml}
  //       </div>
  //    `;





  const teaserHtml = ` 
  ${teaserData.pretitle ? `<p>${teaserData.pretitle}</p>` : ''}
    ${teaserData.backgroundImg ? teaserData.backgroundImg.outerHTML : ''}
    <div class="teaser_content">
      ${teaserData.title ? `<h3>${teaserData.title}</h3>` : ''}
      ${teaserData.description ? `${teaserData.description}` : ''}
    </div>
`;

  // block.innerHTML = teaserHtml;

  block.innerHTML = `
  <div class= "teaser_wrapper">
    ${teaserHtml}
  </div>
`;




}



