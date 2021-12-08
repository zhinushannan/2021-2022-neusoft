<template>

  <div>

    <h4>学院简介</h4>
    <el-divider></el-divider>
    <div style="margin-bottom: 50px">

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;江苏师范大学科文学院是经国家教育部批准建立的独立学院。学院坐落于素有“五省通衢”之称的国家历史文化名城—江苏省徐州市。校园景色秀丽，环境幽雅，设施完善，文化底蕴深厚，是莘莘学子读书求学的好地方。
      </p>

      <div style="text-align: center; margin-top: 10px; margin-bottom: 10px">

        <el-image
            style="height: 400px"
            :src="imgList[0]"
            :preview-src-list="imgList">
        </el-image>

      </div>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>办学条件</strong> 学院现有泉山和潘安湖2个校区，占地1300余亩，校舍建筑面积40余万平方米。学院在依托江苏师范大学优质教育资源办学的同时，不断加大投入，着力改善办学条件，现拥有教学计算机1807台，微机房29间，多媒体教室220间，专业实验室97个，校外实习实训基地158个，以及丰富的图书馆馆藏。此外，还建有千兆网主干网络平台和现代化的大学生活动中心、高标准学生公寓及塑胶运动场等，为学生潜心求学和健康成长提供了优越条件。
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>专业设置</strong> 学院主动适应经济社会发展对人才培养规格的新要求，始终坚持“培养应用技术型专门人才”的专业设置定位。目前共有本科专业43个，涵盖了文学、法学、理学、工学、管理学、经济学、教育学、艺术学等八大学科门类，已初步形成了“门类齐全、结构合理、资源集中、质量优良、特色鲜明”的学科专业格局。43个所设专业均为社会需求量大、发展前景广阔的专业，充分满足了学生专业选择的差异化需要。
      </p>

      <div style="text-align: center; margin-top: 10px; margin-bottom: 10px">

        <el-image
            style="height: 400px"
            :src="imgList[1]"
            :preview-src-list="imgList">
        </el-image>

      </div>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>师资力量</strong> 学院师资力量雄厚。拥有一支创新能力强、教学水平高、师德品质好的师资队伍和管理团队，且从教师资均具有中级以上职称或硕士及以上学位，其中具有高级职称者占57%以上，具有硕士及以上学历者占73%以上，为提高教育教学质量提供了可靠的师资保证。同时，为满足应用技术型人才培养的教学需要，学院长期坚持聘请企业管理人员、技术专家担任兼职教师，参与人才培养工作。截至目前，学院已经聘请了90余位来自各行各业的专业技术专家，常年参与学院的教学工作。
      </p>


      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>合作交流</strong> 学院坚持开放办学，不断扩大国际交流合作的领域。现已与德国埃森经济管理应用技术大学、澳大利亚迪肯大学等在师资培训、学生交流等方面签署合作协议，与美国旧金山州立大学、加拿大多伦多大学等30余所国际知名学府建立了合作关系，并成功引进了美国国际教育集团和新加坡奥尔夫集团在校生带薪实习项目，英国特许公认会计师（ACCA）国际职业资格认证项目，为广大学生开辟了更为广阔的发展空间。学院还与海澜集团、京东商城、东软集团、金诺佳音等一批国内知名企业开展校企合作，实现了人才培养与产业、企业、岗位的紧密对接。
      </p>

      <div style="text-align: center; margin-top: 10px; margin-bottom: 10px">

        <el-image
            style="height: 400px"
            :src="imgList[2]"
            :preview-src-list="imgList">
        </el-image>

      </div>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>人才培养</strong> 学院现有在校生9900余名，面向江苏、河北、山西、浙江、安徽、福建、江西、山东、河南、湖南、广东、四川、广西、贵州、云南、甘肃、新疆等17省招生。学院自办学以来，秉持“崇德尚能，明志笃行”院训，实施了“以应用型本科人才培养为主体，以学术型提升和国际化办学为两翼”的人才培养战略，不断强化办学特色，全面提高人才培养质量。近年来，学院人才培养效果卓著。学生参与各级各类科技文化竞赛所获奖项多、层次高，共获得国家级奖项300余项，省市级奖项600余项。每年均有近两百人考取硕士研究生，且考取院校中不乏北京大学、浙江大学、南京大学、东南大学、中国人民大学、香港中文大学等国际一流高校。毕业生深受用人单位欢迎，各行业优秀校友辈出，学院连续八年毕业生就业率高达97%以上，位于江苏省同类高校前列。
      </p>

    </div>


  </div>

</template>

<script>
import item1 from "../assets/school/item1.png"
import item2 from "../assets/school/item2.png"
import item3 from "../assets/school/item3.png"

export default {
  name: "school",
  data() {
    return {
      imgList: [item1, item2, item3]
    }
  }
}
</script>

<style scoped>

</style>
