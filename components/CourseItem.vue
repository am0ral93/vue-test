<template>
  <el-card shadow="never" class="course-item">
    <div class="course-item__preview">
      <div class="img">
        <img :src="course.thumb" />
      </div>
    </div>

    <div class="course-item__content">
      <h2 class="course-item__name">
        <nuxt-link style="color: #3B95FF; text-decoration: underline;" :to="{ name: 'course-fill-slug-structure-edit', params: { slug: course.slug }}">{{ course.name }}</nuxt-link>
      </h2>
      <div class="course-item__rating">
        <div class="title">
          {{ course.rating }}
        </div>
        <el-rate v-model="course.rating" disabled></el-rate>
      </div>
      <div class="course-item__info-line">
        <ul class="course-item__targets">
          <li>{{ course.education_targets }}</li>
        </ul>
      </div>
      <div class="course-item__info-line last">
        <div
          class="course-item__inf"
          v-for="(requirement, $index) in course.requirements"
          :key="$index"
        >
          <i class="icon-clock"></i>
          <span>{{ requirement }}</span>
        </div>
        <div class="course-item__inf">
          <i class="el-icon-view"></i>
          <span>{{course.views}} просмотров</span>
        </div>
        <div class="course-item__inf">
          <i class="el-icon-notebook-2"></i>
          <span>{{course.lectures_count}} уроков</span>
        </div>

      </div>

    </div>

    <div class="course-item__inner">
      <div class="mobile_xxx">
        <div class="course-item__btn-box">
          <nuxt-link
            class="el-button el-button--success"
            :to="{name: 'course-fill-slug-structure-edit', params: { slug: course.slug}}"
          >
            <span>
              Редактировать
              <i class="icon-arr-right"></i>
            </span>
          </nuxt-link>
        </div>
        <div class="course-item__date">{{ course.published_date | moment('DD MMMM YYYY') }}</div>
      </div>
    </div>
  </el-card>
</template>

<style>
  @media screen and (max-width: 992px) {
    .course-item__date { text-align: center; }
    .course-item__name { text-align: center; }
    .course-item__info-line { margin: auto; }
    .course-item__rating { margin: auto; }
    .mobile_xxx { margin: auto; }
  }
</style>

<script>
export default {
  props: ["course"],
  data() {
    return {};
  },
  methods: {
    declOfNum(number, titles) {
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    }
  }
};
</script>

<style scoped>
</style>
