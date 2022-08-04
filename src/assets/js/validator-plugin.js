$(document).ready(function () {
  $('.exhibitorForm').each(function () {
    $(this).validate({
      rules: {
        select: {
          required: true,
        },
        companyName: {
          required: true,
        },
        selectTitle: {
          required: true,
        },
        jobTitle: {
          required: true,
        },
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        address: {
          required: true,
        },
        telNumber: {
          required: false,
        },
        mobNumber: {
          required: true,
        },
        email: {
          required: true,
          //  email: true,
        },
        websiteUrl: {
          required: true,
        },
        productActivities: {
          required: true,
        },
      },
      messages: {
        select: {
          required: 'Select an option',
        },
      },
    });
  });
});
