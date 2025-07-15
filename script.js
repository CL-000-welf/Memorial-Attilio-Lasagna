
document.getElementById("watch-live-btn").addEventListener("click", () => {
    const offerId = "E657284309_IT";
    const publisherToken = "veTswRKnDveOGTZkoj72qcRUMvPn7Oa4H_Zlnc_fNpa5Bh9J";
    const customerEmail = prompt("Inserisci la tua email per continuare:");

    if (!customerEmail) {
        alert("L'email è necessaria per procedere.");
        return;
    }

    CleengWebSdk.init({
        publisherToken: publisherToken,
        offerId: offerId,
        customerEmail: customerEmail,
        redirectUrl: "thankyou.html"
    });

    CleengWebSdk.showCheckout();
});
