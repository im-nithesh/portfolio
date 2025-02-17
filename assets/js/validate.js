// Initialize EmailJS
(function() {
    emailjs.init('CW5V2F2BwfK4JSwjC');
})();

function sendContact() {
    "use strict";

    let forms = document.querySelectorAll('#contact-form');

    forms.forEach(function(e) {
        e.addEventListener('submit', function(event) {
            event.preventDefault();

            let thisForm = this;
            let formData = new FormData(thisForm);

            const mailData = {
                user: {
                    recipient_email: formData.get('email').toString(),
                    subject: "Excited to Connect and Collaborate on Your Development Needs!",
                    template: "template_uloc0fs"
                },
                org: {
                    recipient_email: ["nnithesh2910@gmail.com"],
                    subject: "From Portfolio - New Client",
                    template: "template_5xj1sk2"
                }
            };

            email_form_submit(thisForm, mailData.user, formData);
            email_form_submit(thisForm, mailData.org, formData);
        });
    });

    function email_form_submit(thisForm, user, formData) {
        emailjs.send('service_kh8n434', user.template, {
            from_name: formData.get('name').toString(),
            from_email: formData.get('email').toString(),
            to_email: user.recipient_email,
            subject_email: user.subject,
            subject_user: formData.get('message-sub').toString(),
            from_number: formData.get('number').toString(),
            message_email: formData.get('message').toString()
        })
        .then(function(response) {
            if (response.status === 200) {
                $('.success-message').addClass('active');
                setTimeout(() => {
                    $('.success-message').removeClass("active");
                }, 7000);
            } else {
                $('.error-message h6').html(response.text);
                $('.error-message').addClass('active');
                setTimeout(() => {
                    $('.error-message').removeClass("active");
                }, 7000);
            }
        }, function(error) {
            $('.error-message h6').html(error.text);
            $('.error-message').addClass('active');
            setTimeout(() => {
                $('.error-message').removeClass("active");
            }, 7000);
        });
    }
}
