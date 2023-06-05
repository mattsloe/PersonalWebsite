window.onload = function () {
    Particles.init({
        // normal options
        selector: '.background',
        maxParticles: 100,
        color: ['#AAAAAA','#63c6df','#DBEDF3','#FAE2A5'],
        connectParticles: true,
        sizeVariations: 3,
        speed: .4,

        // options for breakpoints
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 60,
                    color: '#AAAAAA'
                }
            }
            , {
                breakpoint: 525,
                options: {
                    maxParticles: 40,
                    connectParticles: false
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 25,
                    connectParticles: false
                }
            }
        ]
    });
};