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
  <form class="cd_form" id="filter_form" novalidate="novalidate">
            <div class="row">
                <div class="col-sm-6 col-md-3 form-group">
                    <input type="text" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" data-error="Please enter valid Number" class="form-control mobileNumber is-valid" name="mobileNumber" maxlength="10" placeholder=${FormData.placeholder1} id="mobileNumber" tabindex="7" aria-invalid="false">
                </div>

                <div class="col-sm-6 col-md-3 form-group">
                    <input type="text" onkeypress="return event.charCode >= 97 &amp;&amp; event.charCode <= 122 || event.charCode >= 65 &amp;&amp; event.charCode <= 90 || event.charCode >= 48 &amp;&amp; event.charCode <= 57" class="form-control" placeholder="Booking ID" id="bookingID" tabindex="8">
                </div>

                <div class="col-sm-6 col-md-3 form-group">
                    <input type="text" onkeypress="return event.charCode >= 97 &amp;&amp; event.charCode <= 122 || event.charCode >= 65 &amp;&amp; event.charCode <= 90 || event.charCode >= 48 &amp;&amp; event.charCode <= 57" class="form-control" placeholder="DMS Enquiry" id="enquiryId" tabindex="9">
                </div>

                <div class="col-sm-6 col-md-3 form-group">
                    <button type="button" class="btn btn-dealer" id="dealer_filter_search">
                        Search
                    </button>
                    <button type="button" class="btn btn-dealer clear_new_finance" style="display: inline-block;">
                        Clear All
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">

                </div>

            </div>
        </form>

  `);

  block.innerHTML = formHtml;



}



