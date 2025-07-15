
document.getElementById("access-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const offerId = "E657284309_IT";
    const publisherToken = "veTswRKnDveOGTZkoj72qcRUMvPn7Oa4H_Zlnc_fNpa5Bh9J";

    if (!email) {
        alert("Inserisci una email valida.");
        return;
    }

    CleengWebSdk.init({
        publisherToken,
        offerId,
        customerEmail: email,
        redirectUrl: "thankyou.html"
    });

    CleengWebSdk.showCheckout();
});
