function register() {
    const productId = document.getElementById("productId").value;
    const name = document.getElementById("name").value;
    const manufacturer = document.getElementById("manufacturer").value;

    fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, name, manufacturer })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("qr").innerHTML =
            `<img src="${data.qrCode}" width="200"/>`;
    });
}
