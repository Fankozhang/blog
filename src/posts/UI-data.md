---
date: 2022-01-11
category:
  - UI
 
tag:
  - UI
  - small
---

# UI and Data

## Element Ui

### TimePicker设置只能选择当前时间之前或之后的时间

 picker-options 当前时间日期选择器特有的选项 

```
<el-date-picker
	v-model="item.endYear"
    :picker-options="pickerOptions"
    type="datetime"
    >
</el-date-picker>
```

```
:picker-options=“pickerOptions” 是限制选择时间的属性

data() {
    // 这里存放数据
    return {
      pickerOptions:{
          disabledDate (time) {
            //disabledDate 文档上：设置禁用状态，参数为当前日期，要求返回 Boolean
            return time.getTime() > Date.now()//选当前时间之前的时间
            //return time.getTime() < Date.now()//选当前时间之后的时间
          }
      },
    }
  }

```

### el-date-picker禁用指定日期之前或之后的日期

[el-date-picker禁用指定日期之前或之后的日期_element日期选择器限制今天以后的日期-CSDN博客](https://blog.csdn.net/cyqzy/article/details/129951052)

### element的table错位

https://blog.csdn.net/coralime/article/details/122979010

1. 给表格添加ref标志

```html
  <el-table ref="tableRef" :data="tableData"></el-table>
```

2. doLayout 对 Table 进行重新布局

   ```js
   watch: {
         // tableData是el-table绑定的数据
         tableData: {
           // 解决表格显示错位问题
           handler () {
             this.$nextTick(() => {
               // tableRef是el-table绑定的ref属性值
               this.$refs.tableRef.doLayout() // 对 Table 进行重新布局
             })
           },
           deep: true
         }
       }
   ```

   

###  el-dialog 初次渲染时，滚动到最顶部

当dialog弹框的内容高度很高时，初次打开弹框会显示弹框最底下的内容，希望实现的是初次打开弹框，展示最顶部的内容

在dialog的open方法中实现获取dom，设置scrollTop为0

```
<el-dialog :title="title" :visible.sync="open" width="70%" append-to-body  @open="dialogOpen" class="eDialog">


this.$nextTick(() => {
  const dialog = document.querySelector('.el-dialog__body');
  if (dialog) {
    dialog.scrollTop = 0;
  }
});
```



### element 表格实现导入

```vue
<template>
    <div >
        <el-dialog
      :title="upload.title"
      :visible.sync="upload.open"
      width="400px"
      append-to-body
    >
    
      <el-upload
        ref="upload"
        :limit="1"
        :data="uploadData"
        accept=".xlsx, .xls"
        :headers="upload.headers"
        :action="upload.url"
        :disabled="upload.isUploading"
        :before-upload="beforFileUp"
        :on-progress="handleFileUploadProgress"
        :on-success="handleFileSuccess"
        :auto-upload="true"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip text-center" slot="tip">
          <span>仅允许导入xls、xlsx格式文件。</span>
          <el-link
            type="primary"
            :underline="false"
            style="font-size: 12px; vertical-align: baseline"
            @click="importTemplate"
            >下载模板</el-link
          >
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="submitFileForm">确 定</el-button> -->
        <el-button @click="upload.open = false">取 消</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
    data () {
        return {
            upload: {
        // 是否显示弹出层（员工导入）
        open: false,
        // 弹出层标题（员工导入）
        title: "导入",
        // 是否禁用上传
        isUploading: false,
        // 是否更新已经存在的员工数据
        // updateSupport: 0,
        // 设置上传的请求头部
        headers: { Authorization: "Bearer " + getToken() },
        // 上传的地址
        url: process.env.VUE_APP_BASE_API + "/performance/abcdefg",
      },
      // 上传时要传递的参数
        uploadData:{
            taskId:'',
            templateId:'',
            fileName:''
        },
        fileName:''
        }
    },
    components: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        submitFileForm(){

        },
        handleFileSuccess(response, file, fileList) {
            console.log('13579',response, file, fileList)
      this.upload.open = false;
      this.upload.isUploading = false;
      this.$refs.upload.clearFiles();
    //   this.$alert(
    //     "<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>" +
    //       response.msg +
    //       "</div>",
    //     "导入结果",
    //     { dangerouslyUseHTMLString: true }
    //   );
    //   this.getList();
    console.log("上传成功")
    this.$emit("getTableData")
    },
    beforFileUp(file){
        console.log("before",file)
        this.uploadData.fileName=file.name
    },
        // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
        // console.log('before',file)
        // this.uploadData.fileName=file.name
        this.upload.isUploading = true;
    },
        importExcelHandleOpen(){
            this.upload.open = true
        },
        importTemplate(){
            this.download('performance/abc', {
        ...this.queryParams
      }, `user_template_${new Date().getTime()}.xlsx`)
        }
    },
};
</script>

<style lang='less' scoped>

</style>
```

### Element-ui中 选择器（Select 数据量大）

[解决 Element-ui中 选择器（Select）因options 数据量大导致渲染慢、页面卡顿的问题-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1086565)

### Element-ui upload组件 上传文件类型限制（文件名限制）

[Element-ui upload组件 上传文件类型限制_el-upload默认支持的文件类型-CSDN博客](https://blog.csdn.net/qq_34707272/article/details/103895176)

首先写accept，其次判断文件后缀名，在组件beforeUpload事件中将文件格式控制在合理范围内，防止用户自己选择可接受的文件格式；另外控制文件大小。

**注意事项：**不使用默认上传，使用手动上传时，beforeUpload 一定要返回 false,否则还是会调用默认的上传事件。

```js
extType: "png,jpg,jpeg,doc,docx,xls,xlsx,pdf"   文件后缀名

:before-upload="(file)=>beforeUpload(file,extType)"

getFileNameWithoutExtension (fileName) {   //获取不带后缀的文件名
  // 分割文件名字符串，以最后一个点为界
  var parts = fileName.split('.')
  // 如果文件名中有多个点，我们只取最后一个点之前的部分作为文件名
  // 如果没有点，或者只有一个点（文件名以点开头），则直接返回整个文件名
  return parts.length > 1 ? parts.slice(0, -1).join('.') : fileName
},
    
beforeUpload (file, extType) {
    //  文件名符合正则表达式可通过
    const regex = /^[^\\n!@#$%^&*,.?\"{}|<>]+$/
      if (regex.test(this.getFileNameWithoutExtension(file.name))) {
       } else {
        this.$message.error('文件名不能含有特殊字符')
        return false
       }
    
    
      const fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1)
      const whiteList = extType.split(',')
      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message.error(`上传文件只能是 ${extType}格式`)
        return false
      }
      const isLt10M = file.size / 1024 / 1024 < 10
      if (!isLt10M) {
        this.$message.error('上文件大小不能超过 10MB!')
      }
      return isLt10M
    },
```

```js
// 上传图片限制

beforeUpload (file) {
      // let isType, isLtSize
        const isType = file.type.indexOf('image/') !== -1
       const isLtSize = file.size / 1024 / 1024 < 10

      if (!isType && !isLtSize) {
        this.$message.error('上传的文件格式错误，文件大小不能超过 10MB!')
      } else if (!isType) {
        this.$message.error('上传的文件格式错误！')
      } else if (!isLtSize) {
        this.$message.error('上传的文件大小不能超过 10MB!')
      }
      return isType && isLtSize
    },
```



```js
beforeUpload(file) {
      const isJpgOrPng =
        file.type === 'image/jpeg' ||
        file.type === 'image/jpg' ||
        file.type === 'image/png' ||
        file.type === 'application/pdf'
      if (!isJpgOrPng) {
        this.$message.error('请上传jpg,png图片或pdf文件')
      }
      const isLt10M = file.size / 1024 / 1024 < 10
      if (!isLt10M) {
        this.$message.error('上文件大小不能超过 10MB!')
      }
      return isJpgOrPng && isLt10M
    },
```



### Element UI 中国省市区级联数据

####  element-china-area-data 

 [element-china-area-data - Element UI 中国省市区级联数据)](https://www.npmjs.com/package/element-china-area-data) 

 `npm install element-china-area-data -S` 

vue3和vue2有点区别，没有TextToCode方法，有codeToText方法

```javascript
import { regionData,  provinceAndCityData,CodeToText,TextToCode} 
from 'element-china-area-data'

export default{
	data(){
		return{
			regions: regionData,
			provinceAndCitys:provinceAndCityData
		}
		
	}
}
```



##### **uniapp**   **picker**组件使用element-china-area-data，实现省市选择器 （两级）

.vue文件

```javascript
<uni-forms-item class="native-place" name="currentLocation" label="家庭所在地">
    <picker  custom-item="请选择"  mode="multiSelector" :range="home" 
    range-key="label" :value="homeIndex" @change="pickerHomeChange"
    @columnchange="pickerHomeColumnchange">
        {{gzdds? gzdds: '请选择' }}
    </picker>
</uni-forms-item>
```



```javascript
import { regionData,  provinceAndCityData,CodeToText,TextToCode} 
from 'element-china-area-data'

export default{
	data(){
		return{
			homeData:provinceAndCityData,
            home:[[],[]],
            homeIndex:[0,0],
		}
		
	},
	created(){
        this.home[0] = this.homeData
        this.home[1] = this.homeData[0].children
	},
	methods:{
	pickerHomeChange(e) {
        this.homeIndex = e.detail.value;
        //  底下的代码可根据自己的需要来拼接想要的数据
        this.address = this.home[0][this.homeIndex[0]].label + this.home[1]             			[this.homeIndex[1]].label 
        this.gzdds=CodeToText[this.home[0]		[this.homeIndex[0]].value]+'/'+CodeToText[this.home[1][this.homeIndex[1]].value]
        // this.gzddCode=CodeToText[this.home[1][this.homeIndex[1]].value]
        },
        pickerHomeColumnchange(e) {
            if (e.detail.column === 0) {
            // 声明城市数组
            let cityArr = [];
            let countyArr = [];
        // 设置下标
        this.homeIndex = [e.detail.value, 0, 0];
        this.$set(this.home, 1, this.homeData[e.detail.value].children);
        }
        if (e.detail.column === 1) {
            this.homeIndex[1] = e.detail.value;
            this.homeIndex[2] = 0;
        }
        },
	}
}
```

##### **uniapp**   **picker**组件使用element-china-area-data，实现省市区选择器  (三级)

.vue

```javascript
<uni-forms-item class="home-address" name="birthplaceNorm" label="籍贯">
					<picker  custom-item="请选择" mode="multiSelector" :range="region" 
			range-key="label" :value="regionIndex" @change="pickerChange"
			@columnchange="pickerColumnchange">
						{{formData.birthplaceNorm? formData.birthplaceNorm: '请选择' }}
					</picker>
				</uni-forms-item>
```

```javascript
export default{
	data(){
		return{
			regionData:regionData,
			region: [[],[],[]],
			regionIndex:[0,0,0],
		}
	},
	created(){
	    this.region[0] = this.regionData
		this.region[1] = this.regionData[0].children
		this.region[2] = this.regionData[0].children[0].children
	},
    methods:{
        pickerChange(e) {
				this.regionIndex = e.detail.value;
            //  底下的代码可根据自己的需要来拼接想要的数据
					this.formData.birthplaceNorm=CodeToText[this.region[0][this.regionIndex[0]].value]+'/'+CodeToText[this.region[1][this.regionIndex[1]].value]+'/'+CodeToText[this.region[2][this.regionIndex[2]].value]
			},
			pickerColumnchange(e) {
				if (e.detail.column === 0) {
					// 声明城市数组
					let cityArr = [];
					let countyArr = [];
					// 设置下标
					this.regionIndex = [e.detail.value, 0, 0];
					this.$set(this.region, 1, this.regionData[e.detail.value].children);
					this.$set(this.region, 2, this.regionData[e.detail.value].children[0].children);
				}
				if (e.detail.column === 1) {
					this.regionIndex[1] = e.detail.value;
					this.regionIndex[2] = 0;
					this.$set(this.region, 2, this.regionData[this.regionIndex[0]].children[this.regionIndex[1]].children);
				}
				if (e.detail.column === 2) {
					this.regionIndex[2] = e.detail.value;
				}
			},
    }
}
```

#### Administrative-divisions-of-China

省市区选择

Administrative-divisions-of-China 项目就提供了国内行政区划（五级：省级、地级、县级、乡级和村级）数据，**数据均来自官方**。

**Github：**https://github.com/modood/Administrative-divisions-of-China

### **Element UI 国民经济行业分类**

#### Element UI 国民经济行业分类

 [element-china-category-Element UI 国民经济行业分类](https://www.npmjs.com/package/element-china-category-data) 

 `npm install element-china-category-data -S` 



## ant design vue 

### a-table增加序号列

```
const columns = [
  {
    title: "序号",
    width: 70,
    align:center,
    customRender: (text, record, index) => `${index + 1}`,
  },
]
```



分页序号连续 ( 通过分页参数计算序号)

```
       {
          title: '序号',
          width: 70,
          align: 'center',
          fixed: 'left',
          customRender: (text, record, index) => (this.pageNum - 1) * this.pageSize + Number(index) + 1
        },
```



### a-table空数据时表头无法滚动

```
/* 在全局样式文件或组件内 <style scoped> 中添加  全局可以加在 APP.vue的 style 标签里面 */
/deep/.ant-table-scroll {
  overflow: auto !important; /* 确保总是有滚动条 */
}

/deep/.ant-table-body {
  min-height: 20px; /* 设置最小高度，确保空数据时也有足够的空间展示滚动条 */
}
```



### 分页选择，得到分页的 selectedRows

参考 ：[antd table跨页多选简单实现获取全部selectedRows项目背景：antd 1.0版 + vue2 使用a- - 掘金 (juejin.cn)](https://juejin.cn/post/7240023332267065401)

```
:row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"


    onSelectChange(selectedRowKeys, selectedRows) {
      for (let val of selectedRows) {
        if (!this.selectedRows.find((item) => item.id === val.id)) {
          this.selectedRows.push(val)
        }
      }
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = this.selectedRows.filter((item) => this.selectedRowKeys.includes(item.id))
    },
```

[antd table跨页多选简单实现获取全部selectedRows - 掘金 (juejin.cn)](https://juejin.cn/post/7240023332267065401)

[ant design vue跨页实现表格多选_ant design vue table 分页多选-CSDN博客](https://blog.csdn.net/a793304663/article/details/134332821)





### ant-design table fixed错位解决方案

https://blog.csdn.net/qq_38118138/article/details/130622854    （实测可用）

```js
给 a-table 设置一个id，调用如下方法。

fixTable(tableId){
        //解决左右两边fixed固定的表格行高不一致
        let that = this
        this.$nextTick(() => {
          //table的id
          let tableId = tableId

          const scrollDiv = document.querySelector(`#${tableId} .ant-table-scroll > .ant-table-body`)
          const leftFixedDiv = document.querySelector(`#${tableId} .ant-table-fixed-left .ant-table-body-inner`)
          const rightFixedDiv = document.querySelector(`#${tableId} .ant-table-fixed-right .ant-table-body-inner`)

          //表头thead的tr高度
          const cssHeaderSelector = 'table.ant-table-fixed thead'
          const scrollHeaderTr = scrollDiv.querySelector(cssHeaderSelector)
          const leftFixedHeaderTr = leftFixedDiv.querySelector(cssHeaderSelector)
          const rightFixedHeaderTr = rightFixedDiv.querySelector(cssHeaderSelector)

          const theoryHeaderTrHeight = getComputedStyle(scrollHeaderTr).height

          leftFixedHeaderTr.style.height = theoryHeaderTrHeight
          rightFixedHeaderTr.style.height = theoryHeaderTrHeight

          //表体tbody的tr高度，循环对每一行进行调整
          setTimeout(() => {
            that.dataSource.forEach((item) => {
              //每一行的rowKey值，也就是<a-table>设置的rowKey
              let rowKey = item.id

              const cssSelector = `table.ant-table-fixed tr[data-row-key='${rowKey}']`
              const rightFixedTr = rightFixedDiv.querySelector(cssSelector)
              const leftFixedTr = leftFixedDiv.querySelector(cssSelector)
              const scrollTr = scrollDiv.querySelector(cssSelector)

              const theoryTrHeight = getComputedStyle(scrollTr).height

              leftFixedTr.style.height = theoryTrHeight
              rightFixedTr.style.height = theoryTrHeight
            })
          }, 10)
        })

    },
```

### a-modal 弹框全屏显示

```
<a-modal class="check-modal" ></a-modal>

<style lang="less">
.check-modal {
  .ant-modal {
    top: 0px !important;
    height: 100vh;
  }
  .ant-modal-content {
    height: 100vh;
    overflow: auto;
  }
}
</style>
```



### Ant Design of Vue  a-table 表格行满足条件高亮

```
<a-table
      :rowClassName="setRowClassName"
      :rowKey="(record,index)=>{return index}"
    >
    
setRowClassName (record) {
       if (record.province == '山东省') {
       return 'row-color'
      } else {
       return 'row-color2'
      }
    },

// style 不能加 scoped，否则行样式不生效

<style  lang="less">
.row-color{
  background:#e6f7ff !important;
}
.row-color2{
  background:white !important;
}
</style>
```

### Ant Design of Vue清除表单校验

clearValidate和resetFields区别

```javascript
this.$refs['form'].resetFields() //移除校验结果并重置字段值
this.$refs['form'].clearValidate() //移除校验结果
```

### ant design vue 年份选择器

```
<a-date-picker
          mode="year"
          format="YYYY"
          v-model="year"
          :open="yearShowOne"
          @openChange="openChangeOne"
          @panelChange="panelChangeOne"
          placeholder="请选择年份"
        >

import moment from "moment"


data(){
return{
	year: (new Date().getFullYear()).toString() || null,
    yearShowOne: false
}
}

methods:{
	getYear () {
        this.year = moment().format('YYYY')
      },
    openChangeOne (status) {
      if (status) {
        this.yearShowOne = true
      }
    },
    // 得到年份选择器的值
    panelChangeOne (value) {
      this.year = moment(value).format('YYYY')
      this.yearShowOne = false
    },

}
```

时间格式化：

```
format="yyyy-MM-DD HH:mm:ss"
valueFormat="yyyy-MM-DD HH:mm:ss"
```



### ant design vue  表格隔行变色

```
::v-deep .ant-table-tbody .ant-table-row:nth-child(2n) {
		background: #e6f7ff;
	}
```



### ant design vue表格实现导入

importExcel.vue

```vue
<template>
  <a-modal
    :title="title"
    :visible="open"
    :confirm-loading="uploading"
    @cancel="importExcelHandleCancel"
    @ok="importExcelHandleChange"
  >
    <a-spin tip="上传中..." :spinning="uploading">
      <a-upload-dragger
        name="file"
        accept=".xlsx, .xls"
        :file-list="fileList"
        :multiple="false"
        :remove="handleRemove"
        :before-upload="beforeUpload"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">请将文件拖拽到此处上传</p>
        <p class="ant-upload-hint">
          请先导出再导入上传，支持单个上传，也可以点击后选择文件上传
        </p>
      </a-upload-dragger>
      <a @click="importTemplate">下载模板</a>
    </a-spin>
  </a-modal>
</template>

<script>
import { importPositionData } from "@/api/rpo/recruit"
export default {
  name: "ImportExcel",
  props: {},
  components: {},
  data () {
    return {
      title: "导入",
      open: false,
      uploadStatus: "",
      fileList: [],
      // 是否禁用上传
      uploading: false,
      updateSupport: 0,
      tableData: [],
      projcetid: ''
    }
  },
  filters: {},
  created () {},
  computed: {},
  watch: {},
  methods: {
    importTemplate () {
      const arr = []
      for (let i = 0; i < this.tableData.length; i++) {
        arr.push(this.tableData[i].id)
      }
      this.download(
        "/position/positionInfo/downloadTemplateExcel",
        { },
        `职位导入_${new Date().getTime()}.xlsx`
      )
    },
    /** 导入excel窗体关闭 */
    importExcelHandleCancel (e) {
      this.open = false
      this.fileList = []
      // 关闭后刷新列表
      this.$emit("ok")
    },
    /** 导入excel窗体开启 */
    importExcelHandleOpen (val) {
      this.tableData = val
      this.open = true
    },
    beforeUpload (file) {
      this.fileList = [file]
      return false
    },
    /** 导入excel */
    importExcelHandleChange () {
      this.uploading = true
      const { fileList } = this
      const formData = new FormData()
      formData.append("file", fileList[0])
      // formData.append('updateSupport', this.updateSupport)
      console.log(formData, fileList[0])
      importPositionData(formData)
        .then((response) => {
          this.fileList = []
          this.$message.success(response.msg)
          this.open = false
          this.$emit("ok")
        })
        .finally(() => {
          this.uploading = false
        })
    },
    handleCheckedUpdateSupport () {
      this.updateSupport = this.updateSupport === 0 ? 1 : 0
    },
    handleRemove () {
      this.fileList = []
      this.uploading = false
    }
  }
}
</script>
```

父组件

```vue
<importExcel ref="importExcel"></importExcel>

<a-button type="dashed" @click="$refs.importExcel.importExcelHandleOpen()">
            <a-icon type="vertical-align-top" />
            批量导入
          </a-button>
```

### 分页器（模板）

```vue
<template>
	<div class="pagination">
                <a-pagination
                  size="small"
                  :current="queryParams.pageNum"
                  :pageSize="queryParams.pageSize"
                  @change="pageChange"
                  @showSizeChange="pageSizeChange"
                  :total="total"
                  :show-total="total => `共 ${total} 条`"
                  show-size-changer
                  show-quick-jumper />
     </div>
</template>

<script>
export default {
  data () {
    return {
      data:[]
      queryParams: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  methods: {
    // 接口获取数据
    getList () {
      this.getList(this.queryParams).then((res) => {
        // 表格数据
        this.data = res.data.records
        this.total = res.total
      })
    },
    pageChange (page, pageSize) {
      this.queryParams.pageNum = page
      this.getList()
    },
    pageSizeChange (current, size) {
      this.queryParams.pageSize = size
        this.queryParams.pageNum=1
      this.getList()
    }
  }
}
</script>
```



### 函数式调用弹出输入框

[AntDV Modal组件函数方式调用自定义content为a-input并实现数据绑定_vue antd 对话框content包含a标签-CSDN博客](https://blog.csdn.net/qq_45223338/article/details/128162647)

### 解决antdesign控件在div全屏下不显示的问题(如 Modal)

[【AntDesign】解决antdesign控件在div全屏下不显示的问题_popover getcontainer-CSDN博客](https://blog.csdn.net/qq_41357122/article/details/122110291)



### vue 分页删除最后一条数据，返回上一级的分页

[vue 分页删除最后一条数据，返回上一级的分页_vue删除最后一个跳转至上一页-CSDN博客](https://blog.csdn.net/weixin_46873254/article/details/119959532)

```js
// total 总数
// this.queryParam.page  传参的页面
// this.queryParam.page  传参的数据条数

this.$confirm({
          title: '提示：', //标题
          content: '您确认要删除选中的数据吗？',
          onOk: () => {
            //点击确认时的执行
            delIt(record.id).then((res) => {
              if (res.resp_code == 0) {
                this.$message.success('删除成功')
                const totalPage = Math.ceil((this.total - 1) / this.queryParam.limit)
                this.queryParam.page = this.queryParam.page > totalPage ? totalPage : this.queryParam.page
                this.queryParam.page = this.queryParam.page < 1 ? 1 : this.queryParam.page
                this.getList()
              } else {
                this.$message.error(res.resp_msg)
              }
            })
          }
        })
```

