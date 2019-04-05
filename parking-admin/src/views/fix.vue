<template>
  <div class="fix">
    <div class="fix-form">
     <Input search placeholder="请输入报修名称" ></Input>
    </div>
    <Divider>
      <span class="fix-divider">报修记录</span>
    </Divider>
    <Table height="500" small :columns="carTitle" :data="carData">
      <template slot-scope="{ row }" slot="fixName">
        <strong>{{ row.fixName }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" style="margin-right:10px">完成</Button>
        <Button type="error">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import fixDesc from '../components/fix-desc.vue';
export default {
   components: { fixDesc },
  data() {
    return {
      finish: "finish",
      carTitle: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(fixDesc, {
              props: {
                row: params.row
              }
            });
          }
        },
        { title: "报修名称", key: "fixName" },
        { title: "报修人", key: "fixUser" },
        { title: "报修类型", key: "fixType" },
        { title: "报修日期", key: "fixDate", sortable: true },
        {
          title: "是否完成",
          key: "fixEable",
          sortable: true
        },
        {
          title: "操作",
          slot: "action",
          width: 180,
          align: "center"
        }
      ],
      carData: [
        {
          fixName: "xiaoming",
          fixUser: "xiaoming",
          fixType: "出错",
          fixDate: "2019-2-21",
          fixEable: "是",
          content:"1231223123"
        },
        {
          fixName: "xiaoming",
          fixUser: "xiaoming",
          fixType: "出错",
          fixDate: "2019-2-25",
          fixEable: "否",
          content:"jdfjdfj"
        }
      ]
    };
  }
};
</script>

<style scoped>
.fix-form {
  width: 300px;
  margin: 0 auto;
}
.fix-sumbit {
  margin-left: 80px;
  margin-right: 30px;
}
.fix-divider {
  font-size: 14px;
}
.fix-list {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 500px;
  margin: 0 auto;
}
.fix-list::-webkit-scrollbar {
  display: none;
}
.fix-card {
  width: 400px;
  cursor: pointer;
  margin: 10px 40px;
}
.fix-card-flex {
  display: flex;
}
.fix-content {
  width: 300px;
}
.fix-content div {
  font-size: 18px;
}
.fix-icon {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 30px;
}
.unfinish {
  color: rgb(179, 55, 38);
}
.finish {
  color: rgb(51, 206, 51);
}
</style>