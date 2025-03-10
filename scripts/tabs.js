document.addEventListener('DOMContentLoaded', () => {
    const btnTabs = document.querySelectorAll('.btn-tab');
    const tabsContent = document.querySelectorAll('.tabs-content');

    btnTabs.forEach((btn) => {
        btn.addEventListener('click', () => {
            btnTabs.forEach((btn) => btn.classList.remove('btn-tab_open'));
            btn.classList.add('btn-tab_open');
            updateContent();
        })
    })

    function updateContent() {
        let dataBtn = 0;
        btnTabs.forEach((btn) => {
            if (btn.closest('.btn-tab_open')) {
                dataBtn = btn.getAttribute('data-tabs');
                tabsContent.forEach((content) => {
                    

                    content.style.display = 'none';

                    if (content.getAttribute('data-tabs') === dataBtn) {
                        content.style.display = 'block';
                    }



                })

            }

        })
    }

    updateContent()
})