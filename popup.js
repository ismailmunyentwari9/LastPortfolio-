const tank = document.querySelector('#modalContainer');
const flames = [
  {
    id: 'flames_001',
    address: 'Tonic',
    picture: 'snapshoot-portfolio.png',
    news: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    newNews: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portNews: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    share: 'Live Link',
    shareSrc: 'Source Link',
  },
  {
    id: 'flames_002',
    address: 'Tonic',
    picture: 'Snapshoot Portfolio.png',
    news: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    newNews: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portNews: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    share: 'Live Link',
    shareSrc: 'Source Link',
  },
  {
    id: 'flames_003',
    address: 'Tonic',
    picture: 'Snapshoot Portfolio-1.png',
    news: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    newNews: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portNews: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    share: 'Live Link',
    shareSrc: 'Source Link',
  },
  {
    id: 'flames_004',
    address: 'Tonic',
    picture: 'Snapshoot Portfolio-2.png',
    news: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    newNews: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portNews: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    share: 'Live Link',
    shareSrc: 'Source Link',
  },
];

// popup  codes ********

function modalTank(popContent) {
  const modalInfo = `
  <div class= "modal-info-container">
    <div class= "modal">
      <div>
      
        <h3>${popContent.address} <i class="fa-solid fa-xmark" id="modal-clean"></i></h3>
        <ul class="business">
          <li><a href="#">CANOPY</a></li>
          <li><div class="dot"></div></li>
          <li>Back End Dev</li>
          <li><div class="dot"></div></li>
          <li>2015</li>
        </ul>
      </div>
      <img src="./images/${popContent.picture}" alt="Work-sample" />
      <div class="insides">
        <div class="insideLeft">
          <p class="busns phones-descr">
            ${popContent.news}
          </p>
          <p class="busns pc-descr">
            ${popContent.newNews}
          </p>
        </div>
        <div class="insideRight">
          <ul class="techs">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul class="techs pc-techs">
            <li>Github</li>
            <li>Ruby</li>
            <li>BootStrap</li>
          </ul>
          <div class="crop"></div>
            <button class="btn modalBtn">
              <div>
                ${popContent.share} <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </button>
            <button class="btn modalBtn">
              <div>
                ${popContent.shareSrc} <i class="fa-brands fa-square-github"></i></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  return modalInfo;
}

function modalFlames(flames = []) {
  let modalFlamesInfo = '';

  flames.forEach((popContent) => {
    modalFlamesInfo += `
    <div class= "works" id= "portfolio">
    <img src="./images/${popContent.picture}" alt="Work-sample" class="img-transition"/>
    <div class="card-work folio-section">
      <h3>${popContent.address}</h3>
      <ul class="business">
        <li><a href="#">CANOPY</a></li>
        <li><div class="dot"></div></li>
        <li>Back End Dev</li>
        <li><div class="dot"></div></li>
        <li>2015</li>
      </ul>
      <p class="busns">
        ${popContent.portNews}
      </p>
      <ul class="techs">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <button class="btn btn-unknown" modal-code="${popContent.id}" id="btn-pg">See Project</button>
    </div>
  </div>
    `;
  });

  return modalFlamesInfo;
}

function modalClean() {
  tank.style.display = 'none';
}

function modalDispaly(popContent) {
  const modalTemplate = modalTank(popContent);
  tank.innerHTML = modalTemplate;
  tank.style.display = 'block';

  const modalCleanButton = document.querySelector('#modal-clean');

  modalCleanButton.addEventListener('click', modalClean);
}

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#folio-section');
  tank.style.display = 'none';

  portfolioSection.innerHTML = modalFlames(flames);

  const pgBtn = document.querySelectorAll('#btn-pg');

  Array.from(pgBtn).forEach((all) => {
    all.addEventListener('click', () => {
      const modalCode = all.getAttribute('modal-code');
      const modalObject = flames.find((popContent) => popContent.id === modalCode);

      modalDispaly(modalObject);
    });
  });
});
