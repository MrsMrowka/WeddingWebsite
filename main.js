$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="pl"]').show(); // show just Korean text (you can change it)
$('#language-toggle').change(function (e) { // put onchange event when user select option from select
    if (e.target.checked) {
            $('[lang]').hide();
            $('[lang="en"]').show();
    } else
    {
        $('[lang]').hide();
        $('[lang="pl"]').show();

    }
});