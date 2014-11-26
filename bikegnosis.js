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

function build_checklist_section(section_title, name) {
    var section_values = problem_criteria[name],
        title = "<h2>" + section_title + "</h2>",
        new_elements = [title],
        n = section_values.length
    for (var i = 0; i < n; i++ ){
        var value = section_values[i]
        new_elements.push("<label><input type='radio' name='" + name +"' value='" + value + "'>" + value.replace(/_/g, " ") + "<br/></label>")
    }
    new_elements.push($("<button>Reset</button>").click(function(){$('input[name=' + name + ']:checked').attr('checked', false); return false;}))
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
  if (!filtered_problems.length){
    $problems.append("<h1>No Results</h1>")
            .append(build_problem_summaries(problems_tmpl, no_results))
  }
  $problems.append(build_problem_summaries(problems_tmpl, filtered_problems))
}

function render_page() {
    var $diagnostic = $('form #diagnostic')

    $diagnostic.append(build_checklist_section("Sound Type", "sound"))
               .append(build_checklist_section("Worse When...", "worse_when"))
               .append(build_checklist_section("Rhythm Type", "rhythm"))
               .append(build_checklist_section("Every revolution of the...", "revolution_type"))

    $diagnostic.find('input').change(function(e){
        render_solutions(filter_problems())
    })

    $diagnostic.find('button').click(function(e){
        render_solutions(filter_problems())
    })

    render_solutions()
}

var filtered_problems = clone(problems)

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function filter_problems() {
    filtered_problems = clone(problems);
    var selections = $('input:checked')
    var i = selections.length
    while (i--) {
      var $selection = $(selections[i])
      filter_key = $selection.attr('name')
      filter_val = $selection.attr('value')
      filtered_problems = filtered_problems.filter(function(obj){
        // horribly ugly as data may be a string, object or array.
        var data = obj[filter_key]
        if (typeof(data) == "string") return data === filter_val;
        if (data == undefined) return false; // no key in object
        var n = data.length
        while (n--) {
          if (data[n] == filter_val) return true;
        }
        return false;
      })
    }

    return filtered_problems
}