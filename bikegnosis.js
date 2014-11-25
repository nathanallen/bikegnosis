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

function build_checklist_section(section_title, type) {
    var section_values = gnoses[type],
        title = "<h2>" + section_title + "</h2>",
        new_elements = [title],
        n = section_values.length
    for (var i = 0; i < n; i++ ){
        var name = section_values[i]
        new_elements.push("<label><input type='checkbox' name='" + type +"' value='" + name + "'>" + name.replace(/_/g, " ") + "<br/></label>")
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

function render_solutions() {
  var $problems = $('div#problems'),
      problems_tmpl = $('#problem-item').html()
  $problems.html('')
  $problems.append(build_problem_summaries(problems_tmpl, filtered_problems))
}

function render_page() {
    var $form = $('form')

    $form.find('.pull_left')
         .append(build_checklist_section("Sound Type", "sounds"))
         .append(build_checklist_section("Worse When...", "worse_whens"))
         .append(build_checklist_section("Rhythm Type", "rhythms"))
         .append(build_checklist_section("Every revolution of the...", "revolution_types"))

    $('#diagnostic input').click(function(e){
      filter_type = $(this).attr('name')
      filter_val = $(this).attr('value')
      if ($(this).is(':checked')) {
        console.log('weird', this)
        render_solutions(filter_problems(filter_type, filter_val))
      } else {
        render_solutions(filter_problems("","",true))
      }
    })

    render_solutions()
}

var filter = {},
    filtered_problems = clone(problems)

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function filter_problems(filter_key, filter_val, force) {
    if (force) {
      filtered_problems = clone(problems);
      filter = {}
      return filtered_problems
    }

    filtered_problems = filtered_problems.filter(function(obj){
      var data = obj[filter_key]
      if (filter_val in data) return data[filter_val]
      var n = data.length
      while (n--) {
        if (data[n] == filter_val) return true
      }
      return false
    })

    return filtered_problems
}