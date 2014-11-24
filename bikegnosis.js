$(document).ready(function(){
    render_page()
})

function build_checklist_section(section_title, section_values) {
    var title = "<h2>" + section_title + "</h2>",
        new_elements = [title],
        n = section_values.length

    for (var i = 0; i < n; i++ ){
        var name = section_values[i]
        new_elements.push("<label><input type='checkbox' value='" + name + "'>" + name + "<br/><label>")
    }
    return new_elements
}

function render_page() {
    var $form = $('form')
    $form.append(build_checklist_section("Sound Type", sounds))
    $form.append(build_checklist_section("Rhythm Type", rhythms))
}
