document.getElementById("buy-access-btn").addEventListener("click", () => {
    const offerId = "E657284309_IT"; // Sostituisci con l'ID offerta reale su Cleeng
    const publisherToken = "veTswRKnDveOGTZkoj72qcRUMvPn7Oa4H_Zlnc_fNpa5Bh9J";

    // Simulazione email (in produzione, raccogli l’email utente con login)
    const customerEmail = prompt("Inserisci la tua email per acquistare accesso:");

    if (!customerEmail) {
        alert("Email necessaria per procedere.");
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
