<template>

  <div>
    <h4>优秀学子（说着优秀，实则废物）</h4>
    <el-divider></el-divider>
    <div style="margin-bottom: 50px">

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王建文，男，19数据班班长，中共预备党员，江苏徐州人。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>曾获奖项&nbsp;</strong>第32届中国化学奥林匹克竞赛（江苏赛区）三等奖，第35届全国中学生屋里竞赛徐州市一等奖，第35届中国屋里奥林匹克竞赛（江苏赛区）一等奖，2019年军训优秀学员，工学院职业生涯规划大赛一等奖，2019年度共青团江苏师范大学委员会优秀团员，2020年7月优课达（南京）网络有限公司实习证明，2019-2020学年度三等优秀学学生奖学金，
        2019-2020学年度优秀学生干部，科文学院第七届互联网+比赛二等奖，科文学院第五期创业路演大赛一等奖，第十七届“挑战杯”全国大学生学术科技作品竞赛院内选拔赛二等奖，第十二届蓝桥杯软件设计大赛江苏赛区一等奖，第十二届蓝桥杯软件设计大赛全国赛区优秀奖，2020-2021学年度三等优秀学生奖学金，
        2020-2021学年度优秀学生干部，2020-2021学年度优秀学生干部标兵。</p>

      <div style="text-align: center; margin-top: 10px; margin-bottom: 10px">

        <el-image style="height: 500px" :src="srcList[0]" :preview-src-list="srcList" /><br/>

      </div>


    </div>
  </div>

</template>

<script>
import img from "../assets/students/img.png"

export default {
  name: "students",
  data() {
    return {
      srcList: [img]
    }
  }
}
</script>

<style scoped>

</style>
