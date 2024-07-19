
import { fetchPlaceholders } from '../../scripts/aem.js';
export default async function decorate(block) {

  const [titleEl, themeEl] = block.children;

  const {
    mobile,
    bookingId
  } = await fetchPlaceholders();

  console.log(bookingId);

  const title = titleEl?.textContent.trim();

  const formHtml = `
  <div class="New">
   <p>${title}</p>  
   <div class="col-xs-6 col-md-3 form-group">
                        <input type="text"
                            onkeypress="return event.charCode >= 97 &amp;&amp; event.charCode <= 122 || event.charCode >= 65 &amp;&amp; event.charCode <= 90 || event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                            class="form-control is-invalid" placeholder="${bookingId}" id="bookingID" tabindex="2">

                    </div>

  </div>
`;
  block.innerHTML = formHtml;


  const placeholder1 = document.createElement("input");
  placeholder1.placeholder = mobile;
  block.appendChild(placeholder1);

  const placeholder2 = document.createElement("input");
  placeholder2.placeholder = bookingId;
  block.appendChild(placeholder2);

  const placeholder3 = document.createElement("input");
  placeholder3.placeholder = "DMS Enquiry";
  block.appendChild(placeholder3);

  const button1 = document.createElement("button");
  button1.textContent = "Search";
  block.appendChild(button1);

  const button2 = document.createElement("button");
  button2.textContent = "Clear";
  block.appendChild(button2);

}



