// File: decorate.js
 
// Function to decorate a block with response data
export default function decorate(block) {
  const [quoteWrapper, quoteWrapper1] = block.children; // Assuming block has two children for quote content

  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts"; // Test API endpoint

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      // Status 201 indicates successful creation
      const json = JSON.parse(xhr.responseText);

      const blockquote = document.createElement("blockquote");
      blockquote.innerHTML = `
        <p>Form submitted successfully!</p>
        <p>Response ID: ${json.id}</p>
        <p>First Name: ${json.fname}</p>
        <p>Last Name: ${json.lname}</p>`;

      quoteWrapper.replaceChildren(blockquote);
    }
  };

  const fname = quoteWrapper.textContent.trim(); // Use quoteWrapper content for first name
  const lname = quoteWrapper1.textContent.trim(); // Use quoteWrapper1 content for last name

  const data = JSON.stringify({
    fname: fname,
    lname: lname,
  });

  xhr.send(data);
}
