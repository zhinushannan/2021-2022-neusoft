<template>

  <div>

    <el-carousel height="400px">
      <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.url" alt="" height="400px">
      </el-carousel-item>
    </el-carousel>

    <el-divider></el-divider>

    <el-row :gutter="10" style="font-size: 14px; line-height: 26px;">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>学院要闻</span>
            <el-link style="float: right; padding: 3px 0" type="text" href="/#/more">MORE</el-link>
          </div>
          <div style="padding-left: 30px">
            <ul v-for="item in news" :key="item.id">
              <a :href="item.url">
                <li class="news" :title="item.name"><span class="news-name">{{ item.name }}</span><span
                    style="float:right;">{{ item.date }}</span></li>
              </a>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>通知通告</span>
            <el-link style="float: right; padding: 3px 0" type="text" href="/#/more">MORE</el-link>
          </div>
          <div style="padding-left: 30px">
            <ul v-for="item in news" :key="item.id">
              <a :href="item.url">
                <li class="news" :title="item.name"><span class="news-name">{{ item.name }}</span><span
                    style="float:right;">{{ item.date }}</span></li>
              </a>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>快速导航</span>
          </div>
          <div style="padding-left: 30px">
            <div style="margin-top: 15px; margin-bottom: 15px">
              <a href="http://www.jsnu.edu.cn" style="margin: 10px">
                <el-button plain>江苏师范大学</el-button>
              </a>
              <a href="http://10.110.222.1" style="margin: 10px">
                <el-button plain>院办公信息网</el-button>
              </a>
            </div>
            <div style="margin-top: 15px; margin-bottom: 15px">
              <a href="http://mail.jsnu.edu.cn" style="margin: 10px;">
                <el-button plain style="width: 125px">邮件系统</el-button>
              </a>
              <a href="http://kwxy.check.cnki.net" style="margin: 10px">
                <el-button plain>论文查重系统</el-button>
              </a>
            </div>
            <div style="margin-top: 15px; margin-bottom: 15px">
              <a href="http://202.195.72.11/www/" style="margin: 10px">
                <el-button plain style="width: 125px">敬文图书馆</el-button>
              </a>
              <a href="http://ykt.jsnu.edu.cn" style="margin: 10px">
                <el-button plain style="width: 125px">校园一卡通</el-button>
              </a>
            </div>
            <div style="margin-top: 15px; margin-bottom: 40px">
              <a href="http://kwxy.jsnu.edu.cn/cyxz/list.psp" style="margin: 10px">
                <el-button plain style="width: 125px">常用下载</el-button>
              </a>
              <a href="http://kwxy.jsnu.edu.cn/cyzdtj/list.psp" style="margin: 10px">
                <el-button plain>常用站点推荐</el-button>
              </a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>


  </div>

</template>

<script>
import item1 from "../assets/carousel/item1.jpg"
import item2 from "../assets/carousel/item2.jpg"
import item3 from "../assets/carousel/item3.jpg"
import item4 from "../assets/carousel/item4.jpg"
import item5 from "../assets/carousel/item5.jpg"

export default {
  name: "main",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "学习宣传贯彻党的十九届六中全会精神",
          url: item1
        },
        {
          id: 2,
          name: "24节气-大雪",
          url: item2
        },
        {
          id: 3,
          name: "闪光科文人-原钰卓",
          url: item3
        },
        {
          id: 4,
          name: "热烈祝贺我院融媒体中心成立",
          url: item4
        },
        {
          id: 5,
          name: "欢迎2021级新同学",
          url: item5
        },
      ],
      news: [
        {id: 0, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 1, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 2, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 3, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 4, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 5, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 6, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 7, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 8, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
        {id: 9, name: "喜报：科文学子在第十二届蓝桥杯全国软件和信息技术专业人才大赛中取得佳绩", date: '09-28', url: "/#/lanqiao"},
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.news-name {
  display: inline-block;
  width: 240px;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news:hover {
  color: red;
  cursor: pointer;
}

</style>
