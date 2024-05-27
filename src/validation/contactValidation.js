const { object, string, boolean } = require('yup');

const contactSchema = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string()
        .email('Invalid email address')
        .required('Email is required')
        .test('is-unique', 'Email address is already in use', async (value) => {
            const contact = await Contact.findOne({ email: value });
            return !contact;
        }),
    phoneNumber: string(),
    message: string().required('Message is required'),
    agreeToPrivacyPolicy: boolean().oneOf([true], 'You must agree to the privacy policy')
});

module.exports = contactSchema;