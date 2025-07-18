document.getElementById("payWithPaypal").addEventListener("click", async () => {
    const offerId = "E742054483_IT";
    const paymentMethodId = "288978806";
    const redirectUrl = window.location.origin + "/thankyou.html";

    try {
        const orderRes = await fetch("https://sandbox-api.cleeng.com/3.1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "ApiKey d5YHMSLo1MrGctScuB5iRF358hS3jpd5ezlsf-WTqgGrqNw8"
            },
            body: JSON.stringify({
                offerId: offerId,
                publisherId: 620638530
            })
        });

        const orderData = await orderRes.json();
        const orderId = orderData.orderId;

        await fetch(`https://sandbox-api.cleeng.com/3.1/orders/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "ApiKey d5YHMSLo1MrGctScuB5iRF358hS3jpd5ezlsf-WTqgGrqNw8"
            },
            body: JSON.stringify({
                paymentMethodId: paymentMethodId
            })
        });

        const tokenRes = await fetch("https://sandbox-api.cleeng.com/connectors/paypal/v1/tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "ApiKey d5YHMSLo1MrGctScuB5iRF358hS3jpd5ezlsf-WTqgGrqNw8"
            },
            body: JSON.stringify({
                orderId: orderId,
                successUrl: redirectUrl,
                cancelUrl: window.location.href,
                errorUrl: window.location.href
            })
        });

        const tokenData = await tokenRes.json();

        if (tokenData.redirectUrl) {
            window.location.href = tokenData.redirectUrl;
        } else {
            alert("Errore nella generazione del token PayPal.");
        }

    } catch (err) {
        console.error("Errore PayPal:", err);
        alert("Si è verificato un errore durante il pagamento.");
    }
});
