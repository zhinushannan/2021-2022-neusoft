<template>

  <div>

    <h4>师资队伍</h4>
    <el-divider></el-divider>
    <div style="margin-bottom: 50px">

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学院师资力量雄厚。拥有一支创新能力强、教学水平高、师德品质好的师资队伍和管理团队，且从教师资均具有中级以上职称或硕士及以上学位，其中具有高级职称者占57%以上，具有硕士及以上学历者占73%以上，为提高教育教学质量提供了可靠的师资保证。同时，为满足应用技术型人才培养的教学需要，学院长期坚持聘请企业管理人员、技术专家担任兼职教师，参与人才培养工作。截至目前，学院已经聘请了40余位来自各行各业的专业技术专家，常年参与学院的教学工作。
      </p>

      <h4>师资力量</h4>

      <div style="text-align: center; margin-top: 10px; margin-bottom: 15px" v-for="item in items">
        <p style="font-size: 18px; margin-bottom: 10px">{{ item.name }}</p>
        <el-image
            style="height: 450px"
            :src="item.url"
            :preview-src-list="imgList">
        </el-image>
      </div>

    </div>


  </div>


</template>

<script>
import item1 from "../assets/teacher_list/item1.png"
import item2 from "../assets/teacher_list/item2.png"
import item3 from "../assets/teacher_list/item3.png"
import item4 from "../assets/teacher_list/item4.png"
import item5 from "../assets/teacher_list/item5.png"
import item6 from "../assets/teacher_list/item6.png"
import item7 from "../assets/teacher_list/item7.png"
import item8 from "../assets/teacher_list/item8.png"
import item9 from "../assets/teacher_list/item9.png"


export default {
  name: "teacher_list",
  data() {
    return {
      items: [
        { name: "", url: item1 },
        { name: "著名影视演员陆鹏先生为学生授课", url: item2 },
        { name: "外籍教师为学生授课", url: item3 },
        { name: "著名诗人余光中先生来我院讲学", url: item4 },
        { name: "科文学院教学工作会议", url: item5 },
        { name: "科文学院教学督导员会议", url: item6 },
        { name: "科文学院师德建设月活动", url: item7 },
        { name: "专业教师座谈会", url: item8 },
        { name: "财务管理专业建设专家会议", url: item9 },
      ],
      imgList: [item1, item2, item3, item4, item5, item6, item7, item8, item9]
    }
  }
}
</script>

<style scoped>

</style>
