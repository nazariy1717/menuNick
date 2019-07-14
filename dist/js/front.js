let golfIframe = {

    yards: 0,
    src: 0,
    golfAnimation: null,

    dependencies: {
        'Driver': {
            'Headwind': {
                'None': {
                    yards: 317,
                    src: '/dist/js/json/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 289,
                    src: '/dist/js/json/D WS H10.json'
                },
                '20 Mph': {
                    yards: 262,
                    src: '/dist/js/json/D WS H20.json'
                },
                '30 Mph': {
                    yards: 235,
                    src: '/dist/js/json/D WS H30.json'
                }
            },
            'Tailwind': {
                'None': {
                    yards: 317,
                    src: '/dist/js/json/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 334,
                    src: '/dist/js/json/D WS T10.json'
                },
                '20 Mph': {
                    yards: 354,
                    src: '/dist/js/json/D WS T20.json'
                },
                '30 Mph': {
                    yards: 366,
                    src: '/dist/js/json/D WS T30.json'
                }
            },
            'L Cross': {
                'None': {
                    yards: 317,
                    src: '/dist/js/json/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 313,
                    src: '/dist/js/json/D WS L10.json'
                },
                '20 Mph': {
                    yards: 313,
                    src: '/dist/js/json/D WS L20.json'
                },
                '30 Mph': {
                    yards: 313,
                    src: '/dist/js/json/D WS L30.json'
                }
            },
            'R Cross': {
                'None': {
                    yards: 317,
                    src: '/dist/js/json/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 313,
                    src: '/dist/js/json/D WS R10.json'
                },
                '20 Mph': {
                    yards: 313,
                    src: '/dist/js/json/D WS R20.json'
                },
                '30 Mph': {
                    yards: 313,
                    src: '/dist/js/json/D WS R30.json'
                }
            },
        },
        '4-iron': {},
        '7-iron': {},
        'P Wedge': {},
    },

    init: function () {
        this.writeTitle();
        this.getParameters();
        this.events();
    },

    writeTitle: function () {
        let titleClubParam = $('.js-btn-club.active').text();
        let titleDirectionParam = $('.js-btn-direction.active').text();
        let titleSpeedParam = $('.js-btn-speed.active').text();

        $('.js-title-club').text(titleClubParam);
        $('.js-title-direction').text(titleDirectionParam);
        $('.js-title-speed').text(titleSpeedParam);

    },

    getParameters: function () {
        let self = this;
        let clubParam = $('.js-btn-club.active').text();
        let directionParam = $('.js-btn-direction.active').text();
        let speedParam = $('.js-btn-speed.active').text();

        console.log(clubParam);
        console.log(directionParam);
        console.log(speedParam);

        self.yards = self.dependencies[clubParam][directionParam][speedParam].yards;
        self.src = self.dependencies[clubParam][directionParam][speedParam].src;
        console.log(self.yards);
        console.log(self.src);
        $('.js-tooltip-yards').text(self.yards);
        self.playAnimation();
    },

    playAnimation: function(){
        let self = this;

        if(self.golfAnimation){
            self.golfAnimation.destroy();
            $('.iframe-tooltip').hide();
            $('.iframe-tooltip').removeClass('active');
        }

        self.golfAnimation = bodymovin.loadAnimation({
            container: document.getElementById('iframe-lottie'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            prerender: true,
            path: self.src
        });
        self.golfAnimation.play();

        self.golfAnimation.addEventListener('complete',function(){
            console.log('end');
            $('.iframe-tooltip').show();
            $('.iframe-tooltip').addClass('active');
        });

    },

    events: function () {
        let self = this;

        document.querySelector('.iframe-nav__title').addEventListener('click', function () {
            document.querySelector('.iframe-nav').classList.toggle('active');
        });

        $(document).on('click', '.js-btn-club', function () {
            if (!$(this).hasClass('active')) {
                $('.js-btn-club').removeClass('active');
                $(this).addClass('active');
                self.writeTitle();
                self.getParameters();

            }
        });

        $(document).on('click', '.js-btn-direction', function () {
            if (!$(this).hasClass('active')) {
                $('.js-btn-direction').removeClass('active');
                $(this).addClass('active');
                self.writeTitle();
                self.getParameters();

            }
        });

        $(document).on('click', '.js-btn-speed', function () {
            if (!$(this).hasClass('active')) {
                $('.js-btn-speed').removeClass('active');
                $(this).addClass('active');
                self.writeTitle();
                self.getParameters();

            }
        });

    }
};


jQuery(function () {
    golfIframe.init();
});
