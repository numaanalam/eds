// import utility from '../../utility/utility.js';
// export default function decorate(block) {
//   function getformData(block) {
// const [
//   placeholder1El,
//   placeholder2El,
//   placeholder3El,
//   button1El,
//   button2El
// ] = block.children;



//     const placeholder1 = placeholder1El?.textContent.trim();
//     const placeholder2 = placeholder2El?.textContent.trim();
//     const placeholder3 = placeholder3El?.textContent.trim();
//     const button1 = button1El?.textContent.trim();
//     const button2 = button2El?.textContent.trim();



//     return {
//       placeholder1,
//       placeholder2,
//       placeholder3,
//       button1,
//       button2
//     };
//   }

//   const teaserData = getFormData(block);



//     const searchButton = document.createElement("button");
//     searchButton.id = "logoutButton";
//     searchButton.className = "search-button";
//     searchButton.textContent = button1;

//     block.appendChild(searchButton);



//   const formHtml = utility.sanitizeHtml(`
//   <div>

//       </div>
//   `);

//   block.innerHTML = formHtml;








// }


export default function decorate(block) {
  // Extract text content from the block's children
  const [
    placeholder1El,
    placeholder2El,
    placeholder3El,
    button1El,
    button2El
  ] = block.children;



  function createLogoutButton() {
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutButton";
    logoutButton.className = "blue-button";
    logoutButton.textContent = logoutText;
    return logoutButton;
  }

  function createModal() {
    const modal = document.createElement("div");
    modal.id = "logoutModal";
    modal.innerHTML = `
      <div class="modal-content">
        <h2>${popupHeading}</h2>
        <p>${popupDesc}</p>
        <button id="yesButton" class="blue-button">${yesText}</button>
        <button id="noButton" class="blue-button">${noText}</button>
      </div>
    `;
    return modal;
  }

  async function callLogoutAPI() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "logout" }),
        }
      );

      if (response.ok) {
        alert("Logout successful");
        // Redirect to the login page or perform another action
        window.location.href = link; // Change the URL to your login page
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out. Please try again.");
    }
  }

  // Fetch data from API
  async function fetchUserData() {
    const apiEndpoint = "https://jsonplaceholder.typicode.com/users/1"; // Sample API endpoint
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  function createProfileCard(data, block) {
    if (!data) return;

    const userDetailsHTML = `
        <div class="grey-bg">
          <div class="user-img">
		        <img src="${logo}" alt="user image">
          </div>
        <div class="user_bx">
            <h4 class="user_name" id="user_name">${data.name}</h4>
            <p class="user_designation" id="user_designation">Relationship Manager</p>
            <p class="user_addr" id="user_addr">${data.address.zipcode}, ${data.address.city}</p>
        </div>
        </div>
    `;

    const userDiv = document.createElement("div");
    userDiv.innerHTML = userDetailsHTML;
    block.appendChild(userDiv);
  }

  function clearLocalStorage() {
    localStorage.removeItem("name");
    // Add more keys to remove if needed
  }

  function setupEventListeners(logoutButton, modal) {
    logoutButton.addEventListener("click", () => {
      modal.style.display = "block";
    });

    const yesButton = modal.querySelector("#yesButton");
    const noButton = modal.querySelector("#noButton");

    yesButton.addEventListener("click", () => {
      modal.style.display = "none";
      clearLocalStorage(); // Clear local storage
      callLogoutAPI(); // Call the API to log out
    });

    noButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  // Create and append the logout button and modal
  const logoutButton = createLogoutButton();
  const modal = createModal();
  block.innerHTML = ""; // Clear existing block content
  block.appendChild(logoutButton);
  block.appendChild(modal);
  setupEventListeners(logoutButton, modal);

  // Fetch user data and create the profile card
  fetchUserData().then((userData) => {
    createProfileCard(userData, block);
  });
}



