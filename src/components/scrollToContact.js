const scrollToContact = () => {
    document.querySelector('ul#navigation a[href^="#"]').addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const yOffset = targetElement.getBoundingClientRect().top;
            const offset = 80; // Adjust the offset as needed

            window.scrollTo({
                top: yOffset + window.pageYOffset - offset,
                behavior: 'smooth',
            });
        }
    });
};

export default scrollToContact;
