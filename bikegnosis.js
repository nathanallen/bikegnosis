$(document).ready(function(){
    render_page()
})

// render function taken from riot.js framework
var FN = {}, // Precompiled templates (JavaScript functions)
  template_escape = {"\\": "\\\\", "\n": "\\n", "\r": "\\r", "'": "\\'"},
  render_escape = {'&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;'};

function default_escape_fn(str, key) {
  return str == null ? '' : (str+'').replace(/[&\"<>]/g, function(char) {
    return render_escape[char];
  });
}

function render(tmpl, data, escape_fn) {
  if (escape_fn === true) escape_fn = default_escape_fn;
  tmpl = tmpl || '';

  return (FN[tmpl] = FN[tmpl] || new Function("_", "e", "return '" +
    tmpl.replace(/[\\\n\r']/g, function(char) {
      return template_escape[char];
    }).replace(/{\s*([\w\.]+)\s*}/g, "' + (e?e(_.$1,'$1'):_.$1||(_.$1==null?'':_.$1)) + '") + "'")
  )(data, escape_fn);
};
// end riot.js render

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

function build_problem_summaries(problems_tmpl, filtered_problems) {
    var n = filtered_problems.length,
        new_elements = []

    for (var i = 0; i < n; i++ ){
        new_elements.push(render(problems_tmpl, filtered_problems[i]))
    }
    return new_elements
}

function render_page() {
    var $form = $('form'),
        $problems = $('div#problems'),
        problems_tmpl = $('#problem-item').html()

    $form.find('.pull_left')
         .append(build_checklist_section("Sound Type", sounds))
         .append(build_checklist_section("Worse When...", worse_whens))
         .append(build_checklist_section("Rhythm Type", rhythms))
         .append(build_checklist_section("Every revolution of the...", revolution_types))
    $problems.append(build_problem_summaries(problems_tmpl, problems))
    
}
