document.getElementById("payWithPaypal").addEventListener("click", async () => {
    const offerId = "E901153399_IT";
    const paymentMethodId = "288978806";
    const redirectUrl = window.location.origin + "/thankyou.html";

    try {
        const orderRes = await fetch("https://api.cleeng.com/3.1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                offerId: offerId
            })
        });

        const orderData = await orderRes.json();
        const orderId = orderData.orderId;

        await fetch(`https://api.cleeng.com/3.1/orders/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                paymentMethodId: paymentMethodId
            })
        });

        const tokenRes = await fetch("https://api.cleeng.com/connectors/paypal/v1/tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
