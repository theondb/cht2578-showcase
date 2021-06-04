<template>
  <router-link class="cursor-pointer" :to="{ name: 'ProjectPage', params: { id: project.id } }" custom v-slot="{ navigate }">
    <div @click="navigate" role="link" class="mb-8">
      <div class="h-60 mb-2 p-3 flex items-center overflow-hidden" :class="{ 'bg-gray-200 dark:bg-gray-700': !full }">
        <img :src="project.image_path[0]" :alt="project.name" class="m-auto object-cover w-full">
      </div>
      <p>{{ project.name }}</p>
      <p class="text-gray-400 dark:text-gray-300 text-s mb-1">{{ student.name }}</p>
      <project-tile-skill-pill
        v-for="projectSkill in projectSkillsToShow(projectSkills)"
        :key="projectSkill.id"
        :skill="projectSkill">
      </project-tile-skill-pill>
      <div v-if="!full && projectSkills.length > 3" class="inline-block mr-1">
        <div class="skill-pill flex items-center justify-center rounded-full cursor-pointer text-center bg-green-400 bg-opacity-25 text-green-400 py-1 px-3">
          <span class="text-xs font-medium">+{{ amountOfSkillsOverThree }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import ProjectTileSkillPill from '@/components/projects/ProjectTileSkillPill.vue';
import SkillsJson from '@/assets/json/skills.json';
import StudentJSON from '@/assets/json/students.json';

export default {
  components: { ProjectTileSkillPill },
  name: 'ProjectTile',
  props: {
    project: {
      required: true,
      type: Object,
    },
    full: {
      required: false,
      type: Boolean,
    },
  },
  data() {
    return {
      skills: SkillsJson,
      student: StudentJSON.filter((jsonObject) => (jsonObject.id === this.project.student_id))[0],
    };
  },
  methods: {
    projectSkillsToShow(skills) {
      return this.full ? skills : skills.slice(0, 3);
    },
  },
  computed: {
    projectSkills() {
      return this.skills.filter((skill) => this.project.skill_ids.includes(skill.id));
    },
    amountOfSkillsOverThree() {
      return this.projectSkills.length - 3;
    },
  },
};
</script>

<style scoped>
.dark .dark\:pre-line-dark:before {
  border-bottom: 1px solid #969696;
}
</style>
