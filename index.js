// index.js
document.getElementById("product-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const productName = document.getElementById("product-name").value;

    // 假设你已经有一个生成报告的 API
    const response = await fetch(`https://your-api-endpoint/generate?product=${productName}`);
    const result = await response.text();

    document.getElementById("result").innerHTML = `
        <h3>生成的报告：</h3>
        <div class="card p-3">
            <pre>${result}</pre>
            <a href="data:application/msword;charset=utf-8,${encodeURIComponent(result)}" download="product_report.docx" class="download-btn">
                下载报告
            </a>
        </div>
    `;
});
