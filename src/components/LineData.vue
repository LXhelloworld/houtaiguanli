<template>
    <div class=''>
        <div ref="linedata" class="line-data"></div>
    </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props:[
    ],
    data() {
        //这里存放数据
        return {

        };
    },
    mounted() {
        this.$nextTick(() => {
            this.drewLine()
        })
    },
    //方法集合
    methods: {
        drewLine () {
            let linedata = this.$refs.linedata
            if(linedata){
                let echart = echarts.init(linedata)
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['a', 'b', 'c', 'd']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: "line",
                            data: [12, 23, 43, 12, 45, 41]
                        }
                    ]
                }
                echart.setOption(option)
            }
            
        }
    }

    //生命周期 - 挂载完成（可以访问DOM元素）
    
}
</script>
<style scoped>
    .line-data{
        width: 400px;
        height: 400px;
    }
</style>