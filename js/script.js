// objects array --> team
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    pic: "walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    pic: "scott-estrada-developer.jpg",
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg",
  },
];

//grab hmtl elements
const row = document.querySelector(".row");
const joinBtn = document.getElementById("join");
const userNameInput = document.getElementById("name");
const userRoleInput = document.getElementById("role");

// join the team btn
joinBtn.addEventListener("click", function () {
  // grab input values given by the user
  let userName = userNameInput.value;
  let userRole = userRoleInput.value;
  // create a new object member
  const newMember = {
    name: userName,
    role: userRole,
  };
  //add newmember to team
  team.push(newMember);
  // add newmemebr in row.inenrHtml
  row.innerHTML += `
     <div class="card">
            <img src="https://picsum.photos/322/345" alt="${newMember.name}" srcset="" />
            <p id="name">${newMember.name}</p>
            <p id="role">${newMember.role}</p>
    </div>
  `;
  // Empty fields
  userNameInput.value = "";
  userRoleInput.value = "";
});

// Add memebers into row.innerHTML iterating through each memeber
for (let i = 0; i < team.length; i++) {
  const currentMember = team[i];
  console.log(currentMember);
  row.innerHTML += `
     <div class="card">
            <img src="img/${currentMember.pic}" alt="${currentMember.name}" srcset="" />
            <p id="name">${currentMember.name}</p>
            <p id="role">${currentMember.role}</p>
    </div>
  `;
}
