---
date: 2022-01-06
category:
  - node
tag:
  - pay
star: 10

---

# 支付

## 微信支付

[产品中心 - 微信支付商户平台 (qq.com)](https://pay.weixin.qq.com/static/product/product_intro.shtml?name=jsapi)

[微信支付接入指引 - 微信支付商户平台 (qq.com)](https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml)

### 商户号申请

## 支付宝支付（沙箱）

参考：[支付宝沙箱支付——傻瓜教程_支付宝沙箱支付教程-CSDN博客](https://blog.csdn.net/weixin_43952736/article/details/119784560)

### 配置沙箱环境

沙箱环境：[沙箱环境 - 支付宝文档中心 (alipay.com)](https://opendocs.alipay.com/common/02kkv7?pathHash=9a45a6d6)

[开放平台 (alipay.com)](https://openhome.alipay.com/develop/manage)    支付宝扫码登录-》点击沙箱=》查看沙箱应用

需要获取：Appld、支付宝网关地址、应用私钥、支付宝公钥

### 内网穿透

打开内网穿透工具，可以使用 nat-app

原因：因为要把本地的服务暴露到公网，让支付宝可以调用我们的接口给我们传递数据

### 导入依赖

```
  <dependency>
            <groupId>com.alipay.sdk</groupId>
            <artifactId>alipay-sdk-java</artifactId>
            <version>4.35.79.ALL</version>
        </dependency>
```

### PayController(业务代码)

```java
@Controller
@RequestMapping("/pay")
@Slf4j
@Api(tags = "支付相关")
public class PayController {
    // appId
    private final String APP_ID = "9021000134660166";
    // 应用私钥(根据网站显示的填入)
    private final String APP_PRIVATE_KEY = "MIIEvgIBADANBgkqhqqqqqJyJbcq3Cxsp4gcQr";
    private final String CHARSET = "UTF-8";
    // 支付宝公钥
    private final String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0qqqqqqBAQEFAAOCAQ8AMIIBDAQAB";
    //这是沙箱接口路径,正式路径为https://openapi.alipay.com/gateway.do
    //private final String GATEWAY_URL = "https://openapi.alipaydev.com/gateway.do";
    //支付宝网关地址(沙箱地址)
    private final String GATEWAY_URL ="https://openapi-sandbox.dl.alipaydev.com/gateway.do";
    
    private final String FORMAT = "JSON";
    //签名方式
    private final String SIGN_TYPE = "RSA2";
    //支付宝异步通知路径,付款完毕后会异步调用本项目的方法,必须为公网地址（此处使用内网穿透的地址）
    private final String NOTIFY_URL = "http://x95iy4.natappfree.cc/pay/returnUrl";
    //支付宝同步通知路径,也就是当付款完毕后跳转本项目的页面,可以不是公网地址(可以跳转到网站页面)
    private final String RETURN_URL = "http://127.0.0.1:5173/#/index";

    @RequestMapping("alipay")
    @ApiOperation("支付宝支付")
    public void alipay(Integer orderId, HttpServletResponse httpResponse) throws IOException {
        System.out.println("支付宝支付");
        //实例化客户端,填入所需参数
        AlipayClient alipayClient = new DefaultAlipayClient(GATEWAY_URL, APP_ID, APP_PRIVATE_KEY, FORMAT, CHARSET, ALIPAY_PUBLIC_KEY, SIGN_TYPE);
        AlipayTradePagePayRequest request = new AlipayTradePagePayRequest();
        //在公共参数中设置回跳和通知地址
        request.setReturnUrl(RETURN_URL);
        request.setNotifyUrl(NOTIFY_URL);
        //根据订单编号,查询订单相关信息
//        Order order = IPayService.selectById(orderId);
        //商户订单号，商户网站订单系统中唯一订单号，必填
        String out_trade_no = orderId.toString();
        //付款金额，必填
        String total_amount = "0.01";
        //订单名称，必填
        String subject = "订单测试";
        //商品描述，可空
        String body = "";
        request.setBizContent("{\"out_trade_no\":\"" + out_trade_no + "\","
                + "\"total_amount\":\"" + total_amount + "\","
                + "\"subject\":\"" + subject + "\","
                + "\"body\":\"" + body + "\","
                + "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
        String form = "";
        try {
            form = alipayClient.pageExecute(request).getBody(); // 调用SDK生成表单
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        httpResponse.setContentType("text/html;charset=" + CHARSET);
        httpResponse.getWriter().write(form);// 直接将完整的表单html输出到页面
        httpResponse.getWriter().flush();
        httpResponse.getWriter().close();
    }

    @RequestMapping(value = "/returnUrl", method = RequestMethod.POST)
    public String returnUrl(HttpServletRequest request, HttpServletResponse response)
            throws IOException, AlipayApiException {
        System.out.println("============同步回调===========(post方法，get方法可能报错)");
        // 获取支付宝GET过来反馈信息
        Map<String, String> params = new HashMap<String, String>();
        Map<String, String[]> requestParams = request.getParameterMap();
        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
            String name = (String) iter.next();
            String[] values = (String[]) requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i] : valueStr + values[i] + ",";
            }
            // 乱码解决，这段代码在出现乱码时使用
            valueStr = new String(valueStr.getBytes("utf-8"), "utf-8");
            params.put(name, valueStr);
        }

        System.out.println(params);//查看参数都有哪些
        boolean signVerified = AlipaySignature.rsaCheckV1(params, ALIPAY_PUBLIC_KEY, CHARSET, SIGN_TYPE); // 调用SDK验证签名
//验证签名通过
        if(signVerified){
            // 商户订单号
            String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"), "UTF-8");

            // 支付宝交易号
            String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"), "UTF-8");

            // 付款金额
            String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"), "UTF-8");

            System.out.println("商户订单号="+out_trade_no);
            System.out.println("支付宝交易号="+trade_no);
            System.out.println("付款金额="+total_amount);

            //支付成功，修复支付状态
            // payService.updateById(Integer.valueOf(out_trade_no));
            return "ok";//跳转付款成功
        }else{
            return "no";//跳转付款失败
        }
    }
}

```

### 前端调用

```js
// 前端点击支付后，调用pay方法，打开支付页面（ orderId是订单号 ）
const pay=()=>{
  console.log(1)
  // 支付宝支付 (这个路径对应后台接口路径)
  window.open("http://localhost:8084/pay/alipay?orderId=1522")
}
```

### 流程

1 用户点击支付，打开支付页面 `window.open("http://localhost:8084/pay/alipay?orderId=1522")` ，这个支付页面是后端代码生成的（需要传递订单号这个参数）。

2 用户输入账号，密码，支付密码完成支付。

3 支付成功后会调用后台的回调方法   /pay/returnUrl ，（可以返回支付的相关信息）。

4 付款完毕后跳转本项目的任意页面  RETURN_URL  （可以自行设置跳转到的页面）

## 聚合支付

[Jeepay - 计全文档 (jeequan.com)](https://docs.jeequan.com/docs/jeepay/index)