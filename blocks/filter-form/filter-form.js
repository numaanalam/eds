
export default function decorate(block) {


  const formHtml = `
  <div class="New">
   <p>New Finance Journey</p>  
  </div>
`;
  block.innerHTML = formHtml;


  const placeholder1 = document.createElement("input");
  placeholder1.placeholder = "Mobile no.";
  block.appendChild(placeholder1);

  const placeholder2 = document.createElement("input");
  placeholder2.placeholder = "Booking ID";
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



