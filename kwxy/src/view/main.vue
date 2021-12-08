<template>

  <div>

    <el-carousel height="350px">
      <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.url" alt="" height="350px">
      </el-carousel-item>
    </el-carousel>

    <el-divider></el-divider>

    <el-row :gutter="10" style="font-size: 14px; line-height: 26px;">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card style="padding: 0">
          <div slot="header" class="clearfix">
            <span>学院要闻</span>
          </div>
          <div style="padding-left: 10px">
            <ul>
              <li v-for="item in news" :key="item.id" :title="item.name" style="list-style-type:none;">
                <a :href="item.url" class="news">
                  <el-row>
                    <el-col :xs="16" :sm="18" :md="20" :lg="21" :xl="21" style="display: inline-block; float:left; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"><i class="el-icon-caret-right"></i>{{ item.name }}</el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3" style="display: inline-block; float:right;">{{ item.date }}</el-col>
                  </el-row>
                </a>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card style="padding: 0">
          <div slot="header" class="clearfix">
            <span>学院要闻</span>
          </div>
          <div style="padding-left: 10px">
            <ul>
              <li v-for="item in news" :key="item.id" :title="item.name" style="list-style-type:none;">
                <a :href="item.url" class="news">
                  <el-row>
                    <el-col :xs="16" :sm="18" :md="20" :lg="21" :xl="21" style="display: inline-block; float:left; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"><i class="el-icon-caret-right"></i>{{ item.name }}</el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3" style="display: inline-block; float:right;">{{ item.date }}</el-col>
                  </el-row>
                </a>
              </li>
            </ul>
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
  display:inline-block;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


.news {
  color: black;
}

.news:hover {
  color: red;
  cursor: pointer;
}

</style>
