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

### Element UI 中国省市区级联数据

####  element-china-area-data 

 [element-china-area-data - Element UI 中国省市区级联数据)](https://www.npmjs.com/package/element-china-area-data) 

 `npm install element-china-area-data -S` 

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

