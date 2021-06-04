<template>
  <div class="container mx-auto block mt-4 mb-4">
    <section-heading :id="'team'" :text="'2021 Team'"></section-heading>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <router-link :to="{name: 'StudentPage', params: { slug: item.slug }}"
          class="p-5 cursor-pointer filter"
          v-for="(item) in students" v-bind:key="item.slug">
        <div class="flex flex-wrap flex-col">
          <div class="md:w-10/12 px-3">
            <img
                :src="item.image_path"
                :alt="item.name" class="shadow rounded-full max-w-full h-auto align-middle border-none transform duration-200 origin-bottom"/>
          </div>
          <h4 class="mt-2 pl-3 text-gray-900 dark:text-white">{{ item.name }}</h4>
          <p class="text-sm pl-3 text-gray-400 dark:text-gray-300 pre-circle">{{ item.desiredJob }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import SectionHeading from '@/components/utility/SectionHeading.vue';
import studentsJson from '../../assets/json/students.json';

export default {
  name: 'Team',
  components: {
    SectionHeading,
  },
  data() {
    return {
      students: studentsJson,
    };
  },
};
</script>

<style lang="css" scoped>
  .filter img {
    filter: grayscale(100%);
  }

  .filter:hover img {
    filter: none;
  }

  .pre-circle:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #00EE6C;
    margin-right: 5px;
  }
</style>
