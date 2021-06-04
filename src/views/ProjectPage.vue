<template>
  <div v-if="this.projectExists()">
    <div class="container mx-auto xl:px-60 block mt-4 mb-4">
      <h1 class="text-3xl mb-4">{{ this.project.name }}</h1>
      <div class="grid grid-cols-2">
        <div>
          <h6>
            <router-link :to="{name: 'StudentPage', params: { slug: student.slug }}"
                         class="pre-line dark:pre-line-dark text-gray-400 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400 text-s mb-1">
              {{ this.student.name }}
            </router-link>
          </h6>
        </div>
        <div class="text-right">
          <div class="inline text-green-400 hover:text-green-350"
               v-if="this.project.external_links.hasOwnProperty('project_site')">
            <a :href="this.project.external_links.project_site" target="_blank" noreferrer noopener><span>Launch<i
                class="fas fa-external-link-alt ml-2"></i></span></a>
          </div>
          <div class="ml-3 inline" v-if="this.project.external_links.hasOwnProperty('github')">
            <a :href="this.project.external_links.github" target="_blank" noreferrer noopener><span>View Code<i class="fab fa-github ml-2"></i></span></a>
          </div>
        </div>
      </div>
      <p class="mt-4 mb-4">{{ this.project.description }}</p>
      <div class="flex flex-wrap">
        <display-skill-pill
            v-for="projectSkill in projectSkills"
            :key="projectSkill.id"
            :skill="projectSkill">
        </display-skill-pill>
      </div>
      <div class="mt-5 mb-5 video-asset" v-if="project.video_asset !== null">
        <project-video :video="project.video_asset"/>
      </div>
      <div class="mt-5 mb-5 photo-assets" v-for="photo in project.photo_assets" v-bind:key="photo">
        <img class="w-full" :src="photo" alt="Photo Asset">
      </div>
      <div class="grid grid-cols-2">
        <div>
          <router-link class="cursor-pointer" :to="{ name: 'ProjectPage', params: { id: previousProject.id } }" custom
                       v-slot="{ navigate }" v-if="previousProject">
            <div @click="navigate" role="link">
              <h4 class="text-lg text-gray-300"><i class="mr-1 fa fa-chevron-left"></i> Previous</h4>
              <h4>{{ previousProject.name }}</h4>
            </div>
          </router-link>
        </div>
        <div>
          <router-link class="cursor-pointer text-right" :to="{ name: 'ProjectPage', params: { id: nextProject.id } }"
                       custom v-slot="{ navigate }" v-if="nextProject">
            <div @click="navigate" role="link">
              <h4 class="text-lg text-gray-300">Next <i class="ml-1 fa fa-chevron-right"></i></h4>
              <h4>{{ nextProject.name }}</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectJSON from '@/assets/json/projects.json';
import StudentJSON from '@/assets/json/students.json';
import SkillsJson from '@/assets/json/skills.json';
import DisplaySkillPill from '@/components/utility/DisplaySkillPill.vue';
import ProjectVideo from '@/components/projects/ProjectVideo.vue';

export default {
  name: 'ProjectPage',
  components: {
    ProjectVideo,
    DisplaySkillPill,
  },
  // eslint-disable-next-line consistent-return
  data() {
    if (this.projectExists()) {
      return {
        project: this.getProject(),
        skills: SkillsJson,
        student: StudentJSON.filter((jsonObject) => (jsonObject.id === this.getProject().student_id))[0],
        previousProject: this.getProject(-1),
        nextProject: this.getProject(1),
      };
    }
    return {};
  },
  computed: {
    projectSkills() {
      return this.skills.filter((skill) => this.project.skill_ids.includes(skill.id));
    },
  },
  methods: {
    getProject(adjustment = 0) {
      // eslint-disable-next-line radix
      return ProjectJSON.filter((jsonObject) => (jsonObject.id === parseInt(this.$route.params.id) + adjustment))[0];
    },
    projectExists() {
      if (this.getProject() === null || typeof this.getProject() === 'undefined') {
        this.$router.push({ name: 'Error404' }).catch(() => {});
        return false;
      }
      return true;
    },
    track() {
      if (localStorage.getItem('cookies:accepted') === 'true') {
        this.$gtag.pageview({
          page_title: `ProjectPage - ${this.getProject().name}`,
          page_location: Location.href,
          page_path: Location.pathname,
        });
      }
    },
  },
  watch: {
    $route() {
      this.project = this.getProject();
      // eslint-disable-next-line prefer-destructuring
      this.student = StudentJSON.filter((jsonObject) => (jsonObject.id === this.getProject().student_id))[0];
      this.previousProject = this.getProject(-1);
      this.nextProject = this.getProject(1);
      this.track();
    },
  },
  mounted() {
    if (this.projectExists()) {
      this.track();
    }
  },
};
</script>
