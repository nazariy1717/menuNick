let golfIframe = {

    yards: 0,
    src: 0,
    yardText: 0,
    yardCurve: 0,

    golfAnimation: null,
    loader: null,

    dependencies: {
        'Driver': {
            'Headwind': {
                'None': {
                    yards: 317,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 289,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS H10.json'
                },
                '20 Mph': {
                    yards: 262,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS H20.json'
                },
                '30 Mph': {
                    yards: 235,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS H30.json'
                }
            },
            'Tailwind': {
                'None': {
                    yards: 317,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 334,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS T10.json'
                },
                '20 Mph': {
                    yards: 354,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS T20.json'
                },
                '30 Mph': {
                    yards: 366,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS T30.json'
                }
            },
            'L Cross': {
                'None': {
                    yards: 317,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/driver/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 21,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS L10.json'
                },
                '20 Mph': {
                    yards: 43,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS L20.json'
                },
                '30 Mph': {
                    yards: 66,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS L30.json'
                }
            },
            'R Cross': {
                'None': {
                    yards: 317,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS NIL.json'
                },
                '10 Mph': {
                    yards: 21,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS R10.json'
                },
                '20 Mph': {
                    yards: 43,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS R20.json'
                },
                '30 Mph': {
                    yards: 66,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/driver/D WS R30.json'
                }
            },
        },
        '4-iron': {
            'Headwind': {
                'None': {
                    yards: 204,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 188,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS H10.json'
                },
                '20 Mph': {
                    yards: 168,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS H20.json'
                },
                '30 Mph': {
                    yards: 144,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS H30.json'
                }
            },
            'Tailwind': {
                'None': {
                    yards: 204,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 215,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS T10.json'
                },
                '20 Mph': {
                    yards: 221,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS T20.json'
                },
                '30 Mph': {
                    yards: 223,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS T30.json'
                }
            },
            'L Cross': {
                'None': {
                    yards: 204,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 18,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/4Iron/4Iron WS L10.json'
                },
                '20 Mph': {
                    yards: 37,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/4Iron/4Iron WS L20.json'
                },
                '30 Mph': {
                    yards: 57,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/4Iron/4Iron WS L30.json'
                }
            },
            'R Cross': {
                'None': {
                    yards: 204,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/4Iron/4Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 18,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/4Iron/4Iron WS R10.json'
                },
                '20 Mph': {
                    yards: 37,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/4Iron/4Iron WS R20.json'
                },
                '30 Mph': {
                    yards: 57,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/4Iron/4Iron WS R30.json'
                }
            },
        },
        '7-iron': {
            'Headwind': {
                'None': {
                    yards: 166,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 149,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS H10.json'
                },
                '20 Mph': {
                    yards: 128,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS H20.json'
                },
                '30 Mph': {
                    yards: 102,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS H30.json'
                }
            },
            'Tailwind': {
                'None': {
                    yards: 166,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 179,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS T10.json'
                },
                '20 Mph': {
                    yards: 187,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS T20.json'
                },
                '30 Mph': {
                    yards: 191,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS T30.json'
                }
            },
            'L Cross': {
                'None': {
                    yards: 166,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 17,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/7Iron/7Iron WS L10.json'
                },
                '20 Mph': {
                    yards: 36,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/7Iron/7Iron WS L20.json'
                },
                '30 Mph': {
                    yards: 55,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/7Iron/7Iron WS L30.json'
                }
            },
            'R Cross': {
                'None': {
                    yards: 166,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/7Iron/7Iron WS NIL.json'
                },
                '10 Mph': {
                    yards: 17,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/7Iron/7Iron WS R10.json'
                },
                '20 Mph': {
                    yards: 36,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/7Iron/7Iron WS R20.json'
                },
                '30 Mph': {
                    yards: 55,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/7Iron/7Iron WS R30.json'
                }
            },
        },
        'P Wedge': {
            'Headwind': {
                'None': {
                    yards: 131,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS NIL.json'
                },
                '10 Mph': {
                    yards: 115,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS H10.json'
                },
                '20 Mph': {
                    yards: 94,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS H20.json'
                },
                '30 Mph': {
                    yards: 68,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS H30.json'
                }
            },
            'Tailwind': {
                'None': {
                    yards: 131,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS NIL.json'
                },
                '10 Mph': {
                    yards: 143,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS T10.json'
                },
                '20 Mph': {
                    yards: 152,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS T20.json'
                },
                '30 Mph': {
                    yards: 157,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS T30.json'
                }
            },
            'L Cross': {
                'None': {
                    yards: 131,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS NIL.json'
                },
                '10 Mph': {
                    yards: 16,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/PWedge/PW WS L10.json'
                },
                '20 Mph': {
                    yards: 32,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/PWedge/PW WS L20.json'
                },
                '30 Mph': {
                    yards: 50,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/PWedge/PW WS L30.json'
                }
            },
            'R Cross': {
                'None': {
                    yards: 131,
                    yardText: 'yards',
                    curveText: '',
                    src: 'dist/js/json/PWedge/PW WS NIL.json'
                },
                '10 Mph': {
                    yards: 16,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/PWedge/PW WS R10.json'
                },
                '20 Mph': {
                    yards: 32,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/PWedge/PW WS R20.json'
                },
                '30 Mph': {
                    yards: 50,
                    yardText: 'yard',
                    curveText: 'curve',
                    src: 'dist/js/json/PWedge/PW WS R30.json'
                }
            },
        },
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

        self.src = self.dependencies[clubParam][directionParam][speedParam].src;
        self.yardsCount = self.dependencies[clubParam][directionParam][speedParam].yards;
        self.yardText = self.dependencies[clubParam][directionParam][speedParam].yardText;
        self.yardCurve = self.dependencies[clubParam][directionParam][speedParam].curveText;

        console.log(self.src);
        console.log(self.yardsCount);
        console.log(self.yardText);

        $('.js-tooltip-yards-count').text(self.yardsCount);
        $('.js-tooltip-yards-text').text(self.yardText);
        $('.js-tooltip-yards-curve').text(self.yardCurve);

        if(self.golfAnimation){
            self.loader.destroy();
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

        self.loader = bodymovin.loadAnimation({
            container: document.getElementById('iframe-loader'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            prerender: false,
            path: 'dist/js/json/loader.json'
        });
    },

    playAnimation: function(){
        let self = this;

        ga('send', 'event', {
            eventCategory: 'play',
            eventAction: 'play',
            eventLabel: 'play'
        });

        $('.iframe-overlay').addClass('active');
        $('.iframe-overlay').fadeOut();

        $('#iframe-loader').fadeIn();
        self.loader.play();

        self.loader.addEventListener('complete',function(){
            $('#iframe-loader').fadeOut();
            self.golfAnimation.play();
        });


        self.golfAnimation.addEventListener('complete',function(){
            console.log('end');
            $('.iframe-tooltip').show();
            $('.iframe-tooltip').addClass('active');
        });

    },

    events: function () {
        let self = this;

        $(document).on('click', '.iframe-nav__title', function () {
            $('.iframe-nav').toggleClass('active');
            if(!$('.iframe-nav').hasClass('active')){
                self.playAnimation();
            }
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
