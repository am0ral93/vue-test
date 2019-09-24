<template>
  <ul class="tasks-list">
    <li v-for="task in tasksList" :key="task.id">
      <div class="box">
        <div class="tasks-list__user-preview">
          <div class="img">
            <img src="~/assets/images/face1.png" :alt="task.name" />
          </div>
        </div>
        <div class="tasks-list__content">
          <el-row type="flex" align="middle">
            <el-col :span="24" :sm="18">
              <h2 class="tasks-list__title">{{task.name}}</h2>
            </el-col>
            <el-col :span="24" :sm="6" class="hidden-xs-only">
              <span class="tasks-list__rate-title">Поставить оценку</span>
            </el-col>
          </el-row>
          <br />
          <ul class="files-list">
            <li v-for="file in task.files" :key="file.id">
              <el-row class="wrap" :gutter="18" type="flex" align="middle">
                <el-col :span="24" :sm="18">
                  <div class="files-list__file">
                    <div class="files-list__preview">
                      <div class="img">
                        <img src="~/assets/images/doc_ico.svg" :alt="file.name" />
                      </div>
                    </div>
                    <div class="files-list__content">
                      <div class="title">{{file.name}}</div>
                      <div class="info">
                        <span>{{file.size}}</span>
                        <span>{{file.date}}</span>
                      </div>
                    </div>
                    <div v-if="file.new" class="badge">New</div>
                  </div>
                </el-col>
                <el-col :span="24" :sm="6">
                  <div class="files-list__rating">
                    <el-rate v-model="file.rate"></el-rate>
                  </div>
                </el-col>
              </el-row>
            </li>
          </ul>
          <div class="comment">
            <div class="comment__send-row">
              <el-form class="comment-form">
                <el-form-item>
                  <el-input placeholder="Оставить свой комментарий"></el-input>
                  <el-button class="add-btn" type="ico2">
                    <i class="icon-ico6"></i>
                  </el-button>
                  <el-button class="submit-btn" type="ico2">
                    <i class="icon-send"></i>
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
      rating: "",
      tasksList: [
        {
          id: "1",
          img: "../assets/images/face1.png",
          name: "Мария Смирнова",
          files: [
            {
              ico: "../assets/images/doc_ico.svg",
              name: "File_history_essay_11928_v1.doc",
              size: "763 Kb",
              date: "Mar 17, 2018, 4:14 PM",
              rate: 2,
              new: false
            },
            {
              ico: "",
              name: "File_history_essay_11928_v1.doc",
              size: "763 Kb",
              date: "Mar 17, 2018, 4:14 PM",
              rate: 0,
              new: false
            }
          ]
        },
        {
          id: "2",
          img: "../assets/images/face2.png",
          name: "Александр Васильев",
          files: [
            {
              ico: "../assets/images/doc_ico.svg",
              name: "File_history_essay_11928_v1.doc",
              size: "763 Kb",
              date: "Mar 17, 2018, 4:14 PM",
              rate: 0,
              new: true
            },
            {
              ico: "../assets/images/pdf_ico.svg",
              name: "File_history_essay_11928_v1.doc",
              size: "763 Kb",
              date: "Mar 17, 2018, 4:14 PM",
              rate: 0,
              new: true
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>