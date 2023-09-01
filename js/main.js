(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const responses = {
    "hi": "hola,how can i help you!",
    "hello": "Hi there!",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "bye": "Goodbye! Feel free to come back anytime.",
    "hello": "Hello! Welcome to our ice cream shop. How can I assist you today?",
    "menu": "Sure! Here's a list of our popular flavors: Vanilla, Chocolate, Strawberry, Mint Chocolate Chip, and Rocky Road. We also have a variety of toppings and waffle cones.",
    "flavors": "We offer a variety of flavors, including Vanilla, Chocolate, Strawberry, Mint Chocolate Chip, and Rocky Road. Which one would you like to try?",
    "toppings": "We have a variety of toppings, including sprinkles, hot fudge, caramel, whipped cream, and nuts. What toppings would you like on your ice cream?",
    "pricing": "Our ice cream prices start at $3 for a single scoop and vary based on the number of scoops and additional toppings you choose. Would you like to see the full pricing details?",
    "hours": "We are open from 12:00 PM to 9:00 PM, Monday to Saturday, and from 1:00 PM to 8:00 PM on Sundays. Is there anything else you'd like to know?",
    "specials": "We have daily specials! Today's special is Buy One, Get One Free on all sundaes. Don't miss out!",
    "order": "Great choice! What size and flavor would you like for your ice cream? You can also add toppings or choose a waffle cone.",
    "size": "We offer three sizes: Small, Medium, and Large. Which one would you like?",
    "confirmation": "Your order is confirmed. We'll prepare your ice cream with your selected options. Is there anything else you'd like to add?",
    "thank you": "You're welcome! Enjoy your delicious ice cream, and thank you for choosing us. If you have any more questions or need assistance, feel free to ask.",
    "default": "I'm not sure how to respond to that."
    

};

function displayBotMessage(message) {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = message;
    chatLog.appendChild(botMessage);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function processUserInput() {
    const userMessage = userInput.value.toLowerCase();
    userInput.value = "";

    if (userMessage) {
        displayBotMessage(userMessage);

        let response = responses[userMessage];
        if (!response) {
            response = responses["default"];
        }

        setTimeout(() => {
            displayBotMessage(response);
        }, 500);
    }
}

sendButton.addEventListener("click", processUserInput);
userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        processUserInput();
    }
});
