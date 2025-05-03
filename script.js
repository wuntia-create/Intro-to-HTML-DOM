document.getElementById("showPopupBtn").addEventListener("click",function() {
    const modalElement = document.getElementById("modalElement");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
});