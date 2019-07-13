 let golfIframe = {

    init: function(){
        this.writeTitle();
        this.events();
    },

     writeTitle: function(){
        let titleClubParam = $('.js-btn-club.active').text();
        let titleDirectionParam = $('.js-btn-direction.active').text();
        let titleSpeedParam = $('.js-btn-speed.active').text();

        $('.js-title-club').text(titleClubParam);
        $('.js-title-direction').text(titleDirectionParam);
        $('.js-title-speed').text(titleSpeedParam);

        console.log(titleClubParam);
        console.log(titleDirectionParam);
        console.log(titleSpeedParam);
     },



    events: function(){
        let self = this;

        document.querySelector('.iframe-nav__title').addEventListener('click', function () {
            document.querySelector('.iframe-nav').classList.toggle('active');
        });

        $(document).on('click', '.js-btn-club', function () {
            if(!$(this).hasClass('active')){
                $('.js-btn-club').removeClass('active');
                $(this).addClass('active');
                self.writeTitle();
            }
        });

        $(document).on('click', '.js-btn-direction', function () {
            if(!$(this).hasClass('active')){
                $('.js-btn-direction').removeClass('active');
                $(this).addClass('active');
                self.writeTitle();
            }
        });

        $(document).on('click', '.js-btn-speed', function () {
            if(!$(this).hasClass('active')){
                $('.js-btn-speed').removeClass('active');
                $(this).addClass('active');
                self.writeTitle();
            }
        });

    }
 };


 jQuery(function () {
     golfIframe.init();
 });
