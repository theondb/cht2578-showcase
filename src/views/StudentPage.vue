<template>
  <div v-if="this.studentExists()">
    <div class="container mx-auto xl:px-60 block mt-10 md:mt-4 mb-4">
      <div class="grid grid-cols-2 md:grid-cols-3 student-hero dark:student-hero-dark">
        <div class="col-span-1 md:col-span-1 sm:mt-5 md:mt-0">
          <img
              :src="student.image_path"
              :alt="student.name" class="my-4 p-3 rounded-full w-full h-auto align-middle border-none"/>
        </div>
        <div class="col-span-1 md:col-span-2 grid grid-cols-1">
          <div class="quote-icon flex items-center justify-self-end mr-10 sm:mt-8 md:mt-0">
            <i class="fas fa-quote-right text-white dark:text-black text-9xl"></i>
          </div>
          <div class="quote-content flex flex-col justify-center mx-auto">
            <div v-if="student.quote" class="mx-7">
              <div v-if="student.quote.length <= 100">
                <h2 class="sm:text-3xl md:text-4xl text-dark dark:text-white font-extrabold whitespace-pre-line">"{{ student.quote }}"</h2>
                <h2 v-if="student.quote_from" class="sm:text-2xl md:text-3xl font-extrabold text-gray-300"> -
                  {{ student.quote_from }}</h2>
              </div>
              <div v-else-if="student.quote.length > 101 && (student.quote.length <= 199) ">
                <h2 class="sm:text-2xl md:text-3xl text-dark dark:text-white font-extrabold whitespace-pre-line">"{{ student.quote }}"</h2>
                <h2 v-if="student.quote_from" class="sm:text-1xl md:text-2xl font-extrabold text-gray-300"> -
                  {{ student.quote_from }}</h2>
              </div>
              <div v-else>
                <h2 class="text-2xl text-dark dark:text-white font-extrabold whitespace-pre-line">"{{ student.quote }}"</h2>
                <h2 v-if="student.quote_from" class="text-1xl font-extrabold text-gray-300"> - {{
                    student.quote_from
                  }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3">
        <h2 class="col-span-full text-5xl mt-10 mb-5 mx-3">{{ student.name }}</h2>
        <p class="col-span-1 mb-5 mx-3 text-gray-300"><i class="fas fa-circle text-green-400"></i> {{
            student.desiredJob
          }}</p>
        <p class="col-span-2 mb-5 text-gray-300"><i class="fas fa-graduation-cap ml-2 text-green-400"></i>
          {{ student.degree }}</p>
        <p class="col-span-full mb-5 mx-3">{{ student.description }}</p>
      </div>

      <div class="grid grid-cols-2 mb-3 mx-3">
        <div class="col-span-1">
          <div class="mr-7 inline text-right" v-if="student.links && student.links.facebook">
            <a :href="student.links.facebook" class="text-2xl text-green-400 hover:text-green-350" target="_blank"
               noreferrer noopener><span><i class="fab fa-facebook-f"></i></span></a>
          </div>
          <div class="mr-7 inline text-right" v-if="student.links && student.links.instagram">
            <a :href="student.links.instagram" class="text-2xl text-green-400 hover:text-green-350" target="_blank"
               noreferrer noopener><span><i class="fab fa-instagram"></i></span></a>
          </div>
          <div class="mr-7 inline text-right" v-if="student.links && student.links.linkedin">
            <a :href="student.links.linkedin" class="text-2xl text-green-400 hover:text-green-350" target="_blank"
               noreferrer noopener><span><i class="fab fa-linkedin-in"></i></span></a>
          </div>
          <div class="mr-7 inline text-right" v-if="student.links && student.links.youtube">
            <a :href="student.links.youtube" class="text-2xl text-green-400 hover:text-green-350" target="_blank"
               noreferrer noopener><span><i class="fab fa-youtube"></i></span></a>
          </div>
          <div class="mr-7 inline text-right" v-if="student.links && student.links.email">
            <a :href="'mailto:' + student.links.email" class="text-2xl text-green-400 hover:text-green-350"
               target="_blank" noreferrer noopener><span><i class="fas fa-envelope"></i></span></a>
          </div>
        </div>
        <div class="ml-3 inline text-right" v-if="student.links && student.links.website">
          <a :href="student.links.website" class="text-lg text-green-400 hover:text-green-350" target="_blank"
             noreferrer
             noopener>
            <span>{{ studentFirstName }}'s Portfolio<i class="fas fa-external-link-alt ml-2"></i></span>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-3 mb-3 mx-3 mt-5">
        <section-heading class="col-span-3" :text="studentFirstName + '\'s Skills'"></section-heading>
        <div class="col-span-3" v-if="student.skill_ids">
          <div class="flex flex-wrap">
            <display-skill-pill
                v-for="skill in studentSkills"
                :key="'student-skill-' + skill.id"
                :skill="skill"
            >
            </display-skill-pill>
          </div>
        </div>
        <div v-else>
          <p>There are currently no skills.</p>
        </div>
      </div>

      <div class="mx-3 mt-5" v-if="projects[0]">
        <div class="grid grid-cols-3">
          <section-heading class="col-span-3" :text="studentFirstName + '\'s Projects'"></section-heading>
        </div>
        <div class="grid grid-cols-2">
          <div class="col-span-2 md:col-span-1 mx-3" v-for="(item) in projects" v-bind:key="item.id">
            <project-tile
                :key="'project-' + item.id"
                :project="item"
                :full="true">
            </project-tile>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 mt-5 mx-3">
        <div>
          <router-link class="cursor-pointer" :to="{ name: 'StudentPage', params: { slug: prevStudent.slug } }" custom
                       v-slot="{ navigate }" v-if="prevStudent">
            <div @click="navigate" role="link">
              <h4 class="text-lg text-gray-300"><i class="mr-1 fa fa-chevron-left"></i> Previous</h4>
              <h4>{{ prevStudent.name }}</h4>
            </div>
          </router-link>
        </div>
        <div>
          <router-link class="cursor-pointer text-right"
                       :to="{ name: 'StudentPage', params: { slug: nextStudent.slug } }"
                       custom v-slot="{ navigate }" v-if="nextStudent">
            <div @click="navigate" role="link">
              <h4 class="text-lg text-gray-300">Next <i class="ml-1 fa fa-chevron-right"></i></h4>
              <h4>{{ nextStudent.name }}</h4>
            </div>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import StudentJSON from '@/assets/json/students.json';
import ProjectJSON from '@/assets/json/projects.json';
import SkillsJSON from '@/assets/json/skills.json';
import DisplaySkillPill from '@/components/utility/DisplaySkillPill.vue';
import ProjectTile from '@/components/projects/ProjectTile.vue';
import SectionHeading from '@/components/utility/SectionHeading.vue';

export default {
  name: 'StudentPage',
  components: {
    ProjectTile,
    DisplaySkillPill,
    SectionHeading,
  },
  data() {
    if (this.studentExists()) {
      return {
        student: this.getStudentId(),
        projects: ProjectJSON.filter((jsonObj) => (jsonObj.student_id === this.getStudentId().id)),
        skills: SkillsJSON,
        prevStudent: this.getStudentId(-1),
        nextStudent: this.getStudentId(1),
      };
    }
    return {};
  },
  computed: {
    studentSkills() {
      return this.skills.filter((skill) => this.student.skill_ids.includes(skill.id));
    },
    studentFirstName() {
      return this.student.name.split(' ')[0];
    },
  },
  methods: {
    // eslint-disable-next-line consistent-return
    getStudent() {
      return StudentJSON.filter((jsonObj) => (jsonObj.slug === this.$route.params.slug))[0];
    },
    studentExists() {
      if (this.getStudent() === null || typeof this.getStudent() === 'undefined') {
        this.$router.push({ name: 'Error404' }).catch(() => {});
        return false;
      }
      return true;
    },
    getStudentId(i = 0) {
      // eslint-disable-next-line radix
      return StudentJSON.filter((jsonObj) => (jsonObj.id === parseInt(this.getStudent().id) + i))[0];
    },
    getProjectSkills(projectId) {
      return this.skills.filter((skill) => this.projects.find((project) => project.id === projectId)
        .skill_ids
        .includes(skill.id));
    },
    track() {
      if (localStorage.getItem('cookies:accepted') === 'true') {
        this.$gtag.pageview({
          page_title: `StudentPage - ${this.getStudent().slug}`,
          page_location: Location.href,
          page_path: Location.pathname,
        });
      }
    },
  },
  watch: {
    $route() {
      this.student = this.getStudentId();
      this.prevStudent = this.getStudentId(-1);
      this.nextStudent = this.getStudentId(1);
      // eslint-disable-next-line prefer-destructuring
      this.projects = ProjectJSON.filter((jsonObj) => (jsonObj.student_id === this.getStudentId().id));
      this.track();
    },
  },
  mounted() {
    if (this.studentExists()) {
      this.track();
    }
  },
};
</script>

<style scoped>
.quote-icon, .quote-content {
  grid-area: 1 / 1 / 1 / 1;
}

.student-hero {
  background-color: #DFE4E4;
}

.dark .dark\:student-hero-dark {
  background-color: #1a1a1c;
}

.h-240px {
  height: 240px;
}

@media (min-width: 832px) {
  .fa-quote-right {
    font-size: 275px;
  }
}
</style>
