
<<<<<<< HEAD
document.getElementById("access-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const offerId = "E657284309_IT";
    const publisherToken = "veTswRKnDveOGTZkoj72qcRUMvPn7Oa4H_Zlnc_fNpa5Bh9J";

    if (!email) {
        alert("Inserisci una email valida.");
=======
document.getElementById("watch-live-btn").addEventListener("click", () => {
    const offerId = "E657284309_IT";
    const publisherToken = "veTswRKnDveOGTZkoj72qcRUMvPn7Oa4H_Zlnc_fNpa5Bh9J";
    const customerEmail = prompt("Inserisci la tua email per continuare:");

    if (!customerEmail) {
        alert("L'email è necessaria per procedere.");
>>>>>>> 525b1e2c588da677715de20349f05f19dcb98700
        return;
    }

    CleengWebSdk.init({
        publisherToken: publisherToken,
        offerId: offerId,
<<<<<<< HEAD
        customerEmail: email,
=======
        customerEmail: customerEmail,
>>>>>>> 525b1e2c588da677715de20349f05f19dcb98700
        redirectUrl: "thankyou.html"
    });

    CleengWebSdk.showCheckout();
});
