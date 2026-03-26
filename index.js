// index.js
document.getElementById("product-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const productName = document.getElementById("product-name").value;

    // 显示 SweetAlert2 加载提示框
    Swal.fire({
        title: '正在生成报告...',
        text: '请稍等片刻。',
        icon: 'info',
        showConfirmButton: false,
        timer: 2000
    });

    // 假设你已经有一个生成报告的 API
    const response = await fetch(`https://your-api-endpoint/generate?product=${productName}`);
    const result = await response.text();

    document.getElementById("result").innerHTML = `
        <h3>生成的报告：</h3>
        <div class="card p-3" style="background: rgba(255, 255, 255, 0.2); border-radius: 12px;">
            <pre style="font-size: 1rem; color: #333;">${result}</pre>
            <a href="data:application/msword;charset=utf-8,${encodeURIComponent(result)}" download="product_report.docx" class="download-btn">
                下载报告 <i class="fas fa-download"></i>
            </a>
        </div>
    `;

    // 在报告生成后显示成功弹窗
    Swal.fire({
        title: '报告已生成！',
        text: '点击下面的按钮下载报告。',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});
