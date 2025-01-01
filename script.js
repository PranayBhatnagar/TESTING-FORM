document.getElementById("google-sheets-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbzlpxOs_4B16pGFn2SfXw7WSYLXzfBm6JUgTWSVw1SSnB_70UWbmVit4Y6y9AZcNtxb/exec";
    const form = e.target;
    const formData = new FormData(form);

    const responseMessage = document.getElementById("response-message");

    try {
        const response = await fetch(scriptURL, { method: "POST", body: formData });
        if (response.ok) {
            responseMessage.textContent = "Form submitted successfully!";
            responseMessage.style.color = "green";
            form.reset();
        } else {
            responseMessage.textContent = "Failed to submit form. Please try again.";
            responseMessage.style.color = "red";
        }
    } catch (error) {
        responseMessage.textContent = "An error occurred. Please try again.";
        responseMessage.style.color = "red";
        console.error("Error:", error);
    }
});
