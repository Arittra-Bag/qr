document.getElementById("generate").addEventListener("click", function () {
    const data = document.getElementById("data").value;
    if (data) {
        fetch(`/generate_qr?data=${encodeURIComponent(data)}`)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qrcode.png';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            });
    }
});
