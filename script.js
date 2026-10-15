
// 目标网址：原神官网 (隐藏跳转)
const TARGET_URL = "https://ys.mihoyo.com/";

// 生成随机会话ID以增加严肃感
document.getElementById('session-id').innerText = Math.random().toString(36).substring(2, 10).toUpperCase();

// 获取按钮元素
const enterBtn = document.getElementById('btn-enter');
const exitBtn = document.getElementById('btn-exit');

// 定义跳转函数
function redirectToTarget() {
    // 改变光标状态
    document.body.style.cursor = 'progress';
    
    // 模拟系统处理延迟，增加压迫感
    setTimeout(() => {
        window.location.href = TARGET_URL;
    }, 800);
}

// 绑定事件监听器
enterBtn.addEventListener('click', redirectToTarget);
exitBtn.addEventListener('click', redirectToTarget);

// 键盘辅助支持
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirectToTarget();
    }
});
