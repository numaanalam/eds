import utility from '../../utility/utility.js';
export default function decorate(block) {
  function getformData(block) {
    const [
      placeholder1El,
      placeholder2El,
      placeholder3El,
      button1El,
      button2El
    ] = block.children;



    const placeholder1 = placeholder1El?.textContent.trim();
    const placeholder2 = placeholder2El?.textContent.trim();
    const placeholder3 = placeholder3El?.textContent.trim();
    const button1 = button1El?.textContent.trim();
    const button2 = button2El?.textContent.trim();



    return {
      placeholder1,
      placeholder2,
      placeholder3,
      button1,
      button2
    };
  }

  const teaserData = getFormData(block);


  // const teaserHtml = `
  //   <div class="teaser_wrapper">
  //   ${teaserData.pretitle ? `<p>${teaserData.pretitle}</p>` : ''}
  //     ${teaserData.backgroundImg ? teaserData.backgroundImg.outerHTML : ''}
  //     <div class="teaser_content">
  //       ${teaserData.title ? `<h3>${teaserData.title}</h3>` : ''}
  //       ${teaserData.description ? `${teaserData.description}` : ''}
  //     </div>

  //   </div>
  // `;

  // block.innerHTML = teaserHtml;


  //using utility.sanitize()

  const formHtml = utility.sanitizeHtml(`
  <div>
      <p>jnhn</p>
      </div>
  `);

  block.innerHTML = formHtml;



}



