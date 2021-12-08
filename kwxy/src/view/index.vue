<template>

  <div>

    <el-container>
      <el-header style="height: 160px; padding: 0;">
        <div style="float:left; height: 90px; margin-top: 10px; padding-left: 350px; padding-right: 350px;">
          <img :src="logo" alt=""/>
        </div>
        <div
            style="background-color: #0c508f; height: 60px; margin-top: 100px; padding-left: 350px; padding-right: 350px;">

          <el-dropdown>
            <a href="/#/main">
              <div class="top-nav">
                网站首页
              </div>
            </a>
          </el-dropdown>
          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                学院概况
              </div>
            </a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>学院简介</el-dropdown-item>
              <el-dropdown-item>师资队伍</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                人才培养
              </div>
            </a>
          </el-dropdown>

          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                招生就业
              </div>
            </a>
          </el-dropdown>
          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                广纳贤才
              </div>
            </a>
          </el-dropdown>
          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                合作交流
              </div>
            </a>
          </el-dropdown>
          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                校园生活
              </div>
            </a>
          </el-dropdown>
          <el-dropdown>
            <a href="#">
              <div class="top-nav">
                信息公开
              </div>
            </a>
          </el-dropdown>
        </div>
      </el-header>
      <el-main style="margin-left: 350px; margin-right: 350px;">
        <router-view/>
      </el-main>
      <el-footer style="height: 250px; padding: 0;margin: 0">
        <div style="margin-top: 10px; background-color: #0c5b95">
          <img :src="footer" alt=""/>
        </div>
        <div style="height: 100px; background-color: #094979; color: #b4cde0; line-height: 20px; padding-top: 20px">
          <p>江苏师范大学科文学院 © 2000-2021 　电子邮件：kwxy@jsnu.edu.cn</p>
          <p>地址：江苏省徐州市潘安湖科教创新区学院路1号　邮政编码：221132　联系电话：0516-68161015　0516-68161012</p>
          <p>苏公网安备 32031202000340号</p>
        </div>
      </el-footer>
    </el-container>

  </div>


</template>

<script>
import logo from "../assets/img.png"
import footer from "../assets/footer.png"

export default {
  name: "index",
  data() {
    return {
      logo: logo,
      footer: footer
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #1767a2;
  line-height: 60px;
}

.el-footer {
  background-color: #0c5b95;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.top-nav {
  font-size: 16px;
  color: white;
  padding-left: 40px;
  padding-right: 40px;
}

.top-nav:hover {
  color: black;
  background-color: white;
}

</style>
