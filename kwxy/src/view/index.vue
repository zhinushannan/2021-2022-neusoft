<template>

  <div>

    <el-container>
      <el-header style="height: 160px; padding: 0;">
        <div style="height: 100px;">
          <el-row>
            <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="4">
              <div style="height: 1px;"></div>
            </el-col>
            <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="16">
              <div style="float:left; height: 90px; margin-top: 10px;">
                <img :src="logo" alt=""/>
              </div>
            </el-col>
            <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="4">
              <div style="height: 1px;"></div>
            </el-col>
          </el-row>
        </div>

        <div style="background-color: #0c508f; height: 60px;">
          <el-row>
            <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="4">
              <div style="height: 1px;"></div>
            </el-col>
            <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="16">
              <el-row>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        网站首页
                      </div>
                    </a>
                  </el-dropdown>
                </el-col>


                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        学院概况
                      </div>
                    </a>
                    <el-dropdown-menu slot="dropdown">
                      <a href="/#/school">
                        <el-dropdown-item>学院简介</el-dropdown-item>
                      </a>
                      <a href="/#/teacherList">
                        <el-dropdown-item>师资队伍</el-dropdown-item>
                      </a>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>


                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        人才培养
                      </div>
                      <el-dropdown-menu slot="dropdown">
                        <a href="/#/teachers">
                          <el-dropdown-item>名师风采</el-dropdown-item>
                        </a>
                        <a href="/#/students">
                          <el-dropdown-item>优秀学子</el-dropdown-item>
                        </a>
                      </el-dropdown-menu>
                    </a>
                  </el-dropdown>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        招生就业
                      </div>
                    </a>
                  </el-dropdown>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        广纳贤才
                      </div>
                    </a>
                  </el-dropdown>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        合作交流
                      </div>
                    </a>
                  </el-dropdown>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        校园生活
                      </div>
                    </a>
                  </el-dropdown>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="top-nav">
                  <el-dropdown style="width: 100%;">
                    <a class="top-nav-a" href="/#/">
                      <div>
                        信息公开
                      </div>
                    </a>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="4">
              <div style="height: 1px;"></div>
            </el-col>
          </el-row>


        </div>

      </el-header>
      <el-main>
        <el-row>
          <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="4">
            <div style="height: 1px;"></div>
          </el-col>
          <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="16">
            <router-view/>
          </el-col>
          <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="4">
            <div style="height: 1px;"></div>
          </el-col>
        </el-row>
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
  },
  mounted() {
    this.$router.push("main")
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

a {
  text-decoration: none;
}

.top-nav-a {
  font-size: 16px;
  color: white;
}

.top-nav-a:hover {
  font-size: 16px;
  color: black;
}

.top-nav {
  color: white;
  text-align: center;
}

.top-nav:hover {
  background-color: white;
  color: black;
}

</style>
