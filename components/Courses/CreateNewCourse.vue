<template>
    <div class="mobile-btn">
        <!-- <nuxt-link class="el-button el-button--primary" to="/create-course">
          <span></span>
        </nuxt-link>-->
        <el-button @click="dialogVisible = true" type="primary">Создать курс</el-button>
        <el-dialog :visible.sync="dialogVisible"
                   fullscreen
                   modal-append-to-body
                   :append-to-body="true"
                   :show-close="false"
        >
            <div class="el-dialog__container">
        <span style="position: fixed;top: 10px;right: 10px;" class="el-dialog__close" @click="closeDialog()">
          <i class="icon-close"></i>
        </span>
                <span v-if="activeStep > 1" class="el-dialog__prev" @click="prevDialog(activeStep)">
          <i class="icon-arr-left"></i>
        </span>
                <step1 v-if="activeStep == 1" @passed="changeStep(1)"></step1>
                <step2 v-else-if="activeStep == 2" @passed="changeStep(2)"></step2>
                <step3 v-else-if="activeStep == 3" @passed="changeStep(3)"></step3>
            </div>
        </el-dialog>
    </div>
</template>
<style>
    @media screen and (max-width: 992px) {
        .mobile-btn { margin: auto; }
    }
    @media only screen and (max-width: 480px){
        h1 {  font-size: 26px;  }
    }
</style>
<script>
    import {createHelpers} from 'vuex-map-fields';

    const {mapFields} = createHelpers({
        getterType: 'getNewCourseField',
        mutationType: 'updateNewCourseField',
    });

    import Step1 from "../../components/NewCourse/Step1";
    import Step2 from "../../components/NewCourse/Step2";
    import Step3 from "../../components/NewCourse/Step3";

    export default {
        data() {
            return {
                dialogVisible: false,
                activeStep: 1,
                totalSteps: 3,
            };
        },
        computed: {
            ...mapFields('NewCourse', [
                'name',
                'category',
                'catalogtype'
            ])
        },
        methods: {
            closeDialog() {
                this.dialogVisible = false;
            },
            changeStep(step) {
                if (this.activeStep < 3) {
                    this.activeStep = step + 1;
                } else {


                    // todo: implement logic
                    console.log(this.name);
                    console.log(this.category.id);

                    let data = new FormData();
                    data.append('type', 'new');
                    data.append('catalogtype', this.catalogtype);
                    data.append('name', this.name);
                    data.append('category', this.category.id);


                    //const data = JSON.stringify(this.profile);
                    this.$axios.post("rest/createcourse" , data).then(response => {

                        alert(response.data);
                        location.replace("/courses");
                        //this.$router.push("/courses");

                    })
                        .then(response => {
                        })
                        .catch(e => {
                            this.errors.push(e)
                        })


                    //window.location.href = "/courses";

                }
            },
            prevDialog(step) {
                this.activeStep = step - 1;
            }
        },
        components: {
            Step1,
            Step2,
            Step3
        },
    };
</script>
