const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
const carouselContent = document.getElementById('carouselContent');
const modalTitle = document.getElementById('projectModalLabel');

function openProjectModal(title, images) {
    modalTitle.innerText = title;
    carouselContent.innerHTML = '';

    images.forEach((imgUrl, index) => {
        const activeClass = index === 0 ? 'active' : '';
        carouselContent.innerHTML += `
                    <div class="carousel-item ${activeClass}">
                        <div class="carousel-placeholder">
                            <div class="text-center">
                                <img src="${imgUrl}" alt="img" class="d-block w-100">
                            </div>
                        </div>
                    </div>
                `;
    });

    projectModal.show();
}