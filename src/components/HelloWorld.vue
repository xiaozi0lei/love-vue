<template>
  <el-row>
    <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
    <a :href ="'https://blog.guoleishenbo.top/'"><h2>Blog</h2></a>

    <div class="demo-image__preview">
      <el-image
        v-for="(img, index) in srcList"
        :src="img"
        v-bind:key="index"
        style="width: 300px; height: 300px"
        :preview-src-list="srcList"
        :fit="fill"
      >
      </el-image>
    </div>

    <el-upload
      list-type="picture-card"
      :action="this.SERVER.http + '/file/upload'"
      :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>

  </el-row>
</template>

<script>
import axios from 'axios';

export default {
  
  name: "HelloWorld",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      msg: "石头❤️卜卜",
      dialogImageUrl: "",
        dialogVisible: false,
        // fileList: [],
      // url:
      //   "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: []
    };
  },
  // computed: {
  //     fileList() {
  //       let fileList=[];
  //       for(let i=0;i<this.value.length;i++){
  //         fileList.push({url:this.value[i]});
  //       }
  //       return fileList;
  //     }
  //   },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
  // 图片上传前验证
   beforeAvatarUpload (file) {
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
     this.$message.error('上传头像图片大小不能超过 2MB!')
    }
    return isLt2M
   },
// created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
  created(){
    axios.get(this.SERVER.http+'/file/list',{       // 还可以直接把参数拼接在url后边
        params:{
        }
    }).then((res) => {
      console.log(res.data.data);
      // console.log(this);
      // res.data.data.forEach(element => {
      //   this.fileList.push({url: element});
      // });
      this.srcList = res.data.data;
    }).catch(function (error) {
        console.log(error);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
