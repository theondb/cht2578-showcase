<template>
  <div class="container mx-auto mt-4 mb-4">
    <section-heading :id="'projects'" :text="'Projects'"></section-heading>
    <div class="flex flex-wrap">
      <project-skill-pill
        v-for="skill in skillsUsedInAProject"
        :key="'skill-' + skill.id"
        :skill="skill"
        @toggle="skillToggled">
      </project-skill-pill>
    </div>
    <div v-if="filteredProjects.length" class="mt-5 px-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <project-tile
        v-for="project in filteredProjects.slice(0, projectsToShow)"
        :key="'project-' + project.id"
        :project="project">
      </project-tile>
    </div>
    <div class="mt-5" v-else>
      <p class="text-l">No projects found, try changing your filters!</p>
    </div>
    <div class="mt-5 flex justify-center">
      <button v-if="projectsToShow < filteredProjects.length" class="text-green-400 text-xs p-2 uppercase" @click.prevent="showMore">Show more <i class="fas fa-chevron-down pl-1"></i></button>
      <button v-else-if="projectsToShow > 8" class="text-green-400 text-xs p-2 uppercase" @click.prevent="showLess">Show less <i class="fas fa-chevron-up pl-1"></i></button>
    </div>
  </div>
</template>

<script>
import ProjectSkillPill from '@/components/projects/ProjectSkillPill.vue';
import ProjectTile from '@/components/projects/ProjectTile.vue';
import SkillsJson from '@/assets/json/skills.json';
import ProjectsJson from '@/assets/json/projects.json';
import SectionHeading from '@/components/utility/SectionHeading.vue';

export default {
  name: 'Projects',
  components: {
    ProjectSkillPill,
    ProjectTile,
    SectionHeading,
  },
  data() {
    return {
      skills: SkillsJson,
      projects: ProjectsJson.sort(() => Math.random() - 0.5),
      enabledSkillIds: [],
      projectsToShow: 8,
    };
  },
  computed: {
    filteredProjects() {
      if (this.enabledSkillIds.length) {
        return this.projects.filter((project) => this.enabledSkillIds.every((skillId) => project.skill_ids.includes(skillId)));
      }
      return this.projects;
    },
    skillsUsedInAProject() {
      return this.skills.filter((skill) => this.projects.flatMap((project) => project.skill_ids).includes(skill.id));
    },
  },
  methods: {
    showMore() {
      this.projectsToShow += 4;
    },
    showLess() {
      this.projectsToShow = 8;
    },
    skillToggled(skill) {
      this.projectsToShow = 8;
      if (skill.enabled) {
        this.enabledSkillIds.push(skill.id);
      } else {
        this.enabledSkillIds = this.enabledSkillIds.filter((enabledSkill) => enabledSkill !== skill.id);
      }
    },
  },
};
</script>

<style scoped>
</style>
