/* DATA
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

EXERCISE
Utilizzando i dati forniti, creare un array di oggetti 
per rappresentare i membri del team.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la 
stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede. 

*/

// objects array
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

console.log(team);

const row = document.querySelector(".row");

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
