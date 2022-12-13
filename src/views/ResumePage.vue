<template>
 <section id="history" class=" container-fluid rounded-2">
        <div class="timeline" id="timeline">
          <div class="line"></div>
        
  <div class="timeline-section bg-light text-dark timeline-right aos-init aos-animate" data-aos="fade-right">
      <p class="timeline-header">2022 - Present</p>
      <div class="timeline-content">
        <h4 class="timeline-title">Life Choices - <span class="timeline-role">Student /Aspiring Web Developer</span></h4>
        <p class="timeline-description">As an aspiring web developer student at Life Choices, it's my life long dream and endeavour to become a web developer as well a aspiring app developer those are my goals as a student Life Choice Academy</p>
        <h6 class="timeline-heading">My Goals And Achievement:</h6>
        <ul>
        <li>I have developed a few web pages, which I present further down the web page</li><li>I've learnt 4 programmable languages in the last past 2 months </li><li>I've inner drive and ambition to learn as much as possible, so that I can master my skills at coding</li><li>I assist my collagues to better there skills</li>
        </ul>
        <!-- <button class="form-submit" onclick="toggleReferenceModal(0)">Reference</button> -->
      </div>
      <!-- <div timeline-modal="0" class="timeline-modal">
          <p class="timeline-header">Reference</p><p>
          </p><div class="timeline-content">
            <h4 class="timeline-title">Godwin Dzvapatsva - <span class="timeline-role">Head of Curriculum</span></h4>
            <p class="timeline-description">071 248 2443</p>
          </div>
          <button class="timeline-modal-button" onclick="toggleReferenceModal(0)">x</button>
      </div> -->
  </div>

  <div class="timeline-section bg-light text-dark aos-init aos-animate" data-aos="fade-left">
      <p class="timeline-header">2021</p>
      <div class="timeline-content">
        <h4 class="timeline-title">Spine Road- <span class="timeline-role">I.T student</span></h4>
        <p class="timeline-description">The pinnical of my coding career when I started learning coding language and developing applications</p>
        <h6 class="timeline-heading">My Accomplishments:</h6>
        <ul>
        <li>Learnt how to create applications in Delphi</li><li>Created an application to benefit other orginizations</li>
        </ul>
        <!-- <button class="timeline-btn form-submit" onclick="toggleReferenceModal(1)">Reference</button> -->
      </div>
      <!-- <div timeline-modal="1" class="timeline-modal">
          <p class="timeline-header">Reference</p><p>
          </p><div class="timeline-content">
            <h4 class="timeline-title">Elrico Heinen - <span class="timeline-role">CEO</span></h4>
            <p class="timeline-description">083 256 1718</p>
          </div>
          <button class="timeline-modal-button" onclick="toggleReferenceModal(1)">x</button>
      </div> -->
  </div>
  </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#history {
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    background: url("../assets/LandingPage.jpg")no-repeat center center/cover;
    width:100%;
    min-height: 100vh;
background-attachment: fixed;
overflow-x:hidden
  }


 
  /* TIMELINE CONTAINER */
  .timeline {
    display: flex;
    flex-direction: column;
  }
  /* TIMELINE CARDS */
  .timeline-section,
  .timeline-modal {
    color: white;
    box-shadow: 0vw 0px 1vw rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    width: 50%;
  }
  .timeline-section:nth-of-type(even) {
    flex-direction: row-reverse;
    text-align: right;
    margin-botttom: 2%;
  }
  
  .timeline-section:nth-of-type(odd) {
    align-self: flex-end;
  }
  
  /* TIMELINE CARD CONTENT */
  .timeline-header {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    text-align: center;
    padding: 20px;
    background-color: var(--blueGray4);
    text-transform: uppercase;
    background-color:#8000ff ;
    color:white;
    border-radius: 150px;

  }
  
  .timeline-content {
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .timeline-title,
  .timeline-heading {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
  
  .timeline-role {
    font-size: 0.8rem;
  }
  
  .timeline-description {
    margin-bottom: 20px;
  }
  .timeline-content ul {
    list-style-type: none;
  }
  .timeline-content li {
    border-bottom: 2px solid #8000ff;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  
  .timeline-modal {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(-11px, -11px);
    /* display: none; */
    transition: all 0.3s linear;
    z-index: -20;
    opacity: 0;
  }
  
  .timeline-modal.active {
    /* display: flex; */
    top: 0;
    opacity: 1;
    z-index: 1;
  }
  

  
  .timeline-section {
    background-color: var(--blueGray4);
    border-radius: 50px;
    margin-top: 20px;
    font-size: 1rem;
  }
  @media screen and (max-width: 790px) {
    .timeline-section,
    .timeline-modal {
      height: fit-content;
      flex-direction: column;
      width: 100%;
    }
    .timeline-modal.active {
      height: 100%;
    }
    .timeline-section:nth-of-type(even) {
      text-align: left;
      flex-direction: column;
    }
    .timeline-section:nth-of-type(odd) {
      align-self: flex-start;
    }
  
    .timeline-header {
      writing-mode: unset;
      transform: rotate(0deg);
    }
    .timeline-content {
      padding: 20px;
    }
    .timeline-title,
    .timeline-heading {
      font-size: 1rem;
    }
  }

</style>