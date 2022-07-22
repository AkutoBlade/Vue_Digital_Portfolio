<template>
  <section>
    <div class="carousels" data-carousel>
      <button class="carousel-buttons prevs" data-carousel-button="prev">
        &#8656;
      </button>
      <button class="carousel-buttons nexts" data-carousel-button="next">
        &#8658;
      </button>
      <ul data-slides>
        <li
          v-for="project in projects.slice(0, 1)"
          :key="project.id"
          class="slides"
          data-active
        >
          <img :src="project.img" alt="" />
          <div class="projectBack">
            <div class="row title-position">
              <h1>{{ project.title }}</h1>
            </div>
            <div class="row lan-position">
              <h4>{{ project.language }}</h4>
            </div>
            <div class="row desc-position">
              <p class="fs-5">{{ project.desc }}</p>
            </div>
            <a :href="project.live" class="buttons b-1" type="button">Live</a>
            <a :href="project.github" class="buttons b-2" type="button"
              >Github</a
            >
          </div>
        </li>
        <li
          v-for="project in projects.slice(1, 6)"
          :key="project.id"
          class="slides"
        >
          <img :src="project.img" alt="" />
          <div class="projectBack">
            <div class="row title-position">
              <h1>{{ project.title }}</h1>
            </div>
            <div class="row lan-position">
              <h4>{{ project.language }}</h4>
            </div>
            <div class="row desc-position">
              <p class="fs-5">{{ project.desc }}</p>
            </div>
            <a :href="project.live" class="buttons b-1" type="button">Live</a>
            <a :href="project.github" class="buttons b-2" type="button"
              >Github</a
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  border-radius: 50px;
}
template {
  margin: 0;
}

.projectBack {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.493);
  position: absolute;
  top: 0%;
  border-radius: 50px;
}

.title-position {
  position: absolute;
  top: 25%;
  left: 9%;
  color: #8000ff;
}

.lan-position {
  position: absolute;
  top: 35%;
  left: 9%;
}
.desc-position {
  position: absolute;
  top: 45%;
  left: 9%;
  color: #38046b;
}

.buttons {
  text-decoration: none;
  position: absolute;
  top: 55%;
  left: 9%;
  width: 85px;
  background: #8000ff;
  color: white;
  text-align: center;
  border-radius: 50px;
  height: 25px;
}

.b-1 {
  left: 20%;
}

.carousels {
  width: 50vw;
  height: 50vh;
  position: relative;
  box-shadow: 0vw 0vw 1vw black;
  border-radius: 50px;
}

.carousels > ul {
  list-style: none;
}

.slides {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 300ms opacity ease-in-out;
}

.slides > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50px;
}

.slides[data-active] {
  opacity: 1;
}

.carousel-buttons {
  position: absolute;
  background: none;
  border: none;
  font-size: 4rem;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  color: white;
  text-shadow: 0vw 0vw 1vw black;
}

.carousel-buttons:hover,
.carousel-buttons:focus {
  font-size: 4.5rem;
}

.prevs {
  right: 110%;
}

.nexts {
  left: 110%;
}
</style>
