<template>
    <div>
        <ul class="tipMsg">
            <form>
                <li class="title">发票信息</li>
                <li><span>公司名</span><input type="text"  placeholder="填写公司名"></li>
                <li><span>税号</span><input type="text"  placeholder="填写税号"></li>
                <li><span>开户行</span><input type="text"  placeholder="填写开户行"></li>
                <li><span>账号</span><input type="text"  placeholder="填写账号"></li>
                <li><span>地址</span><input type="text"  placeholder="填写地址"></li>
                <li><span>联系电话</span><input type="text"  placeholder="填写联系电话"></li>
                <li class="title">收件信息</li>
                <li><span>收件人</span><input type="text"  placeholder="填写收件人"></li>
                <li><span>收件电话</span><input type="text"  placeholder="填写收件电话"></li>
                <li><span>收件地址</span><input type="text"  placeholder="填写收件地址"></li>
                <li class="btn"> <input type="button" value="提交"/> </li>
            </form>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "MailInvoice"
    }
</script>

<style scoped>
.tipMsg{
  width: 100%;
}
li{
  padding-left: .15rem;
  display: flex;
  height:.5rem;
  align-items: center;
  background: #fff;
  margin-bottom: 2px;
}
li span{
  width: .75rem;
}
li input{
  border: none;
  outline: none;
  font-size: .12rem;
}
  .title{
    line-height: .28rem;
    font-size:.15rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    background: #F7F8FA;
  }
  .btn{
    width: 2.8rem;
    height: .45rem;
    background: #30C27B;
    margin: 0.45rem auto;
    justify-content: center;

  }
  .btn input{
    background: none;
    color: #fff;
    font-size: .15rem;
  }
</style>
