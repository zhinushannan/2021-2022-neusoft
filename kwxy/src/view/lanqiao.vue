<template>

  <div>
    <div class="header" style="text-align: center; margin-bottom: 30px">
      <h3 style="line-height: 50px;">喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩</h3>
      <el-divider></el-divider>
      <span style="line-height: 14px; font-size: 14px; color: #787878; text-align: center;">时间：2021-09-28&nbsp;&nbsp;&nbsp;浏览：999</span>
    </div>
    <div style="line-height: 30px;">

      <p style="margin-top: 5px; margin-bottom: 5px">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近日，由工业和信息化部人才交流中心主办、国信蓝桥教育科技（北京）股份有限公司承办的2021年第十二届蓝桥杯全国软件和信息技术专业人才大赛圆满结束。来自全国30个省、自治区、直辖市的1300多所院校的7.5万名选手参与了本次大赛。</p>
      <p style="margin-top: 5px; margin-bottom: 5px">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本次大赛中，我院代表队伍在工学院杨增汪、石玲、陈祥等老师的精心指导下，经过紧张激烈的比拼，荣获江苏赛区一等奖2项，二等奖2项，三等奖3项。其中，19软件1班宗宇恒、19数据班王建文荣获全国总决赛大学B组优秀奖，杨增汪、石玲、陈祥老师获得“优秀指导教师”称号，特向全院师生报喜！</p>
      <p style="margin-top: 5px; margin-bottom: 5px">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大赛围绕当前社会发展急需的信息技术重点领域，开展IT人才的培养和选拔，是国内权威性高、覆盖面广、影响力大的IT类专业赛事，入选2019年、2020年全国普通高校学科竞赛排行榜，旨在给师生搭建一个相互学习、相互借鉴、共同提升的良好平台，激发学生队伍的团队合作意识和创新活力，是高校教育教学改革和创新人才培养的重要竞赛项目。</p>

    </div>

    <el-table
        :data="country"
        style="width: 100%">
      <el-table-column label="全国总决赛" align="center"
      >
        <el-table-column
            prop="name"
            align="center"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="clazz"
            align="center"
            label="班级">
        </el-table-column>
        <el-table-column
            prop="type"
            align="center"
            label="参赛类别">
        </el-table-column>
        <el-table-column
            prop="grade"
            align="center"
            label="获奖等级">
        </el-table-column>
      </el-table-column>
    </el-table>

    <div style="height: 20px;"></div>

    <el-table
        :data="jiangsu"
        style="width: 100%">
      <el-table-column label="江苏省赛区" align="center">
        <el-table-column
            prop="name"
            align="center"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="clazz"
            align="center"
            label="班级">
        </el-table-column>
        <el-table-column
            prop="type"
            align="center"
            label="参赛类别">
        </el-table-column>
        <el-table-column
            prop="grade"
            align="center"
            label="获奖等级">
        </el-table-column>
      </el-table-column>
    </el-table>

    <div style="text-align: center; margin-top: 10px">
      <el-image style="height: 300px" :src="srcList[0]" :preview-src-list="srcList" /><br/>
      <el-image style="height: 300px" :src="srcList[1]" :preview-src-list="srcList" /><br/>
      <el-image style="height: 300px" :src="srcList[2]" :preview-src-list="srcList" /><br/>
      <el-image style="height: 300px" :src="srcList[3]" :preview-src-list="srcList" /><br/>
      <el-image style="height: 300px" :src="srcList[4]" :preview-src-list="srcList" /><br/>
    </div>
  </div>

</template>

<script>
import img1 from "../assets/lanqiao/img1.png"
import img2 from "../assets/lanqiao/img2.png"
import img3 from "../assets/lanqiao/img3.png"
import img4 from "../assets/lanqiao/img4.png"
import img5 from "../assets/lanqiao/img5.png"

export default {
  name: "lanqiao",
  data() {
    return {
      country: [
        {
          name: "宗宇恒", clazz: "19软件1", type: "C/C++程序设计大学B组", grade: "优秀奖"
        },
        {
          name: "王建文", clazz: "19数据", type: "Java软件开发大学B组", grade: "优秀奖"
        },
      ],
      jiangsu: [
        {name: "宗宇恒", clazz: "19软件1", type: "C/C++程序设计大学B组", grade: "一等奖"},
        {name: "王建文", clazz: "19数据", type: "Java软件开发大学B组", grade: "一等奖"},
        {name: "张泰铭", clazz: "18数据", type: "Java软件开发大学B组", grade: "二等奖"},
        {name: "彭英建", clazz: "18机制1", type: "单片机设计与开发大学组", grade: "二等奖"},
        {name: "陈世伦", clazz: "18数据", type: "Java软件开发大学B组", grade: "三等奖"},
        {name: "马浩然", clazz: "18软件1", type: "Java软件开发大学B组", grade: "三等奖"},
        {name: "樊科", clazz: "18数据", type: "Java软件开发大学B组", grade: "三等奖"},
      ],
      srcList: [img1, img2, img3, img4, img5]
    }
  }
}
</script>

<style scoped>

</style>
