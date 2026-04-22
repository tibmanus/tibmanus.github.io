const guestbookButton = document.getElementById("guestbook-button");
const guestbookResponse = document.getElementById("guestbook-response");
const viewCount = document.getElementById("view-count");

const fakeComments = [
    "Comment posted: wig status = legendary.",
    "Comment posted: 10/10 would tease bangs for this.",
    "Comment posted: Prik is not ready for this much hair.",
    "Comment posted: RSVP energy detected."
];

if (guestbookButton && guestbookResponse) {
    guestbookButton.addEventListener("click", () => {
        const randomComment = fakeComments[Math.floor(Math.random() * fakeComments.length)];
        guestbookResponse.textContent = randomComment;
    });
}

if (viewCount) {
    let count = Number.parseInt(viewCount.textContent, 10);

    window.setInterval(() => {
        count += Math.floor(Math.random() * 3) + 1;
        viewCount.textContent = String(count).padStart(6, "0");
    }, 4000);
}

document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const expanded = button.getAttribute("aria-expanded") === "true";
        const symbol = button.querySelector(".faq-symbol");

        document.querySelectorAll(".faq-question").forEach((otherButton) => {
            otherButton.setAttribute("aria-expanded", "false");
            const otherAnswer = otherButton.nextElementSibling;
            const otherSymbol = otherButton.querySelector(".faq-symbol");

            if (otherAnswer) {
                otherAnswer.hidden = true;
            }

            if (otherSymbol) {
                otherSymbol.textContent = "+";
            }
        });

        if (!expanded && answer) {
            button.setAttribute("aria-expanded", "true");
            answer.hidden = false;

            if (symbol) {
                symbol.textContent = "−";
            }
        }
    });
});
